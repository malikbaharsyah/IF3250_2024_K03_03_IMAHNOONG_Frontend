import Sidebar from "../components/base/Sidebar";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";


const AddKunjungan = () => {
    const [namaAcara, setNamaAcara] = useState('');
    const [hargaTiket, setHargaTiket] = useState('');
    const [jumlahTiket, setJumlahTiket] = useState('');
    const [tanggal, setTanggal] = useState('');
    const [waktu, setWaktu] = useState('');
    const [waktuZone, setWaktuZone] = useState('WIB');

    const handleSubmit = (e) => {
        e.preventDefault();
        setOpenModal(true);
    };

    const handleCancel = () => {
        setOpenCancelModal(true);
    };

    const handleConfirmCancel = () => {
        setOpenCancelModal(false);
        // Handle cancel action
        console.log('Cancel');
    };

    const [openModal, setOpenModal] = useState(false);
    const [openCancelModal, setOpenCancelModal] = useState(false);

    const handleConfirm = () => {
        setOpenModal(false);
        // Handle submit action
        console.log('Submit');
    };

    return (
        <section className="flex-1">
            <div className="flex flex-col bg-color-6 h-lvh p-8">
                <div className="flex flex-col bg-white p-8 w-full h-fit rounded-3xl">
                    <div className="font-bold text-xl border-b-4 pb-4">
                        Buat Kunjungan Baru
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-4">
                            <label htmlFor="namaAcara" className="block text-sm font-medium text-gray-700">Nama Show</label>
                            <input 
                                type="text" 
                                id="namaAcara" 
                                placeholder="Masukkan Nama Show"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" 
                                value={namaAcara} onChange={(e) => setNamaAcara(e.target.value)} />
                        </div>
                        <div className="flex flex-col sm:flex-row mt-4">
                            <div className="mr-4">
                                <label htmlFor="hargaTiket" className="block text-sm font-medium text-gray-700">Harga Tiket
                                    <span className="ml-1 text-xs text-gray-500">(Isi dengan angka)</span>
                                </label>
                                <input 
                                    type="number"
                                    id="hargaTiket"
                                    placeholder="Masukkan Harga Tiket"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2"
                                    value={hargaTiket}
                                    onChange={(e) => setHargaTiket(e.target.value)} 
                                />
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <label htmlFor="jumlahTiket" className="block text-sm font-medium text-gray-700">Jumlah Tiket
                                    <span className="ml-1 text-xs text-gray-500">(Isi dengan angka)</span>
                                </label>
                                <input 
                                    type="number"
                                    id="jumlahTiket"
                                    placeholder="Masukkan Jumlah Tiket"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2"
                                    value={jumlahTiket}
                                    onChange={(e) => setJumlahTiket(e.target.value)} 
                                />
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row mt-4">
                            <div className="mr-4">
                                <label htmlFor="tanggal" className="block text-sm font-medium text-gray-700">Tanggal</label>
                                <DatePicker 
                                    selected={tanggal} 
                                    onChange={(date) => setTanggal(date)} 
                                    placeholderText="Pilih Tanggal"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2" />
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <label htmlFor="waktu" className="block text-sm font-medium text-gray-700">Waktu</label>
                                <div className="flex">
                                    <input type="time" id="waktu" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2" value={waktu} onChange={(e) => setWaktu(e.target.value)} />
                                    <select className="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2" value={waktuZone} onChange={(e) => setWaktuZone(e.target.value)}>
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
                    <Button
                        onClick={handleCancel}
                        className="bg-color-2 bg-opacity-50 w-fit text-white font-inter font-bold text-lg py-2 px-6 rounded-full hover:bg-color-2 transition duration-300 transform"
                    >
                        Batal
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        className="ml-4 bg-color-2 bg-opacity-90 w-fit text-white font-inter font-bold text-lg py-2 px-6 rounded-full hover:bg-opacity-100"
                    >
                        Simpan
                    </Button>
                </div>
            </div>
            <Modal
                className="bg-white"
                show={openModal}
                size="sm"
                onClose={() => setOpenModal(false)}
                popup
            >
                <Modal.Header className="bg-white" />
                <Modal.Body className="bg-white">
                    <div className="text-center bg-white">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-color-2 " />
                        <h3 className="mb-5 text-lg font-normal text-black ">
                            Apakah Anda yakin ingin menyimpan perubahan?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button
                                className="border-gray-400 text-black"
                                onClick={() => setOpenModal(false)}
                            >
                                Tidak, lanjutkan
                            </Button>
                            <Button className="bg-color-2" onClick={handleConfirm}>
                                Ya, simpan
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal
                className="bg-white"
                show={openCancelModal}
                size="sm"
                onClose={() => setOpenCancelModal(false)}
                popup
            >
                <Modal.Header className="bg-white" />
                <Modal.Body className="bg-white">
                    <div className="text-center bg-white">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-color-2 " />
                        <h3 className="mb-5 text-lg font-normal text-black ">
                            Apakah Anda yakin ingin membatalkan perubahan?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button
                                className="border-gray-400 text-black"
                                onClick={() => setOpenCancelModal(false)}
                            >
                                Ya, batalkan
                            </Button>
                            <Button className="bg-color-2" onClick={handleConfirmCancel}>
                            Tidak, lanjutkan
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </section>
    );
}

export default AddKunjungan;
