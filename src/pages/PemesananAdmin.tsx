import { useState } from 'react';
import PemesananAll from "../components/contents/PemesananAll";
import PemesananReguler from "../components/contents/PemesananReguler";
import PemesananRequest from "../components/contents/PemesananRequest";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavbarAdmin from "../components/base/Navbar_Admin";

const PemesananAdmin = () => {
    const [activeTab, setActiveTab] = useState('pemesanan-all');
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

    return (
        <section className="flex-1">
            <div className="flex flex-col w-full bg-[#E9EAF6] min-h-[100vh] bg-no-repeat bg-[length:100vw] p-8">
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
                        <a href="#" onClick={() => changeTab('pemesanan-all')} className={`inline-block px-4 py-2 rounded-t-lg ${activeTab === 'pemesanan-all' ? 'text-color-2 bg-white font-bold' : 'hover:text-gray-600 hover:bg-gray-50 '}`}>Semua</a>
                    </li>
                    <li className="me-2">
                        <a href="#" onClick={() => changeTab('pemesanan-reguler')} className={`inline-block px-4 py-2 rounded-t-lg ${activeTab === 'pemesanan-reguler' ? 'text-color-2 bg-white font-bold' : 'hover:text-gray-600 hover:bg-gray-50 '}`}>Reguler</a>
                    </li>
                    <li className="me-2">
                        <a href="#" onClick={() => changeTab('pemesanan-request')} className={`inline-block px-4 py-2 rounded-t-lg ${activeTab === 'pemesanan-request' ? 'text-color-2 bg-white font-bold' : 'hover:text-gray-600 hover:bg-gray-50 '}`}>Request</a>
                    </li>
                </ul>
                {activeTab === 'pemesanan-all' && <PemesananAll />}
                {activeTab === 'pemesanan-reguler' && <PemesananReguler />}
                {activeTab === 'pemesanan-request' && <PemesananRequest />}
            </div>
        </section>
    );
}

export default PemesananAdmin;