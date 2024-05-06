import { useState } from 'react';
import Navbar from '../components/base/Navbar';
import Footer from '../components/base/footer';
import Textarea from '../components/base/TextAreaCustom';

export default function RatingUser() {
    const rating = [1, 2, 3, 4, 5];

    // State untuk melacak tombol rating yang ditekan
    const [selectedRating, setSelectedRating] = useState(null);

    // Event handler untuk mengubah warna tombol rating dan menetapkan nilai rating yang dipilih
    const handleRatingClick = (rate : any) => {
        setSelectedRating(rate);
    };

    return (
        <>
            <div className="bg-[url('../../public/Bg_Help_Page.svg')] min-h-[100vh] bg-no-repeat bg-[length:100vw]">
                <header>
                    <nav className='absolute w-screen top-0 z-[999]'>
                        <Navbar />
                    </nav>
                </header>
                <body>
                    <main className='flex flex-col w-full min-h-screen justify-center items-center'>
                        <form className='flex flex-col mt-20 justify-center items-center'>
                            <h1 className='font-semibold text-2xl text-white max-w-[820px] text-center'>
                                Kami selalu berusaha memberikan yang terbaik bagi pelanggan kami. Bantu kami menjadi lebih baik lagi dengan memberikan rating dan ulasan Anda
                            </h1>
                            <div className='flex flex-row justify-center items-center space-x-10 mt-10 mb-10'>
                                {rating.map((rate) => (
                                    <button 
                                        key={rate}
                                        className={`cursor-pointer font-semibold text-lg rounded-full w-[50px] h-[50px] flex justify-center items-center 
                                            ${selectedRating === rate ? 'bg-white text-[#4F1395]' : 'bg-gradient-to-r from-[#4F1395] to-[#2224A1] text-white'}`}
                                        onClick={() => handleRatingClick(rate)}
                                    >
                                        {rate}
                                    </button>
                                ))}
                            </div>
                            <Textarea />
                            <button className='bg-gradient-to-r from-[#4F1395] to-[#2224A1] text-2xl font-bold text-white px-20 py-2 mt-10 rounded-full'>Submit</button>
                        </form>
                    </main>
                </body>
                <footer className='w-screen z-[999] mt-[5vw]'>
                    <Footer />
                </footer>
            </div>
        </>
    );
}
