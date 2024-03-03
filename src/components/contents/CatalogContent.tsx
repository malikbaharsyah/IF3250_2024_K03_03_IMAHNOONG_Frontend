import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom"
import PrimaryButton from "../PrimaryButton";

const CatalogContent = ({Title, Description, Location} : any) => {
    // test;
    return (
        <div className="grid justify-center grid-flow-row auto-rows-max">
            <div>
                <img className="border-color-4 border-2 rounded-2xl w-[405px]" src="../../../image.png"/>
            </div>
            
            <div className="mt-4 bg-color-2 h-fit bg-opacity-50 rounded-2xl w-[405px] justify-self-center font-inter text-white px-11 p-8">
                <h2 className="font-inter text-white text-center font-semibold text-2xl">{Title}</h2>
                <p className="text-justify text-wrap mt-5">
                    {Description}
                </p>
                
                <div className="mt-6 flex font-medium indent-2 border-white">
                    <div>
                        <FaLocationDot/>
                    </div>
                    <p className="align-text-top">
                        {Location}
                    </p>
                </div>
                <div className="mt-4 flex justify-center">
                    <Link to={"#"}>
                        <PrimaryButton text="See Details" onClick=""/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CatalogContent;