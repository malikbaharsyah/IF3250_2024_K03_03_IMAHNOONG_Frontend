import PrimaryButton from "../components/PrimaryButton";
import ChooseDate from "../components/base/ChooseDate";
import Navbar from "../components/base/Navbar";
import EventContent from "../components/contents/EventContent";
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import { DetailsData, Jadwal } from '../interfaces/detailsData';
import DatePickerComponent from "../components/base/datepicker";


const Details = () => {
    const urlParams = new URLSearchParams(window.location.search);


    const id = urlParams.get('id');
    // console.log(params)
    const [detailsData, setDetailsData] = useState<DetailsData>();
    const [eventData, setEventData] = useState<Jadwal[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    useEffect(() => {
        fetch("http://localhost:9000/api/details/"+id)
          .then((response) => response.json())
          .then((data) => {
            setDetailsData(data);
          })
    
          .catch((error) => console.error("Error fetching review data:", error));
      }, []);
    
    useEffect(() => {
        fetch("http://localhost:9000/api/jadwal/closestJadwal/"+id)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setEventData(data);
            })
        
            .catch((error) => console.error("Error fetching review data:", error));
    }, []);

    const handleButtonClick = () => {
        let date = new Date();
        let dateString = date.toISOString().split('T')[0];
        if (selectedDate !== undefined && selectedDate !== null) {
            console.log(selectedDate)
            selectedDate.setDate(selectedDate.getDate() + 1);
            console.log(selectedDate)
            dateString = selectedDate.toISOString().split('T')[0]
        }
        console.log(dateString)
        window.location.href = `/listtiket?id=${id}&&tanggal=${dateString}`;
    }

    return (
        <div className="h-screen bg-stars bg-no-repeat bg-cover bg-local overflow-auto">
            <div className="mb-[-7%]">
                <Navbar/>
            </div>
            <div className="bg-cover bg-center h-screen" style={{
                backgroundImage: `url(data:image/jpeg;base64,${detailsData?.imagePath[0]})`, 
                boxShadow: '0 10vw 10vw rgba(0, 0, 0, 1) inset, 0 -10vw 10vw rgba(0, 0, 0, 1) inset'}}>
                <div className="w-[50vw] bg-black bg-opacity-50 h-screen flex flex-col items-center justify-center gap-4">
                    <h1 className="font-inter text-white text-center text-5xl font-bold uppercase">
                        {detailsData?.namaPlanetarium}
                    </h1>
                    <p className="font-inter text-white text-center mb-4 uppercase">
                    </p>
                </div>
                <div className="relative -top-[25%]">
                    <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                        <DatePickerComponent selectedDate={selectedDate} onDateChange={setSelectedDate}/>
                        <PrimaryButton text="Cari Tiket" onClick={handleButtonClick} />
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
                        <img src={`data:image/jpeg;base64,${detailsData?.imagePath[0]}`}/>
                    </div>
                    {(detailsData?.imagePath?.length ?? 0 > 2) &&
                        <div className="rounded-5xl absolute bottom-1/3 right-1/3 z-1 size-80">
                            <img src={`data:image/jpeg;base64,${detailsData?.imagePath[0]}`}/>
                        </div>
                    }
                </div>
            </div>
            <div className="min-h-screen h-fit px-24">
                <h1 className="font-inter text-white text-left text-5xl font-bold mb-8">
                    Acara terdekat
                </h1>  
                {/* TODO(Fetch from backend), the comment below is sample from obsolete template */}
                <div className="flex flex-col gap-4">
                    {eventData.map((event) => (
                        <EventContent
                            key={event.id}
                            eventId={event.id}
                            planetariumId={event.planetariumId}
                            eventName={event.namaJadwal}
                            eventDescription={event.deskripsiJadwal}
                            eventLocation={detailsData?.lokasi ?? ""}
                            eventTime={event.waktuKunjungan[1]}
                            eventDate={event.waktuKunjungan[2]}
                            eventImage={event.imagePath[0]}
                            eventDuration={event.durasi.toString()}
                            date={event.date}
                            price={event.hargaTiket}
                        />
                    ))}
                </div>
            </div>
            <div className="min-h-screen h-fit px-24">
                <h1 className="font-inter text-white text-left text-5xl font-bold mb-8">
                    Informasi
                </h1>
            </div>
            {detailsData?.prosedurPendaftaran &&
                <div className="min-h-screen h-fit px-24">
                    <h1 className="font-inter text-white text-left text-5xl font-bold mb-8">
                        Prosedur Pendaftaran
                    </h1>
                    <p className="font-inter text-white text-justify mb-4">
                        {detailsData?.prosedurPendaftaran}
                    </p>
                </div>
            }
            {detailsData?.tataTertib &&
                <div className="min-h-screen h-fit px-24">
                    <h1 className="font-inter text-white text-left text-5xl font-bold mb-8">
                        Tata Tertib
                    </h1>
                    <p className="font-inter text-white text-justify mb-4">
                        {detailsData?.tataTertib}
                    </p>
                </div>
            }
            {detailsData?.noTelepon &&
                <div className="min-h-screen h-fit px-24">
                    <h1 className="font-inter text-white text-left text-5xl font-bold mb-8">
                        Kontak
                    </h1>
                    <p className="font-inter text-white text-justify mb-4">
                        {detailsData?.noTelepon}
                    </p>
                </div>
            }
        </div>
    );
}

export default Details;