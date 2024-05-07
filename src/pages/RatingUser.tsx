import React, { useState } from 'react';
import Navbar from '../components/base/Navbar';
import Footer from '../components/base/footer';
import Textarea from '../components/base/TextAreaCustom';
import Ratings from '../components/contents/Ratings';

export default function RatingUser() {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    const handleSubmit = (event:any) => {
        event.preventDefault();
        console.log(`Rating: ${rating}, Review: ${review}`);
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
                        <form className='flex flex-col mt-20 justify-center items-center' onSubmit={handleSubmit}>
                            <h1 className='font-semibold text-2xl text-white max-w-[820px] text-center'>
                                Kami selalu berusaha memberikan yang terbaik bagi pelanggan kami. Bantu kami menjadi lebih baik lagi dengan memberikan rating dan ulasan Anda
                            </h1>
                            <div className='flex flex-row justify-center items-center space-x-10 mt-10 mb-10'>
                                <Ratings/>
                            </div>
                            <Textarea />
                            <button type='submit' className='bg-gradient-to-r from-[#4F1395] to-[#2224A1] text-2xl font-bold text-white px-20 py-2 mt-10 rounded-full'>Submit</button>
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