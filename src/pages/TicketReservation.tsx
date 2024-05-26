import TicketReservationContent from "../components/contents/TicketResevationContent"
import { useParams } from "react-router-dom";

const TicketReservation = () => {
    const urlParams = new URLSearchParams(window.location.search);


    const id = urlParams.get('id');
    const pid = urlParams.get('pid');
    const tanggal = urlParams.get('tanggal');

    return (
        <div className='h-screen bg-stars bg-no-repeat bg-cover bg-local overflow-x-hidden'>
            <TicketReservationContent planetariumId={pid!!} id={id!!} selectedDate={tanggal!!}/>
            {/* <TicketReservationContent/> */}
        </div>
    )
}

export default TicketReservation