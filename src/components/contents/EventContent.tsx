import { FaLocationDot } from "react-icons/fa6";
import {EventContentProps} from "../../interfaces/Event";
import { Link } from "react-router-dom"


const EventContent: React.FC<EventContentProps> = ({
    eventId,
    planetariumId,
    eventImage,
    eventName,
    eventDescription,
    eventLocation,
    eventTime,
    eventDate,
    eventDuration,
  }) => {
    return (
        <div className="font-inter flex flex-row w-full gap-5">
            <div className="flex flex-row w-full rounded-xl p-5 lg:p-8 gap-x-5 bg-color-2 bg-opacity-50 justify-self-center">
                <div className="w-1/2">
                    <img
                        src={eventImage}
                        alt="Foto Acara"
                        className="w-full h-auto max-h-full object-cover rounded-xl"
                        style={{ aspectRatio: '1 / 1' }}
                    />
                </div>
                <div className="flex flex-col justify-between w-full">
                    <div className="flex flex-col gap-1 lg:gap-4">
                        <div className="font-inter text-white text-start text-sm md:text-md lg:text-xl font-bold text-justify">
                            {eventName}
                        </div>
                        <div className="font-inter text-white text-xs lg:text-lg font-light text-justify overflow-y-auto xl:max-h-40 lg:max-h-28 md:max-h-16 max-h-12 " style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            {eventDescription}
                        </div>
                    </div>
                    <div className="flex flex-row pt-2 lg:pt-4">
                        <div className="text-xl text-white">
                            <FaLocationDot/>
                        </div>
                        <p className="font-inter text-white text-sm lg:text-lg xl:text-xl font-medium ml-2">
                            {eventLocation}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-1/4 items-center justify-center gap-5">
                <div className=" flex flex-col h-full w-full border-2 border-white rounded-xl items-center justify-center px-2 py-2 lg:px-4 lg:py-4 gap-y-2 xl:gap-y-8">
                    <div className="font-inter text-white text-center text-md lg:text-2xl font-bold">
                        {eventTime}
                    </div>
                    <div className="font-inter text-white text-center text-xs lg:text-lg font-medium">
                        {eventDate}
                    </div>
                    <div className="font-inter text-white text-center text-sm lg:text-xl font-semibold">
                        {eventDuration} Jam
                    </div>
                </div>
                <Link className="w-full" to={"ticketreservation?pid="+planetariumId+"&&id="+eventId}>
                    <button className="w-full bg-gradient-to-b from-color-3 to-color-2 text-white font-inter font-bold text-xs lg:text-xl py-3 rounded-3xl hover:from-color-3 hover:to-color-2 transition duration-300 transform hover:scale-110">
                        Beli Tiket
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default EventContent;
