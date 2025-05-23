import { useNavigate } from "react-router-dom";
import useProductStore from "../store/productStore";

const useProductSearch = () => {
    const navigate = useNavigate();
    const backend_Url =   import.meta.env.VITE_BACKEND_URL;
    const {
        STATUS,
        setInputProduct,
        appendSimilarProducts,
        setStatus,
        resetState,
    } = useProductStore();

    const setupEventSource = (url: any, image = null) => {
        navigate('/results')
        const eventSource = new EventSource(url);

        eventSource.onmessage = (event) => {
            try {
                const msg = JSON.parse(event.data);
                if (msg.inputData) {
                    const data = image
                        ? { ...msg.inputData, imageUrl: image }
                        : { ...msg.inputData, imageUrl: msg.inputData };

                    setInputProduct(data);
                    setStatus(STATUS.LOADWITHDATA);
                }
                else if (msg.similarProducts) {
                    appendSimilarProducts(msg.similarProducts);
                }
            } catch (error) {
                console.error("Error parsing SSE data:", error);
            }
        };

        eventSource.addEventListener("Done", () => {
            setStatus(STATUS.DONE);
            eventSource.close();
            console.log("DONE: Received all products.");
        });

        eventSource.onerror = (error) => {
            console.error("SSE Error:", error);
            eventSource.close();
            setStatus(STATUS.IDLE);
        };

        return eventSource;
    };

    const handleURLSearch = (url: any) => {
        resetState();
        setupEventSource(
            `${backend_Url}lens/url?imageUrl=${encodeURIComponent(url)}`,
            url
        );
    };
    const convertToBase64 = (file: any) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => resolve(reader.result); // base64 string
            reader.onerror = (error) => reject(error);

            reader.readAsDataURL(file); // This returns base64-encoded data URL
        });
    };
    const handleImgSearch = async (image: any) => {
        resetState();
        const base64Url: any = await convertToBase64(image);
        try {
            const response = await fetch(`${backend_Url}image-upload`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ base64Image: base64Url })
            });

            const data = await response.json();
            setupEventSource(
                `${backend_Url}lens/base64?filename=${encodeURIComponent(data.filename)}`,
                base64Url
            );
        } catch (error) {
            console.error("Error during image search:", error);
            setStatus(STATUS.IDLE);
        }
    };

    return {
        handleURLSearch,
        handleImgSearch,
    };
};

export default useProductSearch;
