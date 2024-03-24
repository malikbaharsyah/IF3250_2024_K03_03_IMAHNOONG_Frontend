/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from '../components/base/Navbar';
import Footer from '../components/base/footer';
import Datepicker from '../components/base/datepicker';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TicketContent from '../components/contents/TicketContent';
import CarouselDate from '../components/contents/CarouselDate';


function view_ticket() {

    return (
        <div className="">
            <div className='absolute w-screen top-0 z-[999]'>
                <Navbar />
            </div>
            <div className="flex flex-col items-center bg-[url('../../public/Bg_View_Ticket.svg')] min-h-[100vh] bg-no-repeat bg-[length:100vw]">
                <div className='title text-white font-bold text-[2vw] mt-[6.5vw]'>
                    <p>Nama Planetarium</p>
                </div>
                <div className='cari_tiket mt-[2vw]'>
                    <form className="flex w-[35vw] h-[5vw] bg-[#A19DB4] rounded-full px-[2vw] items-center">
                        <div className="grid grid-cols-3 gap-4 my-4">
                            <div className="relative flex col-span-2 bg-white rounded-full gap-x-2">
                                {/* <div className="inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                    </svg>
                                </div> */}
                                <Datepicker />
                            </div>
                        </div>
                        <button type="submit" className="text-white rounded-full w-[20vw] h-[3vw] bg-gradient-to-r from-[#4F1395] to-[#2224A1] ">Cari & Pesan Tiket</button>
                    </form>
                </div>
                <div className='tanggal mt-[2vw]'>
                    <div className=" w-[1280px]">
                        <CarouselDate />
                    </div>
                </div>
                <div className='ticket w-[1280px] mt-[2vw] grid grid-cols-2 gap-y-[2vw]'>
                    <TicketContent />
                    <TicketContent />
                    <TicketContent />
                    <TicketContent />
                </div>  
                <div className='w-screen z-[999] mt-[5vw]'>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default view_ticket;