import Navbar from '../components/base/Navbar';
import Footer from '../components/base/footer';
import rocket from '../assets/icons/rocket.svg';

function help() {
  return (
    <div className="h-screen bg-stars bg-no-repeat bg-cover bg-local overflow-auto">
      <div className="flex flex-col bg-[url('../../public/bgLandingPage.svg')] min-h-[100vh] bg-no-repeat bg-[length:100vw] gap-y-10">
        <div>
          <Navbar/>
        </div>
        <div className="mt-4 text-center">
          <div className="font-bold text-3xl text-white">Pusat Bantuan</div>
        </div>
        <div className='grid sm:grid-cols-3 gap-4 sm:gap-8 mt-4 px-10 sm:px-20'>
          <div className='flex flex-col bg-[#4F1395] opacity-50 hover:opacity-100 rounded-[20px] items-center gap-y-5 py-5'>
            <div className='border-white border-2 rounded-full w-[100px] h-[100px] flex items-center justify-center'>
              <img className='w-[70px] h-[70px]' src={rocket} alt="rocket"/>
            </div>
            <div className='text-white text-center font-medium text-xl'>
              <h1>Getting Started</h1>
            </div>
            <div className='text-white text-center font-normal text-sm w-[80%]'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='button'>
              <button className='text-white text-center font-medium text-md'>
                Learn More
              </button>
            </div>
          </div>
          <div className='flex flex-col bg-[#4F1395] opacity-50 hover:opacity-100 rounded-[20px] items-center gap-y-5 py-5'>
            <div className='border-white border-2 rounded-full w-[100px] h-[100px] flex items-center justify-center'>
              <img className='w-[70px] h-[70px]' src={rocket} alt="rocket"/>
            </div>
            <div className='text-white text-center font-medium text-xl'>
              <h1>Getting Started</h1>
            </div>
            <div className='text-white text-center font-normal text-sm w-[80%]'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className=''>
              <button className='text-white text-center font-medium text-md'>
                Learn More
              </button>
            </div>
          </div>
          <div className='flex flex-col bg-[#4F1395] opacity-50 hover:opacity-100 rounded-[20px] items-center gap-y-5 py-5'>
            <div className='border-white border-2 rounded-full w-[100px] h-[100px] flex items-center justify-center'>
              <img className='w-[70px] h-[70px]' src={rocket} alt="rocket"/>
            </div>
            <div className='text-white text-center font-medium text-xl'>
              <h1>Getting Started</h1>
            </div>
            <p className='text-white text-center font-normal text-sm w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className='text-white text-center font-medium text-md'>
            Learn More
            </button>
          </div>
        </div>
        
        <div className='w-screen z-[999] mt-[5vw]'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default help;
