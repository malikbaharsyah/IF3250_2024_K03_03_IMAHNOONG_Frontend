/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from '../components/base/Navbar';
import Footer from '../components/base/footer';
import Datepicker from '../components/base/datepicker';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowForwardIosRounded, ArrowBackIosRounded } from '@mui/icons-material';

interface DateItem {
    date: Date;
}



function view_ticket() {
    const tanggal: DateItem[] = [
        {date: new Date()},
        {date: new Date()},
        {date: new Date()},
        {date: new Date()},
        {date: new Date()},
        {date: new Date()},
        {date: new Date()},
    ];

    const CustomNextArrow = (props: any) => {
        const { onClick } = props;
        return (
          <div
            className="custom-arrow-next text-white z-10 absolute w-5 h-5 flex items-center justify-center rounded-full top-1/2 transform -translate-y-1/2 right-0 cursor-pointer"
            onClick={onClick}
          >
            <ArrowForwardIosRounded fontSize="large"/>
          </div>
        );
      };
      
      const CustomPrevArrow = (props: any) => {
        const { onClick } = props;
        return (
          <div
            className="custom-arrow-prev text-white z-10 absolute w-5 h-5 flex items-center justify-center rounded-full top-1/2 transform -translate-y-1/2 left-0 cursor-pointer"
            onClick={onClick}
          >
            <ArrowBackIosRounded fontSize="large"/>
          </div>
        );
      };
    
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
      };

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
                        <Slider {...settings} className="custom-slider w-full px-[1vw]">
                            {tanggal.map((date, index) => (
                                <div className="flex items-center my-5" key={index}>
                                    <div className="w-[208px] h-[83px] rounded-2xl bg-gradient-to-r from-[#4F1395] to-[#2224A1] cursor-pointer mx-auto flex flex-col items-center justify-center gap-y-2">
                                        <h3 className="font-bold text-[20px] text-white">{date.date.toLocaleDateString('id-ID', { weekday: 'long' })}</h3>
                                        <h4 className='font-medium text-[1vw] text-white'>{date.date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</h4>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className='ticket w-[1280px] mt-[2vw] grid grid-cols-2 gap-y-[2vw]'>
                    <div className='container flex gap-x-[1vw]'>
                        <div className='card'>
                            <a href="#" className="block flex flex-col justify-between bg-transparent border-white border-2 rounded-[20px] w-[408px] h-[7vw] px-[1.5vw] py-[1vw]">

                                <h5 className="font-bold text-[1.5vw] text-white">Nama Planetarium</h5>
                                <div className='time flex justify-between font-semibold text-[1vw]'>
                                    <p className="text-white">Minggu, 3 Maret 2024</p>
                                    <p className="text-white">03:00</p>
                                </div>
                            </a>
                        </div>
                        <div className='container-harga flex flex-col items-center justify-between'>
                            <div className='harga'>
                                <p className='text-white text-[1.5vw] font-semibold'>
                                    Rp. 100.000
                                </p>
                            </div>
                            <div className='status'>
                                <p className='text-white text-[1vw] font-medium'>
                                    Tersedia
                                </p>
                            </div>
                            <div className='beli-tiket'>
                                <button className='text-white bg-gradient-to-r from-[#4F1395] to-[#2224A1] w-[10vw] rounded-full h-[3vw]'>
                                    Beli Tiket
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='container flex gap-x-[1vw]'>
                        <div className='card'>
                            <a href="#" className="block flex flex-col justify-between bg-transparent border-white border-2 rounded-[20px] w-[408px] h-[7vw] px-[1.5vw] py-[1vw]">

                                <h5 className="font-bold text-[1.5vw] text-white">Nama Planetarium</h5>
                                <div className='time flex justify-between font-semibold text-[1vw]'>
                                    <p className="text-white">Minggu, 3 Maret 2024</p>
                                    <p className="text-white">03:00</p>
                                </div>
                            </a>
                        </div>
                        <div className='container-harga flex flex-col items-center justify-between'>
                            <div className='harga'>
                                <p className='text-white text-[1.5vw] font-semibold'>
                                    Rp. 100.000
                                </p>
                            </div>
                            <div className='status'>
                                <p className='text-white text-[1vw] font-medium'>
                                    Tersedia
                                </p>
                            </div>
                            <div className='beli-tiket'>
                                <button className='text-white bg-gradient-to-r from-[#4F1395] to-[#2224A1] w-[10vw] rounded-full h-[3vw]'>
                                    Beli Tiket
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='container flex gap-x-[1vw]'>
                        <div className='card'>
                            <a href="#" className="block flex flex-col justify-between bg-transparent border-white border-2 rounded-[20px] w-[408px] h-[7vw] px-[1.5vw] py-[1vw]">

                                <h5 className="font-bold text-[1.5vw] text-white">Nama Planetarium</h5>
                                <div className='time flex justify-between font-semibold text-[1vw]'>
                                    <p className="text-white">Minggu, 3 Maret 2024</p>
                                    <p className="text-white">03:00</p>
                                </div>
                            </a>
                        </div>
                        <div className='container-harga flex flex-col items-center justify-between'>
                            <div className='harga'>
                                <p className='text-white text-[1.5vw] font-semibold'>
                                    Rp. 100.000
                                </p>
                            </div>
                            <div className='status'>
                                <p className='text-white text-[1vw] font-medium'>
                                    Tersedia
                                </p>
                            </div>
                            <div className='beli-tiket'>
                                <button className='text-white bg-gradient-to-r from-[#4F1395] to-[#2224A1] w-[10vw] rounded-full h-[3vw]'>
                                    Beli Tiket
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='container flex gap-x-[1vw]'>
                        <div className='card'>
                            <a href="#" className="block flex flex-col justify-between bg-transparent border-white border-2 rounded-[20px] w-[408px] h-[7vw] px-[1.5vw] py-[1vw]">

                                <h5 className="font-bold text-[1.5vw] text-white">Nama Planetarium</h5>
                                <div className='time flex justify-between font-semibold text-[1vw]'>
                                    <p className="text-white">Minggu, 3 Maret 2024</p>
                                    <p className="text-white">03:00</p>
                                </div>
                            </a>
                        </div>
                        <div className='container-harga flex flex-col items-center justify-between'>
                            <div className='harga'>
                                <p className='text-white text-[1.5vw] font-semibold'>
                                    Rp. 100.000
                                </p>
                            </div>
                            <div className='status'>
                                <p className='text-white text-[1vw] font-medium'>
                                    Tersedia
                                </p>
                            </div>
                            <div className='beli-tiket'>
                                <button className='text-white bg-gradient-to-r from-[#4F1395] to-[#2224A1] w-[10vw] rounded-full h-[3vw]'>
                                    Beli Tiket
                                </button>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className='w-screen z-[999] mt-[5vw]'>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default view_ticket;