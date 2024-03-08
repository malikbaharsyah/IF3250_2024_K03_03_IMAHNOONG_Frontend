import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom"
import { CatalogContentProps } from "../../interfaces/Planetarium";

  const CatalogContent: React.FC<CatalogContentProps> = ({
    imageSrc,
    title,
    description,
    location,
  }) => {
    return (
        <div className="grid justify-center grid-flow-row auto-rows-max">
            <div>
                <img className="border-color-4 border-2 rounded-2xl w-[405px]" src={imageSrc[0]} alt="Catalog Item"/>
            </div>
            
            <div className="mt-4 bg-color-2 h-fit bg-opacity-50 rounded-2xl w-[405px] justify-self-center font-inter text-white px-11 p-8">
                <h2 className="font-inter text-white text-center font-semibold text-2xl">{title}</h2>
                <p className="text-justify text-wrap mt-5">
                {description}
                </p>
                
                <div className="mt-6 flex font-medium indent-2 border-white">
                    <div>
                        <FaLocationDot/>
                    </div>
                    <p className="align-text-top">
                    {location}
                    </p>
                </div>
                <div className="mt-4 flex justify-center">
                    <Link to={"#"}>
                        {/* <PrimaryButton text="See Details" onClick=""/> */}
                        <button className="w-[207px] h-[69px] rounded-full bg-gradient-to-b hover:bg-opacity-40 hover:from-[#B5B5B5] hover:to-color-3 hover:transition from-color-2 to-color-3
                                        font-inter font-medium text-[24px]">
                            Kunjungi
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CatalogContent;