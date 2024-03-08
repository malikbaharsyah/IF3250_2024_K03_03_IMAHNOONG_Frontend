import Navbar from '../components/base/Navbar';
import Footer from '../components/base/footer';
import rocket from '../assets/icons/rocket.svg';
import Search from '../components/base/search_bar';

function help() {
  return (
    <>
        <div className="">
            <div className='absolute w-screen top-0 z-[999]'>
                <Navbar />
            </div>
            <div className="flex flex-col items-center bg-[url('../../public/Bg_Help_Page.svg')] min-h-[100vh] bg-no-repeat bg-[length:100vw] gap-y-10">
                <div className="mt-[12vw]">
                    <div className="font-bold text-[3.5vw] text-white">Pusat Bantuan</div>
                </div>
                <Search></Search>
                <div className='card flex w-[1090px] justify-between mt-[5vw]'>
                    <div className='container bg-[#4F1395] opacity-50 hover:opacity-100 w-[330px] h-[354px] rounded-[20px] flex flex-col items-center gap-y-5 py-5'>
                        <div className='icon border-white border-2 rounded-full size-[100px] flex items-center justify-center'>
                            <img className='size-[70px]' src={rocket} alt="rocket"/>
                        </div>
                        <div className='title text-white text-center font-medium text-[1.5vw]'>
                            <h1>Getting Started</h1>
                        </div>
                        <div className='desc text-white text-center font-normal text-[1vw] w-[80%]'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className='button'>
                            <button className='text-white text-center font-medium text-[1.2vw]'>
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className='container bg-[#4F1395] opacity-50 hover:opacity-100 w-[330px] h-[354px] rounded-[20px] flex flex-col items-center gap-y-5 py-5'>
                        <div className='icon border-white border-2 rounded-full size-[100px] flex items-center justify-center'>
                            <img className='size-[70px]' src={rocket} alt="rocket"/>
                        </div>
                        <div className='title text-white text-center font-medium text-[1.5vw]'>
                            <h1>Getting Started</h1>
                        </div>
                        <div className='desc text-white text-center font-normal text-[1vw] w-[80%]'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className='button'>
                            <button className='text-white text-center font-medium text-[1.2vw]'>
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className='container bg-[#4F1395] opacity-50 hover:opacity-100 w-[330px] h-[354px] rounded-[20px] flex flex-col items-center gap-y-5 py-5'>
                        <div className='icon border-white border-2 rounded-full size-[100px] flex items-center justify-center'>
                            <img className='size-[70px]' src={rocket} alt="rocket"/>
                        </div>
                        <div className='title text-white text-center font-medium text-[1.5vw]'>
                            <h1>Getting Started</h1>
                        </div>
                        <div className='desc text-white text-center font-normal text-[1vw] w-[80%]'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className='button'>
                            <button className='text-white text-center font-medium text-[1.2vw]'>
                                Learn More
                            </button>
                        </div>
                    </div>
                    
                    
                </div>
                <div className='w-screen z-[999] mt-[5vw]'>
                    <Footer />
                </div>
            </div>
        </div>
    </>
  );
}

export default help;