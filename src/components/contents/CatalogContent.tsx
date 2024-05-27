import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom"
import { CatalogContentProps } from "../../interfaces/Planetarium";

  const CatalogContent: React.FC<CatalogContentProps> = ({
    planetariumId,
    imageSrc,
    title,
    description,
    location,
  }) => {
    console.log(planetariumId)
    return (
        <div className="grid justify-center grid-flow-row auto-rows-max">
            <div className="relative w-[305px] pb-[75%] overflow-hidden border-color-4 border-2 rounded-2xl">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={`data:image/jpeg;base64,${imageSrc[0]}`}
          alt="Catalog Item"
        />
      </div>
            
            <div className="mt-4 bg-color-2 h-fit bg-opacity-50 rounded-2xl w-[305px] justify-self-center font-inter text-white p-8">
                <h2 className="font-inter text-white text-center font-semibold text-2xl md:h-16"
                    style={{
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2,
                        }}>
                    {title}</h2>
                {/* <p className="text-justify text-wrap mt-5 h-20 overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}> */}
                <p className="text-justify text-wrap mt-5 md:h-24" style={{
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 4,
                }}>

                {description}
                </p>
                
                <div className="mt-6 flex font-medium indent-2 border-white md:h-12">
                    <div>
                        <FaLocationDot/>
                    </div>
                    <p className="align-text-top"
                        style={{
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 2,
                            }}>
                    {location}
                    </p>
                </div>
                <div className="mt-4 flex justify-center">
                    <Link to={"/details?id="+planetariumId}>
                        {/* <PrimaryButton text="See Details" onClick=""/> */}
                        <button className="rounded-full bg-gradient-to-b hover:bg-opacity-40 hover:from-color-2 hover:to-color-3 hover:transition from-color-2 to-color-3
                                        font-inter font-semibold text-xl px-12 py-4">
                            Kunjungi
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CatalogContent;