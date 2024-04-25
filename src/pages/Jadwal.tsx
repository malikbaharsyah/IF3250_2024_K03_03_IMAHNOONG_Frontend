import { useState } from 'react';
import Sidebar from "../components/base/Sidebar";
import JadwalAcara from "../components/contents/JadwalAcara";
import JadwalKunjungan from "../components/contents/JadwalKunjungan";
import DatePicker from "react-datepicker";
import { MdAdd } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";



const Jadwal = () => {
    const [activeTab, setActiveTab] = useState('jadwal-kunjungan');
    const [searchText, setSearchText] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [showOptions, setShowOptions] = useState(false);

    const changeTab = (tab) => {
        setActiveTab(tab);
    };

    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleSearch = () => {
        // Lakukan pencarian berdasarkan searchText dan selectedDate
        // Anda bisa menambahkan logika pencarian di sini
        console.log("Search Text:", searchText);
        console.log("Selected Date:", selectedDate);
    };

    const handleToggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const handleAddNew = (type) => {
        // Handle add new acara or kunjungan
        console.log("Tambah", type);
    };

    return (
        <section className="flex">
            <Sidebar />
            <section className="flex-1">
                <div className="flex flex-col bg-color-6 h-full p-8 relative">
                    <div className="flex mb-4 justify-center">
                        <div className="relative w-1/3">
                            <input
                                type="text"
                                value={searchText}
                                onChange={handleSearchTextChange}
                                placeholder="Cari Jadwal"
                                className="w-full px-3 py-2 border border-gray-300 rounded-l-full outline-none focus:border-color-2"
                            />
                        </div>
                        <div className="flex flex-row">
                            <DatePicker
                                selected={selectedDate}
                                onChange={handleDateChange}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Pilih tanggal"
                                className="w-full px-3 py-2 border border-gray-300 rounded-r-full outline-none focus:border-color-2"
                            />
                            <button onClick={handleSearch} className="ml-4 px-8 py-2 bg-color-2 text-white rounded-full hover:bg-opacity-80 hover:bg-color-2">Cari</button>
                        </div>
                    </div>
                    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 pl-2">
                        <li className="me-2">
                            <a href="#" onClick={() => changeTab('jadwal-kunjungan')} className={`inline-block px-4 py-2 rounded-t-lg ${activeTab === 'jadwal-kunjungan' ? 'text-color-2 bg-white font-bold' : 'hover:text-gray-600 hover:bg-gray-50 '}`}>Jadwal Kunjungan</a>
                        </li>
                        <li className="me-2">
                            <a href="#" onClick={() => changeTab('jadwal-acara')} className={`inline-block px-4 py-2 rounded-t-lg ${activeTab === 'jadwal-acara' ? 'text-color-2 bg-white font-bold' : 'hover:text-gray-600 hover:bg-gray-50 '}`}>Jadwal Acara</a>
                        </li>
                    </ul>
                    {activeTab === 'jadwal-kunjungan' && <JadwalKunjungan searchText={searchText} selectedDate={selectedDate} />}
                    {activeTab === 'jadwal-acara' && <JadwalAcara searchText={searchText} selectedDate={selectedDate} />}
                </div>
                <div className="fixed bottom-8 right-8 z-50">
                    <button onClick={handleToggleOptions} className="bg-color-2 text-white p-2 rounded-full shadow-lg hover:bg-opacity-80">
                        <MdAdd size={32} />
                    </button>
                    {showOptions && (
                        <div className="absolute bottom-8 right-12 bg-white p-2 rounded-lg shadow-lg w-[200px]">
                            <button onClick={() => handleAddNew('acara')} className="block w-full py-2 text-left hover:bg-gray-100 focus:outline-none">Tambah Acara Baru</button>
                            <button onClick={() => handleAddNew('kunjungan')} className="block w-full py-2 text-left hover:bg-gray-100 focus:outline-none">Tambah Kunjungan Baru</button>
                        </div>
                    
                    )}
                </div>
            </section>
        </section>
    );
}

export default Jadwal;