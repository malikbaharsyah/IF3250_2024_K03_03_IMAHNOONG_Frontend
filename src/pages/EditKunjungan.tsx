import Sidebar from "../components/base/Sidebar";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditKunjungan = () => {
    const [namaAcara, setNamaAcara] = useState('');
    const [hargaTiket, setHargaTiket] = useState('');
    const [jumlahTiket, setJumlahTiket] = useState('');
    const [tanggal, setTanggal] = useState('');
    const [waktu, setWaktu] = useState('');
    const [waktuZone, setWaktuZone] = useState('WIB');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({
            namaAcara,
            hargaTiket,
            jumlahTiket,
            tanggal,
            waktu,
            waktuZone,
        });
    };

    return (
        <section className="flex">
            <Sidebar />
            <section className="flex-1">
                <div className="flex flex-col bg-color-6 h-full p-8">
                    <div className="flex flex-col bg-white p-8 w-full h-fit rounded-3xl">
                        <div className="font-bold text-xl border-b-4 pb-4">
                            Edit Kunjungan
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mt-4">
                                <label htmlFor="namaAcara" className="block text-sm font-medium text-gray-700">Nama Show</label>
                                <input type="text" id="namaAcara" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" value={namaAcara} onChange={(e) => setNamaAcara(e.target.value)} />
                            </div>
                            <div className="mt-4 flex">
                                <div className="mr-4">
                                    <label htmlFor="hargaTiket" className="block text-sm font-medium text-gray-700">Harga Tiket
                                        <span className="ml-1 text-xs text-gray-500">(Isi dengan angka)</span>
                                    </label>
                                    <input 
                                        type="number"
                                        id="hargaTiket"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2"
                                        value={hargaTiket}
                                        onChange={(e) => {
                                            const value = parseInt(e.target.value);
                                            if (!isNaN(value) && value >= 0) {
                                                setHargaTiket(value);
                                            }
                                        }} 
                                        pattern="[0-9]*"
                                        min="0"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="jumlahTiket" className="block text-sm font-medium text-gray-700">Jumlah Tiket
                                        <span className="ml-1 text-xs text-gray-500">(Isi dengan angka)</span>
                                    </label>
                                    <input 
                                        type="number" 
                                        id="jumlahTiket" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2" 
                                        value={jumlahTiket} 
                                        onChange={(e) => {
                                            const value = parseInt(e.target.value);
                                            if (!isNaN(value) && value >= 0) {
                                                setJumlahTiket(value);
                                            }
                                        }} 
                                        pattern="[0-9]*"
                                        min="0"
                                    />
                                </div>
                            </div>
                            <div className="mt-4 flex">
                                <div className="mr-4">
                                    <label htmlFor="tanggal" className="block text-sm font-medium text-gray-700">Tanggal</label>
                                    <DatePicker selected={tanggal} onChange={(date) => setTanggal(date)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2" />
                                </div>
                                <div>
                                    <label htmlFor="waktu" className="block text-sm font-medium text-gray-700">Waktu</label>
                                    <div className="flex">
                                        <input type="time" id="waktu" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2" value={waktu} onChange={(e) => setWaktu(e.target.value)} />
                                        <select className="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2" value={waktuZone} onChange={(e) => setWaktuZone(e.target.value)}>
                                            <option value="WIB">WIB</option>
                                            <option value="WITA">WITA</option>
                                            <option value="WIT">WIT</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="flex justify-end mt-8">
                        <button className="bg-color-2 bg-opacity-50 w-fit text-white font-inter font-bold text-lg py-2 px-8 rounded-3xl hover:bg-color-2 transition duration-300 transform">
                            Batal
                        </button>
                        <button className="ml-4 bg-color-2 bg-opacity-90 w-fit text-white font-inter font-bold text-lg py-2 px-8 rounded-3xl hover:bg-opacity-100">
                            Simpan
                        </button>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default EditKunjungan;
