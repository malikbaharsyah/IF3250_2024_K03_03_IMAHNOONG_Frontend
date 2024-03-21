import Sidebar from '../components/base/Sidebar';
import NavbarAdmin from '../components/base/Navbar_Admin';

function Pemesanan() {
return (
    <div className='flex'>
        <div>
            <Sidebar />
        </div>
        <div className="flex flex-col w-full items-center bg-[#E9EAF6] min-h-[100vh] bg-no-repeat bg-[length:100vw]">
            <div className='w-full'>
                <NavbarAdmin />
            </div>
        
        </div>
    </div>
);
}

export default Pemesanan;