import TicketRequestContent from "../components/contents/TicketRequestContent"

const TicketRequest = () => {

    const urlParams = new URLSearchParams(window.location.search);

    const pid = urlParams.get('pid');

    return (
        <div className='h-screen bg-stars bg-no-repeat bg-cover bg-local overflow-x-hidden'>
            <TicketRequestContent planetariumId = {pid!!}/>
        </div>
    )
}

export default TicketRequest