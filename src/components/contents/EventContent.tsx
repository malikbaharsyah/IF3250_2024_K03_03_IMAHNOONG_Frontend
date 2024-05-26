import { FaLocationDot } from "react-icons/fa6";
import {EventContentProps} from "../../interfaces/Event";



const EventContent: React.FC<EventContentProps> = ({
    eventImage,
    eventName,
    eventDescription,
    eventLocation,
    eventTime,
    eventDate,
    eventDuration,
  }) => {
    return (
        <div className="flex flex-row w-auto pr-20">
        <div className="flex flex-row rounded-xl p-8 bg-color-2 bg-opacity-50 justify-self-center">
            <div className="">
                <img
                    src={eventImage}
                    alt="Foto Acara"
                    className="w-full"
                />
            </div>
            <div className="flex flex-col w-full pl-8">
                <div className="font-inter text-white text-start text-2xl font-bold text-justify">
                    {eventName}
                </div>
                <div className="font-inter text-white text-lg font-light text-justify py-2">
                    {eventDescription}
                </div>
                <div className="flex flex-row items-center pt-2 mt-auto">
                    <div className="text-xl text-white">
                        <FaLocationDot/>
                    </div>
                    <p className="font-inter text-white text-xl font-medium ml-2">
                        {eventLocation}
                    </p>
                </div>
            </div>
        </div>
        <div className="flex flex-col ml-4 items-center justify-center">
            <div className=" flex flex-col h-full border-2 border-white rounded-xl items-center justify-center px-10 py-4">
                <div className="font-inter text-white text-center text-2xl font-bold py-2">
                    {eventTime}
                </div>
                <div className="font-inter text-white text-center text-lg font-medium pt-1 pb-2">
                    {eventDate}
                </div>
                <div className="font-inter text-white text-center text-xl font-semibold py-2">
                    {eventDuration} Jam
                </div>
            </div>
            <div className="pt-4 mt-auto">
                <button className="bg-gradient-to-b from-color-3 to-color-2 text-white font-inter font-bold text-lg py-3 px-12 rounded-3xl hover:from-color-3 hover:to-color-2 transition duration-300 transform hover:scale-110">
                    Beli Tiket
                </button>
            </div>
        </div>
    </div>

    );
  };

export default EventContent;
