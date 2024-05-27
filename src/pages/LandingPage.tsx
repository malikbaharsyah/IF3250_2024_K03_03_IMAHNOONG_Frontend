import CatalogContent from "../components/contents/CatalogContent";
import { useState, useEffect } from 'react';
import EventContent from "../components/contents/EventContent";
import { Event } from "../interfaces/Event";
import Navbar from "../components/base/Navbar";
import { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PlanetariumLandingPage } from "../interfaces/Planetarium";
import { ArrowForwardIosRounded, ArrowBackIosRounded } from '@mui/icons-material';

const LandingPage = () => {
    const OnPRef = useRef<HTMLDivElement | null>(null);
    const AcaraRef = useRef<HTMLDivElement | null>(null);

    const [eventData, setEventData] = useState<Event[]>([]);

    useEffect(() => {
      fetch('http://localhost:9000/api/jadwal/landingPage/event')
        .then(response => response.json())
        .then(data => {setEventData(data);})
        .catch(error => console.error('Error fetching catalog data:', error));
    }, []);

    const [catalogData, setCatalogData] = useState<PlanetariumLandingPage[]>([]);

    useEffect(() => {
      fetch('http://localhost:9000/api/jadwalDefault/landingPage/catalog')
        .then(response => response.json())
        .then(data => {setCatalogData(data);})
            
        .catch(error => console.error('Error fetching catalog data:', error));
    }, []);


    const NextArrow = (props: any) => {
        const { onClick } = props;
        return (
            <div
                className="custom-arrow-next text-white z-10 absolute w-5 h-5 flex items-center justify-center rounded-full top-1/2 transform -translate-y-1/2 right-0 cursor-pointer"
                onClick={onClick}>
                <ArrowForwardIosRounded fontSize="large"/>
            </div>
        );
    };

    const PrevArrow = (props: any) => {
        const { onClick } = props;
        return (
            <div
                className="custom-arrow-prev text-white z-10 absolute w-5 h-5 flex items-center justify-center rounded-full top-1/2 transform -translate-y-1/2 left-0 cursor-pointer"
                onClick={onClick}>
                <ArrowBackIosRounded fontSize="large"/>
            </div>
        );
    };


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow /> 

      };
    return (
        <div className="h-screen bg-stars bg-no-repeat bg-cover bg-local overflow-auto" >
            <div className="flex flex-col bg-[url('../../public/bgLandingPage.svg')] min-h-[100vh] bg-no-repeat bg-[length:100vw] gap-y-10">
                <div>
                    <Navbar/>
                </div>
                <div className="mt-[24vw] mx-10 sm:mx-20">
                    <h1 className="font-inter text-white text-left text-xl sm:text-3xl font-bold py-1">
                        Observatorium dan Planetarium
                    </h1>
                    <p className="font-inter text-white text-left text-sm sm:text-xl font-medium py-1">
                        Tiket Observatorium & Planetarium: Jelajahi Keindahan Alam Semesta. Pesan Sekarang!
                    </p>
                    <div className="flex flex-row gap-4 md:gap-8 pt-4">
                        <button className="w-fit bg-gradient-to-b from-color-2 to-color-3 text-white font-inter font-bold text-xs md:text-lg py-2 px-6 sm:py-3 sm:px-12 rounded-3xl hover:from-color-2 hover:to-color-3 transition duration-300 transform hover:scale-105" 
                            onClick={() => OnPRef.current?.scrollIntoView({ behavior: "smooth" })}>
                            Observatorium dan Planetarium
                        </button>
                        <button className="w-fit bg-gradient-to-b from-color-2 to-color-3 text-white font-inter font-bold text-xs md:text-lg py-2 px-6 sm:py-3 sm:px-12 rounded-3xl hover:from-color-2 hover:to-color-3 transition duration-300 transform hover:scale-105"
                            onClick={() => AcaraRef.current?.scrollIntoView({ behavior: "smooth"})}>
                            Acara Terdekat
                        </button>
                    </div>
                </div>
                <div ref= {OnPRef} className="mt-[20vw] pt-12 px-10 md:px-20">
                    <h1 className="font-inter text-white text-left text-3xl font-bold py-1">
                        Buka hari ini
                    </h1>
                    <div className="mt-16 w-[92%] mx-auto pr-16">
                        <div className="px-8">
                            <Slider {...settings}>
                                {/* <div> */}
                                    {/* <CatalogContent/> */}
                                    {catalogData.map((catalogItem) => (
                                        <CatalogContent
                                            key={catalogItem.id}
                                            planetariumId={catalogItem.id} 
                                            imageSrc={catalogItem.imagePath} 
                                            title={catalogItem.namaPlanetarium}
                                            description={catalogItem.deskripsi}
                                            location={catalogItem.lokasi}
                                            
                                        />
                                    ))}
                                {/* </div> */}
                                {/* <div>
                                    <CatalogContent/>
                                </div>
                                <div>
                                    <CatalogContent/>
                                </div>
                                <div>
                                    <CatalogContent/>
                                </div>
                                <div>
                                    <CatalogContent/>
                                </div>
                                <div>
                                    <CatalogContent/>
                                </div> */}
                            </Slider>
                        </div>
                    </div>
                </div>
                <div ref={AcaraRef} className="mt-20 pt-12 px-10 md:px-20">
                    <h1 className="font-inter text-white text-left text-3xl font-bold py-1">
                        Acara Terdekat
                    </h1>
                    <div className="flex flex-row flex-wrap justify-center gap-12 size-fit my-16">
                        {eventData.map((eventItem) => (
                            <EventContent
                                key={eventItem.id}
                                planetariumId={eventItem.planetariumId}
                                eventId={eventItem.id}
                                eventName={eventItem.namaJadwal}
                                eventDescription={eventItem.deskripsiJadwal}
                                eventLocation={eventItem.lokasi}
                                eventTime={eventItem.waktuKunjungan[1]}
                                eventDate={eventItem.waktuKunjungan[0]}
                                eventImage={eventItem.imagePath[0]}
                                eventDuration={(eventItem.durasi / 60).toString() + "." + (eventItem.durasi % 60).toString()}
                            />
                        ))}
                        {/* <EventContent/>
                        <EventContent/>
                        <EventContent/> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;