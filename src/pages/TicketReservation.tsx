import Navbar from "../components/base/Navbar"
import TicketReservationContent from "../components/contents/TicketResevationContent"


const TicketReservation = () => {
    return (
        <div className='h-screen bg-stars bg-no-repeat bg-cover bg-local overflow-auto'>
            <header>
                <Navbar/>
            </header>
            <body className="mt-8">
                <TicketReservationContent/>
            </body>
            <footer>
                
            </footer>
        </div>
    )
}

export default TicketReservation