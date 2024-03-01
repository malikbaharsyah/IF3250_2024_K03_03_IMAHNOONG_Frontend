import { FaLocationDot } from "react-icons/fa6";


const CatalogContent = (test: unknown) => {
    test;
    return (
        <div className="grid justify-center grid-flow-row auto-rows-max">
            <div>
                <img className="border-color-4 border-2 rounded-2xl w-[405px]" src="../../../public/image.png"/>
            </div>
            
            <div className="mt-4 bg-color-2 h-[354px] bg-opacity-50 rounded-2xl w-[405px] justify-self-center font-inter text-white px-11">
                <h2 className="font-inter text-white text-center font-semibold text-2xl mt-8">Lorem ipsum dolor sit amet</h2>
                <p className="text-justify text-wrap mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat . . .
                </p>
                
                <div className="mt-6 flex font-medium indent-2 border-white">
                    <div>
                        <FaLocationDot/>
                    </div>
                    <p className="align-text-top">
                        Lorem Ipsum Dolor Sit Amet
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CatalogContent;