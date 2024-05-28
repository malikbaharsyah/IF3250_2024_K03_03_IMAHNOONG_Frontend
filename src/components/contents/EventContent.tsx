import React, { useState } from "react";
import { FaLocationDot, FaTicket } from "react-icons/fa6";
import { EventContentProps } from "../../interfaces/Event";
import { Link } from "react-router-dom";
import styled from 'styled-components';

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
    date,
    price,
    }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    let selectedDate = new Date(date!!).toISOString().split('T')[0];

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const ScrollableDiv = styled.div`
        max-height: 400px;
        overflow-y: scroll;

        &::-webkit-scrollbar {
            width: 10px;
            padding: 10px;
        }

        &::-webkit-scrollbar-track {
            background: #ffffff;
            border-radius: 25px;
        }

        &::-webkit-scrollbar-thumb {
            background: linear-gradient(#2224a1, #4f1395);
            border-radius: 25px;
        }

        @media (max-width: 600px) {
            &::-webkit-scrollbar {
                width: 5px;
                padding: 5px;
            }
        }
        `;

    const TruncatedTextDesc = styled.div`
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;

        @media (max-width: 1024px) { 
            -webkit-line-clamp: 2;
        }
    `;

    const TruncatedText = styled.div`
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;

        @media (max-width: 970px) { 
            -webkit-line-clamp: 1;
        }
    `;

    const ImageRatio = styled.div`
        aspect-ratio: 1 / 1;
        width: 220px;

        @media (max-width: 1000px) { 
            width: 180px;
        }

        @media (max-width: 900px) {
            width: 150px;
        }
        @media (max-width: 760px) {
            width: 220px;
        }
    `;

  return (
        <div className="font-inter flex flex-row w-full gap-5 justify-center">
            <div className="flex flex-col md:flex-row w-fit md:w-full rounded-xl p-5 lg:p-8 gap-x-5 bg-color-2 bg-opacity-50 justify-self-center">
                <div>
                    <ImageRatio>
                        <img
                            src={`data:image/jpeg;base64,${eventImage}`}
                            alt="Foto Acara"
                            className="w-full h-auto max-h-full object-cover rounded-xl"
                            style={{ aspectRatio: '1 / 1' }}
                        />
                    </ImageRatio>
                </div>
                <div className="flex flex-col justify-between w-[220px] md:w-full mt-4 md:mt-0">
                    <div className="flex flex-col gap-1">
                        <div className="font-inter text-white text-start text-sm md:text-md lg:text-lg font-bold text-justify">
                            <TruncatedText>
                                {eventName}
                            </TruncatedText>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="font-inter text-white text-xs lg:text-md font-light text-justify">
                                <TruncatedTextDesc>
                                    {eventDescription}
                                </TruncatedTextDesc>
                            </div>
                            <button className="cursor-pointer" id="open-modal-btn" onClick={openModal}>
                                <p className="font-inter text-xs md:text-sm lg:text-md text-white text-end cursor-pointer underline">Lihat Selengkapnya</p>
                            </button>
                                {isModalOpen && (
                                    <div id="modal" className="fixed z-10 inset-0">
                                        <div className="flex items-center justify-center min-h-screen transition-opacity p-4 sm:p-0">
                                            <div className="flex flex-col items-center justify-between bg-color-2 p-10 rounded rounded-xl w-full sm:w-2/3">
                                                <ScrollableDiv>
                                                    <div className="flex flex-col">
                                                        <h3 className="font-inter text-center text-white text-xl leading-6 font-bold"
                                                            id="modal-title">
                                                            {eventName}
                                                        </h3>
                                                        <p className="mt-4 text-xs md:text-md lg:text-xl font-inter text-justify text-white pr-4">
                                                            {eventDescription}

                                                        </p>
                                                        <div className="mt-4 flex flex-row items-center">
                                                            <div className="text-xl text-white">
                                                                <FaTicket />
                                                            </div>
                                                            <p className="font-inter text-white text-xs md:text-md lg:text-lg xl:text-xl font-medium ml-2">
                                                                Rp. 100.000
                                                            </p>
                                                        </div>
                                                        <div className="mt-4 flex flex-row items-center">
                                                            <div className="text-xl text-white">
                                                                <FaLocationDot />
                                                            </div>
                                                            <p className="font-inter text-white text-xs md:text-md lg:text-lg xl:text-xl font-medium ml-2">
                                                                {eventLocation}
                                                            </p>
                                                        </div>
                                                        <div className="flex mt-4 w-full justify-center">
                                                            <button
                                                                id="close-modal-btn"
                                                                type="button"
                                                                className="w-fit bg-white text-center text-black font-inter font-bold px-10 py-3 rounded rounded-3xl hover:bg-opacity-40 hover:transition duration-300 transform hover:scale-105"
                                                                onClick={closeModal}>
                                                                Close
                                                            </button>
                                                        </div>
                                                    </div>
                                                </ScrollableDiv>
                                            </div>
                                        </div>
                                    </div>
                                )}
                           </div>
                    </div>
                    <div className="flex flex-col pt-2 lg:pt-4 gap-2">
                        <div className="flex flex-row items-center">
                            <div className="text-lg text-white">
                                <FaTicket />
                            </div>
                            <p className="font-inter text-white text-xs md:text-sm lg:text-md font-medium ml-2">
                                Rp {price}
                            </p>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className="text-lg text-white">
                                <FaLocationDot />
                            </div>
                            <p className="font-inter text-white text-xs md:text-sm lg:text-md font-medium ml-2">
                                <TruncatedText>
                                    {eventLocation} 
                                </TruncatedText>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-1/4 items-center justify-center gap-5">
                <div className=" flex flex-col h-full w-full border-2 border-white rounded-xl items-center justify-center px-2 py-2 lg:px-4 lg:py-4 gap-y-2 xl:gap-y-8">
                    <div className="font-inter text-white text-center text-md lg:text-xxl font-bold">
                        {eventTime}
                    </div>
                    <div className="font-inter text-white text-center text-xs lg:text-lg font-medium">
                        {eventDate}
                    </div>
                    <div className="font-inter text-white text-center text-sm lg:text-xl font-semibold">
                        {eventDuration} Jam
                    </div>
                </div>
                <Link className="w-full" to={"../ticketreservation?pid=" + planetariumId + "&&id=" + eventId + "&&date=" + selectedDate}>
                <button className="w-full bg-gradient-to-b from-color-3 to-color-2 text-white font-inter font-bold text-xs lg:text-xl py-3 rounded-3xl hover:from-color-3 hover:to-color-2 transition duration-300 transform hover:scale-110">
                    Beli Tiket
                </button>
                </Link>
            </div>
        </div>
    );
};

export default EventContent;
