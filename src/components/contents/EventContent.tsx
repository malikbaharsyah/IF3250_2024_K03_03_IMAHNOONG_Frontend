import { FaLocationDot } from "react-icons/fa6";
import PrimaryButton from "../PrimaryButton";

const EventContent = ({Title, Description, Location, Time, Date, Duration} : any) => {
    return (
        // main flex
        <div className="flex flex-row text-white items-center gap-6 max-[412px]:flex-col">
            {/* Picture, Title, and Description */}
            <div className="flex flex-row mt-4 bg-color-2 h-fit bg-opacity-50 rounded-2xl justify-self-center font-inter text-white px-11 p-8 gap-8 max-[1138px]:flex-col">
                <img className="border-color-4 border-2 rounded-2xl w-[250px] self-center" src="image.png"/>
                {/* Title and Description */}
                <div className="flex flex-col">
                    <h2 className="font-inter text-white font-semibold text-2xl">
                        {Title}
                    </h2>
                    <p className="text-justify text-wrap mt-5">
                        {Description}
                    </p>
                    {/* Location icon and info */}
                    <div className="mt-6 flex font-medium indent-2 border-white">
                        <div>
                            <FaLocationDot/>
                        </div>
                        <p className="align-text-top">
                            {Location}
                        </p>
                    </div>
                </div>
            </div>
            {/* Time and Button */}
            <div className="flex flex-col items-center self-stretch justify-evenly">
                <div className="background-transparent border-white border-2 rounded-xl text-center flex flex-col gap-4 p-2 font-inter">
                    <h2 className="text-4xl font-bold">{Time}</h2>
                    <p className="text-2xl">{Date}</p>
                    <p className="text-xl font-bold">{Duration}</p>
                </div>
                <PrimaryButton text="Beli Tiket"/>
            </div>
        </div>
    )
}

export default EventContent;