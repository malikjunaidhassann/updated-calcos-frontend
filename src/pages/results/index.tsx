import IdleElement from "../../components/IdleElement.js";
import LoadingElement from "../../components/LoadingElement.js";
import Results from "../../components/Results.js";
import useProductSearch from "../../hooks/useProductSearch";
import "../../assets/pages.css";
import SearchBar from "../../components/SearchBar.js";
import Header from "../../components/Header.js";
import useProductStore from "../../store/productStore.js";


function Index() {
    const {
        inputProduct,
        similarProducts,
        currentStatus,
        STATUS,
    } = useProductStore();

    console.log("Current status:", currentStatus);

    const renderStatusElement = () => {
        switch (currentStatus) {
            case STATUS.IDLE:
                return (
                    <>
                        <SearchBar />
                        <Results
                            inputProduct={inputProduct}
                            similarProducts={similarProducts}
                            isLoading={currentStatus}
                        />
                        <IdleElement />
                    </>
                );
            case STATUS.LOADING:
                return (
                    <>
                        <SearchBar />
                        <LoadingElement />
                    </>
                );
            default:
                return (
                    <>
                        <SearchBar />
                        <Results
                            inputProduct={inputProduct}
                            similarProducts={similarProducts}
                            isLoading={currentStatus}
                        />
                    </>
                );
        }
    };

    return (
        <>
            <main>
                <Header />
                <div className="smaller">
                    <div className="home-page pt-[50px]">{renderStatusElement()}</div>
                </div>
            </main>
        </>
    );
}


export default Index;
