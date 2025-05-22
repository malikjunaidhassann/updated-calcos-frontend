import { useRef, useState } from "react";
import { Input } from "./ui/input";
import useProductSearch from "../hooks/useProductSearch";
import { isGeneralUrl, isImageUrl } from "../utils/utilities";
import useProductStore from "../store/productStore";

const SearchBar = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [searchText, setSearchText] = useState("");
    const {
        handleURLSearch,
        handleImgSearch,
    } = useProductSearch();

    const {
        resetState,
    } = useProductStore();

    const handleSearchQuery = async (query: any) => {
        try {
            if (!query) return;

            query?.imageUrl || query?.generalUrl
                ? await handleURLSearch(query.imageUrl || query.generalUrl)
                : await handleImgSearch(query?.imagePath);
        } catch (error) {
            console.error("Error Occured in search query", error);
            resetState()
        }
    };

    const handleTextSearch = () => {
        if (isGeneralUrl(searchText)) {
            handleSearchQuery({ generalUrl: searchText });
        } else if (isImageUrl(searchText)) {
            handleSearchQuery({ imageUrl: searchText });
        } else {
            alert("Please enter a valid product URL or image URL.");
            return;
        }
    };

    // Handles both "Enter" key press and button click
    const handleKeyDown = (event: any) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleTextSearch();
        }
    };

    // Handles file change when the user selects an image
    const handleFileChange = (event: any) => {
        const file = event.target.files?.[0];
        if (!file) return;
        if (file?.type.startsWith("image/")) {
            handleSearchQuery({ imagePath: file });
        } else {
            alert("Please select a valid image file.");
            event.target.value = null;
        }
        // Reset file input value to allow re-selecting the same image
        event.target.value = null;
    };
    return (
        <div className="w-full max-w-[489px] mx-auto md:mx-0 mb-8 md:mb-0">
            <div className="relative w-full h-[40px] md:h-[40px] py-2">
                <div className="absolute w-full h-full top-0 left-0">
                    <div className="relative w-full h-full bg-[#b4b4b48a] rounded-[40px] border border-solid border-white backdrop-blur-sm backdrop-brightness-[100%]  [-webkit-backdrop-filter:blur(4px)_brightness(100%)] sm:min-w-[50px]">
                        <Input
                            className="absolute w-[calc(100%-80px)] top-1/2 -translate-y-1/2 left-8 placeholder:text-white [font-family:'Inter',Helvetica] font-normal text-white  tracking-[-0.42px] leading-[normal] bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0"    
                            placeholder="calcos.es/Paste URL or search"
                            onChange={(e) => setSearchText(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                </div>

                <button className="absolute w-[20px] md:w-[30px] h-[20px] md:h-[30px] top-1/2 -translate-y-1/2 right-2 md:right-4 bg-[#fe37a3] rounded-[23.5px] flex items-center justify-center"
                    onClick={() => fileInputRef.current?.click()}
                >
                    <img
                        className="w-[13px] md:w-[15px] h-[18px] md:h-[23px]"
                        alt="Search icon"
                        src="/icon--stroke-.svg"
                    />
                </button>
                <input className="hidden" type="file" ref={fileInputRef} accept="image/*" onChange={handleFileChange} />
            </div>
        </div>
    )
}

export default SearchBar