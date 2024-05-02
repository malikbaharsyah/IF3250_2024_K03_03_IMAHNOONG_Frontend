import React, { useState } from 'react';
import Navbar from '../components/base/Navbar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowForwardIosRounded, ArrowBackIosRounded } from '@mui/icons-material';

interface DatePickerProps extends React.HTMLProps<HTMLDivElement> {
  month?: boolean | undefined;
  integrated?: boolean | undefined;
}

interface DateItem {
  date: Date;
}

const ViewTicket: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [filteredDates, setFilteredDates] = useState<DateItem[]>([]);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleSearch = () => {
    if (selectedDate) {
      const newDates = [];
      for (let i = -3; i <= 3; i++) {
        const newDate = new Date(selectedDate);
        newDate.setDate(newDate.getDate() + i);
        newDates.push({ date: newDate });
      }
      setFilteredDates(newDates);
    }
  };

  const tanggal: DateItem[] = [
    { date: new Date() },
    { date: new Date() },
    { date: new Date() },
    { date: new Date() },
    { date: new Date() },
    { date: new Date() },
    { date: new Date() },
  ];

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="custom-arrow-next text-white z-10 absolute w-5 h-5 flex items-center justify-center rounded-full top-1/2 transform -translate-y-1/2 right-0 cursor-pointer"
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
        className="custom-arrow-prev text-white z-10 absolute w-5 h-5 flex items-center justify-center rounded-full top-1/2 transform -translate-y-1/2 left-0 cursor-pointer"
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
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  className="p-2 rounded-full outline-gradient-to-r from-[#4F1395] to-[#2224A1] cursor-pointer"
                  showIcon
                />
              </div>
            </div>
            <button type="button" onClick={handleSearch} className="text-white rounded-full w-[20vw] h-[3vw] bg-gradient-to-r from-[#4F1395] to-[#2224A1] ">Cari & Pesan Tiket</button>
          </form>
        </div>
        <div className='tanggal mt-[2vw]'>
          <div className=" w-[1280px]">
            <Slider {...settings} className="custom-slider w-full px-[1vw]">
              {filteredDates.map((dateItem, index) => (
                console.log(dateItem.date),
                <div className="flex items-center my-5" key={index}>
                  <div className={`w-[208px] h-[83px] rounded-2xl cursor-pointer mx-auto flex flex-col items-center justify-center gap-y-2 ${dateItem.date === selectedDate ? "bg-white text-black" : "bg-gradient-to-r from-[#4F1395] to-[#2224A1] text-white"}`}>
                    <h3 className="font-bold text-[20px]">{dateItem.date.toLocaleDateString('id-ID', { weekday: 'long' })}</h3>
                    <h4 className='font-medium text-[1vw]'>{dateItem.date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</h4>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewTicket;
