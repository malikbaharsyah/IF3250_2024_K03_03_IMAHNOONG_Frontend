const TicketContent = (test: unknown) => {
    test;
    return (
        <div className='container flex gap-x-[1vw]'>
            <div className='card'>
                <a href="#" className="block flex flex-col justify-between bg-transparent border-white border-2 rounded-[20px] w-[408px] h-[7vw] px-[1.5vw] py-[1vw]">

                    <h5 className="font-bold text-[1.5vw] text-white">Nama Show</h5>
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
    );
};

export default TicketContent;