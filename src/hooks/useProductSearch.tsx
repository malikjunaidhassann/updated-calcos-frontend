import { useNavigate } from "react-router-dom";
import useProductStore from "../store/productStore";

const useProductSearch = () => {
    const navigate = useNavigate();
    const backend_Url = import.meta.env.VITE_BACKEND_URL;
    const cloud_name = import.meta.env.VITE_CLOUD_NAME;
    const cloud_secret_key = import.meta.env.VITE_CLOUD_SECRET_KEY;
    const cloud_api_key = import.meta.env.VITE_CLOUD_API_KEY;

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
            `${backend_Url}visual_matches?url=${encodeURIComponent(url)}`,
            url
        );
    };
    const uploadToCloudinary = async (file: any) => {
        const url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "my_preset"); // See below

        const res = await fetch(url, {
            method: "POST",
            body: formData,
        });

        const data = await res.json();
        return data.secure_url; // Public image URL
    };

    const handleImgSearch = async (image: any) => {
        resetState();
        // const base64Url: any = await convertToBase64(image);
        const imageUrl = await uploadToCloudinary(image);
        handleURLSearch(imageUrl)
    };

    return {
        handleURLSearch,
        handleImgSearch,
    };
};

export default useProductSearch;
