import { useEffect, useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import ChooseDate from "../components/base/ChooseDate";
import Navbar from "../components/base/Navbar";
import EventContent from "../components/contents/EventContent";
import { Planetarium } from "../interfaces/Planetarium";
import { useParams } from "react-router-dom";


const Details = () => {
    const { id } = useParams<{id: string}>();
    const [detailsData, setDetailsData] = useState<Planetarium>();
    useEffect(() => {
        fetch('http://localhost:9000/api/details/'+id)
          .then(response => response.json())
          .then(data => {setDetailsData(data);})
          .catch(error => console.error('Error fetching data:', error));
      }, [id]);
      
    return (
        <div className="h-screen bg-stars bg-no-repeat bg-cover bg-local overflow-auto">
            <div className="mb-[-7%]">
                <Navbar/>
            </div>
            <div className="bg-cover bg-center h-screen" style={{
                backgroundImage: 'url("Imah Noong_ss.png")', 
                boxShadow: '0 10vw 10vw rgba(0, 0, 0, 1) inset, 0 -10vw 10vw rgba(0, 0, 0, 1) inset'}}>
                <div className="w-[50vw] bg-black bg-opacity-50 h-screen flex flex-col items-center justify-center gap-4">
                    <h1 className="font-inter text-white text-center text-5xl font-bold uppercase">
                        {detailsData?.namaPlanetarium}
                    </h1>
                    <p className="font-inter text-white text-center mb-4 uppercase">
                        Unassuming observatory with a collection of telescopes in simple surroundings.
                    </p>
                </div>
                <div className="relative -top-[25%]">
                    <div className="absolute left-1/2 -translate-x-1/2">
                        <ChooseDate/>
                    </div>
                </div>
            </div>
            <div className="flex flex-row min-h-screen h-fit px-24"
            style={{boxShadow: '0 10vw 10vw rgba(0, 0, 0, 0.75) inset'}}>
                <div className="w-[50vw] p-8 flex flex-col items-center justify-center gap-8">
                    <h1 className="font-inter text-white text-left text-5xl font-bold">
                        About {detailsData?.namaPlanetarium}
                    </h1>
                    <p className="font-inter text-white text-justify mb-4">
                    {detailsData?.deskripsi}
                    </p>
                    <PrimaryButton text="Informasi Lebih"/>
                </div>
                <div className="w-[50vw] self-stretch relative">
                    <div className="rounded-5xl absolute bottom-1/3 left-1/3 z-1 size-80">
                        <img src="Imah Noong_ss.png"/>
                    </div>
                    <div className="rounded-5xl absolute top-1/3 right-1/3 z-2 size-80">
                        <img src="image.png"/>
                    </div>
                </div>
            </div>
            <div className="min-h-screen h-fit px-24">
                <h1 className="font-inter text-white text-left text-5xl font-bold mb-8">
                    Acara terdekat
                </h1>  
                {/* TODO(Fetch from backend), the comment below is sample from obsolete template */}
                <div className="flex flex-col gap-4">
                    <EventContent
                    eventName="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    eventDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    eventLocation="Lorem ipsum dolor sit amet"
                    eventTime="15.30"
                    eventDate="24.06.2024"
                    eventImage="image.png"
                    // Duration="1 Jam"
                    />
                    <EventContent
                    eventName="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    eventDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    eventLocation="Lorem ipsum dolor sit amet"
                    eventTime="15.30"
                    eventDate="24.06.2024"
                    eventImage="image.png"
                    // Duration="1 Jam"
                    />
                </div>
            </div>
            <div className="min-h-screen h-fit px-24">
                <h1 className="font-inter text-white text-left text-5xl font-bold mb-8">
                    Informasi
                </h1>
            </div>
            {/* TODO(Informasi lain) */}
        </div>
    );
}

export default Details;