import CatalogContent from "../components/contents/CatalogContent";
import EventContent from "../components/contents/EventContent";
import Navbar from "../components/base/Navbar";
import { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LandingPage = () => {
    const OnPRef = useRef<HTMLDivElement | null>(null);
    const AcaraRef = useRef<HTMLDivElement | null>(null);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow /> 

      };
    return (
        <div className="h-screen bg-stars bg-no-repeat bg-cover bg-local overflow-auto" >
            <div className="flex flex-col bg-[url('../../public/bgLandingPage.svg')] min-h-[100vh] bg-no-repeat bg-[length:100vw] gap-y-10">
                <div>
                    <Navbar/>
                </div>
                <div className="mt-[28vw] ml-20">
                    <h1 className="font-inter text-white text-left text-4xl font-bold py-1">
                        Observatorium dan Planetarium
                    </h1>
                    <p className="font-inter text-white text-left text-2xl font-medium py-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className="flex flex-row gap-8 pt-4">
                        <button className="bg-gradient-to-b from-color-2 to-color-3 text-white font-inter font-bold text-lg py-3 px-12 rounded-3xl hover:from-color-2 hover:to-color-3 transition duration-300 transform hover:scale-105" 
                            onClick={() => OnPRef.current?.scrollIntoView({ behavior: "smooth" })}>
                            Observatorium dan Planetarium
                        </button>
                        <button className="bg-gradient-to-b from-color-2 to-color-3 text-white font-inter font-bold text-lg py-3 px-12 rounded-3xl hover:from-color-2 hover:to-color-3 transition duration-300 transform hover:scale-105"
                            onClick={() => AcaraRef.current?.scrollIntoView({ behavior: "smooth"})}>
                            Acara Terdekat
                        </button>
                    </div>
                </div>
                <div ref= {OnPRef} className="mt-[20vw] ml-20 pt-12 ">
                    <h1 className="font-inter text-white text-left text-4xl font-bold py-1">
                        Buka hari ini
                    </h1>
                    <div className="mt-16 w-[92%] mx-auto pr-16">
                        <div className="px-8">
                            <Slider {...settings}>
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
                                </div>
                                <div>
                                    <CatalogContent/>
                                </div>
                                <div>
                                    <CatalogContent/>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
                <div ref={AcaraRef} className="mt-20 ml-20 pt-12">
                    <h1 className="font-inter text-white text-left text-3xl font-bold py-1">
                        Acara Terdekat
                    </h1>
                    <div className="flex flex-row flex-wrap justify-center gap-12 size-fit my-16">
                        <EventContent/>
                        <EventContent/>
                        <EventContent/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;