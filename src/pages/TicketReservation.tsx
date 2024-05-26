import TicketReservationContent from "../components/contents/TicketResevationContent"
import { useParams } from "react-router-dom";

const TicketReservation = () => {
    const urlParams = new URLSearchParams(window.location.search);


    const id = urlParams.get('id');
    const pid = urlParams.get('pid');

    return (
        <div className='h-screen bg-stars bg-no-repeat bg-cover bg-local overflow-x-hidden'>
            <TicketReservationContent planetariumId={pid!!} id={id!!}/>
            {/* <TicketReservationContent/> */}
        </div>
    )
}

export default TicketReservation