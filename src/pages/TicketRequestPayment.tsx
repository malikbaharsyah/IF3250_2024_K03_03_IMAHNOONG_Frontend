import TicketReqPaymentContent from "../components/contents/TicketReqPaymentContent"

const TicketRequestPayment = () => {
  const urlParams = new URLSearchParams(window.location.search);

  const id = urlParams.get('id');
    return (
        <div className='h-screen bg-stars bg-no-repeat bg-cover bg-local overflow-x-hidden'>
            <TicketReqPaymentContent id={id!!}/>
        </div>
    )
}

export default TicketRequestPayment