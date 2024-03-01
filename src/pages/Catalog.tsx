import Navbar from "../components/base/Navbar";
import CatalogContent from "../components/contents/CatalogContent";

const Catalog = () => {

    return (
        <div className='h-screen bg-stars bg-no-repeat bg-cover bg-local overflow-auto'>
            <div>
                <Navbar/>
            </div>
            <div className="my-8">
                <h1 className="font-inter text-white text-center text-5xl font-bold">
                    Observatorium and Planetarium
                </h1>
            </div>
            <CatalogContent/>
        </div>
    );
}

export default Catalog;