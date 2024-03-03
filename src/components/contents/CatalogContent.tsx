import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom"

const CatalogContent = (test: unknown) => {
    test;
    return (
        <div className="grid justify-center grid-flow-row auto-rows-max">
            <div>
                <img className="border-color-4 border-2 rounded-2xl w-[405px]" src="../../../image.png"/>
            </div>
            
            <div className="mt-4 bg-color-2 h-fit bg-opacity-50 rounded-2xl w-[405px] justify-self-center font-inter text-white px-11 p-8">
                <h2 className="font-inter text-white text-center font-semibold text-2xl">Lorem ipsum dolor sit amet</h2>
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
                <div className="mt-4 flex justify-center">
                    <Link to={"#"}>
                        <button className="w-[207px] h-[69px] rounded-full bg-gradient-to-b hover:bg-opacity-40 hover:from-[#B5B5B5] hover:to-color-3 hover:transition from-color-2 to-color-3
                                        font-inter font-medium text-[24px]">
                            See Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CatalogContent;