import Sidebar from '../components/base/Sidebar';
import NavbarAdmin from '../components/base/Navbar_Admin';
import SearchIcon from '../../public/search.svg';
import React, {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 
import dayjs from 'dayjs';
import { TimePicker } from 'antd';

interface Ticket {
    id: number;
    waktu: Date;
    nama: string;
    email: string;
    acara: string;
    tanggal: Date;
    status: string;
}


function Pemesanan() {
    const [searchValue, setSearchValue] = useState('');
    const [filteredTickets, setFilteredTickets] = useState<Ticket[]>([]);
    const [tanggalTicket, setTanggalTicket] = useState(null);
    const [waktuTicket, setWaktuTicket] = useState(null);

    const handleSearchInputChange = (event: any) => {
        setSearchValue(event.target.value);
      };

    
    const handleSearchSubmit = (event: any) => {
        event.preventDefault();
      
        const filtered = ticket.filter((ticket) => {
            return (
                (ticket.nama.toLowerCase().includes(searchValue.toLowerCase()) ||
                ticket.email.toLowerCase().includes(searchValue.toLowerCase())) 
            );
        });
        setFilteredTickets(filtered);
      };

    const [value, setValue] = useState({ 
        startDate: null,
        endDate: null 
        }); 

    const handleDateChange = (date:any) => {
        setTanggalTicket(date);
          };

    const handleTimeChange = (time:any) => {
        setWaktuTicket(time);
    }

    const handleValueChange = (newValue: any) => {
        console.log("newValue:", newValue);
        setTanggalTicket(newValue);
        setValue(newValue);
    }

    const ticket: Ticket[] = [
        {
            id: 1,
            waktu: new Date(),
            nama: 'Arya',
            email: 'arya@gmail.com',
            acara: 'Kunjungan',
            tanggal: new Date(),
            status: 'Proses Bayar',
        },
        {
            id: 2,
            waktu: new Date(),
            nama: 'Budi',
            email: 'Budi',
            acara: 'Acara',
            tanggal: new Date(),
            status: 'Perlu Konfirmasi',
        },
        {
            id: 3,
            waktu: new Date(),
            nama: 'Citra',
            email: 'Citra@gmail.com',
            acara: 'Kunjungan',
            tanggal: new Date(),
            status: 'Lunas',
        }
        
    ]


    const headerTicket = [
        {id:1, title: 'No'},
        {id:2, title: 'ID'},
        {id:3, title: 'Waktu Pemesanan'},
        {id:4, title: 'Nama'},
        {id:5, title: 'Email'},
        {id:6, title: 'Acara'},
        {id:7, title: 'Tanggal Kunjungan'},
        {id:8, title: 'Status'}
    ]

return (
    <div className='flex'>
            <Sidebar />
        <div className="flex flex-col w-full items-center bg-[#E9EAF6] min-h-[100vh] bg-no-repeat bg-[length:100vw]">
            <div className='w-full'>
                <NavbarAdmin />
            </div>
            <div className='w-full flex justify-center'>
                <form className="flex mt-5 rounded-md h-[2.5vw] shadow-sm w-[50vw] gap-5" onSubmit={handleSearchSubmit}>
                    <div className='flex bg-white rounded-full w-full px-2'>
                        <button className="flex items-center justify-center w-[4vw] h-full">
                            <img src={SearchIcon} alt="SearchIcon" />
                        </button>
                        <input
                        type="text"
                        name="searchTicket"
                        id="searchTicket"
                        className="block w-full rounded-md px-2 text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-[#2224A1]"
                        placeholder="Cari . . ."
                        value={searchValue}
                        onChange={handleSearchInputChange}
                        />
                        <div className="flex items-center">
                            <div className='flex items-center w-[10vw] h-full border-2 px-2 border-l-[#2224A1] border-r-transparent  justify-between'>
                                <TimePicker 
                                    value={waktuTicket}
                                    onChange={handleTimeChange} 
                                    defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} 
                                    needConfirm={false}
                                    placeholder='Waktu Pemesanan'
                                    className="bg-transparent w-full text-gray-500 text-[1vw] cursor-pointer border-none focus:border-none"
                                />
                            </div>
                            <div className='flex items-center w-[10vw] h-full pl-5 border-2 border-l-[#2224A1] border-r-transparent justify-between'>
                                <Datepicker 
                                    primaryColor={"indigo"} 
                                    value={tanggalTicket} 
                                    onChange={handleDateChange}
                                    useRange={false} 
                                    asSingle={true} 
                                    placeholder={"Tanggal"}
                                    showShortcuts={true} 
                                    inputClassName="bg-transparent w-full text-gray-500 text-[1vw] cursor-pointer focus:outline-none"
                                /> 
                            </div>
                        </div>
                    </div>
                    <button type='submit' className='text-white font-bold px-10 rounded-full bg-gradient-to-r from-[#4F1395] to-[#2224A1] '>
                        Cari
                    </button>
                </form>
            </div>
            <main className='w-full h-full px-[1vw] py-[1.5vw]'>
                <section className='bg-white rounded-[2vw] w-full h-full pl-0 p-5'>
                    <div className='header flex font-bold h-max'>
                        {headerTicket.map((header) => (
                            <div key={header.id} className='flex'>
                                <div className='flex w-[9.5vw] justify-center'>
                                    {header.title}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='body '>
                        <ul className=''>
                            <li className='h-[30vw] overflow-auto'>
                            {(filteredTickets.length > 0 ? filteredTickets : ticket).map((ticket) => (
                                    <div key={ticket.id} className="flex h-[5vw] hover:border-[#2224A1] hover:border-4 hover:rounded-2xl cursor-pointer">
                                        <div className='flex w-[9.5vw] items-center justify-center'>
                                            {ticket.id}
                                        </div>
                                        <div className='flex w-[9.5vw] items-center justify-center'>
                                            {ticket.id}
                                        </div>
                                        <div className='flex w-[9.5vw] items-center justify-center'>
                                            {dayjs(ticket.tanggal).format('HH:mm')}
                                        </div>
                                        <div className='flex w-[9.5vw] items-center justify-center'>
                                            {ticket.nama}
                                        </div>
                                        <div className='flex w-[9.5vw] items-center justify-center'>
                                            {ticket.email}
                                        </div>
                                        <div className='flex w-[9.5vw] items-center justify-center'>
                                            {ticket.acara}
                                        </div>
                                        <div className='flex w-[9.5vw] items-center justify-center'>
                                            {dayjs(ticket.tanggal).format('DD MMMM YYYY')}
                                        </div>
                                        <div className='flex w-[9.5vw] items-center justify-center'>
                                            <div className={
                                                ticket.status === 'Proses Bayar'
                                                    ? 'flex items-center bg-[#ED6910] text-white px-2 rounded-full'
                                                    : ticket.status === 'Perlu Konfirmasi'
                                                    ? 'flex items-center bg-[#CE1F1F] text-white px-2 rounded-full'
                                                    : ticket.status === 'Lunas'
                                                    ? 'flex items-center bg-[#009229] text-white px-2 rounded-full'
                                                    : ''
                                                }>
                                                {ticket.status}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </li>
                        </ul>
                    </div>
                </section>

            </main>
        </div>
    </div>
);
}

export default Pemesanan;