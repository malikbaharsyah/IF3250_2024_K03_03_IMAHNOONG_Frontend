import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowForwardIosRounded, ArrowBackIosRounded } from '@mui/icons-material';

interface DateItem {
    date: Date;
}

const CarouselDate = () => {
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
        <Slider {...settings} className="custom-slider w-full px-[1vw]">
            {/* <div className="flex flex-row justify-center"> */}
                {tanggal.map((dateItem, index) => (
                        <div className="flex items-center my-5" key={index}>
                            <div className="w-[208px] h-[83px] rounded-2xl bg-gradient-to-r from-[#4F1395] to-[#2224A1] cursor-pointer mx-auto flex flex-col items-center justify-center gap-y-2">
                                <h3 className="font-bold text-[20px] text-white">{dateItem.date.toLocaleDateString('id-ID', { weekday: 'long' })}</h3>
                                <h4 className='font-medium text-[1vw] text-white'>{dateItem.date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</h4>
                            </div>
                        </div>
                ))}
            {/* </div> */}
        </Slider>
        
    );
};

export default CarouselDate;
