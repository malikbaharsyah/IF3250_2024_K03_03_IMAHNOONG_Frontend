import Navbar from "../components/base/Navbar";
import CatalogContent from "../components/contents/CatalogContent";

const Catalog = () => {

    return (
        <div className='h-screen bg-stars bg-no-repeat bg-cover bg-local overflow-auto'>
            <div>
                <Navbar/>
            </div>
            <div className="my-8">
                <h1 className="font-inter text-white text-center text-5xl font-bold py-5">
                    Observatorium and Planetarium
                </h1>
            </div>
            <div className="flex flex-row flex-wrap px-28 gap-[32px] size-fit justify-center">
                <CatalogContent
                Title = "Lorem ipsum dolor sit amet"
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat . . ."
                Location = "Lorem Ipsum Dolor Sit Amet"/>
                <CatalogContent
                Title = "Lorem ipsum dolor sit amet"
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat . . ."
                Location = "Lorem Ipsum Dolor Sit Amet"/>
                <CatalogContent
                Title = "Lorem ipsum dolor sit amet"
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat . . ."
                Location = "Lorem Ipsum Dolor Sit Amet"/>
                <CatalogContent
                Title = "Lorem ipsum dolor sit amet"
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat . . ."
                Location = "Lorem Ipsum Dolor Sit Amet"/>
                <CatalogContent
                Title = "Lorem ipsum dolor sit amet"
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat . . ."
                Location = "Lorem Ipsum Dolor Sit Amet"/>
                <CatalogContent
                Title = "Lorem ipsum dolor sit amet"
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat . . ."
                Location = "Lorem Ipsum Dolor Sit Amet"/>
                <CatalogContent
                Title = "Lorem ipsum dolor sit amet"
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat . . ."
                Location = "Lorem Ipsum Dolor Sit Amet"/>
                <CatalogContent
                Title = "Lorem ipsum dolor sit amet"
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat . . ."
                Location = "Lorem Ipsum Dolor Sit Amet"/>
            </div>
        </div>
    );
}

export default Catalog;