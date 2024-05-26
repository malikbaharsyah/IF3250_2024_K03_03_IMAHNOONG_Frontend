import React, { useState } from 'react';
import Navbar from '../components/base/Navbar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowForwardIosRounded, ArrowBackIosRounded } from '@mui/icons-material';

interface DateItem {
  date: Date;
}

const ViewTicket: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [filteredDates, setFilteredDates] = useState<DateItem[]>([]);
  const [tickets, setTickets] = useState<DateItem[]>([]);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      const newDates = [];
      for (let i = -3; i <= 3; i++) {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + i);
        newDates.push({ date: newDate });
      }
      setFilteredDates(newDates);
      // Simulate fetching tickets for selected date
      const availableTickets = [
        { date: new Date(date) }, // Add tickets for the selected date
        // Add more tickets for other dates if needed
      ];
      setTickets(availableTickets);
    }
  };

  const handleSearch = () => {
    if (selectedDate) {
      console.log('Search for ticket on', selectedDate);
      // Perform search for tickets
    }
  };

const handleDateItemClick = (date: Date) => {
  setSelectedDate(date);
};

const TicketContent: React.FC<{ date: Date }> = ({ date }) => {
  if (!selectedDate || date.getTime() !== selectedDate.getTime()) return null;

  const ticketForDate = tickets.find((ticket) => ticket.date.getTime() === date.getTime());
  if (!ticketForDate) return null;

  return (
    <div className='flex space-x-4'>
      <a href="#" className="flex flex-col justify-between bg-transparent border-white rounded-2xl w-[408px] h-[7vw] px-6 py-4">
        <h5 className="font-bold text-[1.5vw] text-white">Nama Show</h5>
        <div className='flex justify-between font-semibold text-[1vw]'>
          <p className="text-white">{date.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
          <p className="text-white">{date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
      </a>
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
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="custom-arrow-next text-white z-10 absolute flex items-center justify-center rounded-full top-1/2 transform -translate-y-1/2 right-10 cursor-pointer"
        onClick={onClick}
      >
        <ArrowForwardIosRounded fontSize="large" />
      </div>
    );
  };

  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="flex items-center justify-center text-white absolute rounded-full top-1/2 z-10 transform -translate-y-1/2 left-10  cursor-pointer"
        onClick={onClick}
      >
        <ArrowBackIosRounded fontSize="large" />
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
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center h-screen bg-stars bg-no-repeat bg-cover bg-local overflow-auto">
        <p className='text-white font-bold mt-8 text-2xl'>Nama Planetarium</p>
        <div className='my-8'>
          <form className="flex flex-row py-4 px-6 space-x-4 bg-white bg-opacity-50 rounded-full items-center">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              className="rounded-full cursor-pointer"
              showIcon
            />
            <button
              type="button"
              onClick={handleSearch}
              className="text-white rounded-full py-2 px-6 bg-gradient-to-r from-[#4F1395] to-[#2224A1] ">
              Cari & Pesan Tiket
            </button>
            </form>
            </div>
            <Slider {...settings} className="w-full px-20">
              {filteredDates.map((dateItem, index) => (
                <div className="flex items-center justify-center my-5" key={index} onClick={() => handleDateItemClick(dateItem.date)}>
                  <div className={`flex flex-col mx-auto w-fit h-fit rounded-2xl cursor-pointer px-12 py-2 items-center justify-center space-y-2 ${dateItem.date === selectedDate ? "bg-white text-black" : "bg-gradient-to-r from-[#4F1395] to-[#2224A1] text-white"}`}>
                    <h3 className="font-bold text-xl">{dateItem.date.toLocaleDateString('id-ID', { weekday: 'long' })}</h3>
                    <h4 className='font-medium text-lg'>{dateItem.date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</h4>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="flex flex-col items-center mt-8">
          <p className="text-white font-semibold text-xl my-4">Daftar Tiket Tersedia</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {selectedDate && tickets.map((item, index) => (
              <TicketContent key={index} date={item.date} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTicket;