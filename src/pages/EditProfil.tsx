import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaPlus } from "react-icons/fa6";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";


const EditProfil = () => {
    const [namaPlanetarium, setNamaPlanetarium] = useState('');
    const [tentangPlanetarium, setTentangPlanetarium] = useState('');
    const [prosedurPendaftaran, setProsedurPendaftaran] = useState('');
    const [tataTertib, setTataTertib] = useState('');
    const [noTelp, setNoTelp] = useState('');
    const [gambarFiles, setGambarFiles] = useState([]);
    const [gambarUrls, setGambarUrls] = useState([]);

    const handleSlideshowChange = (e) => {
        const files = e.target.files;
        const newFiles = [...gambarFiles];
        const newUrls = [...gambarUrls];

        // Limit to 5 images
        if (files.length + newFiles.length > 5) {
            alert("Maksimal 5 gambar!");
            return;
        }

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            newFiles.push(file);
            const reader = new FileReader();
            reader.onload = () => {
                newUrls.push(reader.result);
                setGambarUrls(newUrls);
            };
            reader.readAsDataURL(file);
        }

        setGambarFiles(newFiles);
    };

    const handleFotoChange = (e) => {
        const files = e.target.files;
        const newFiles = [...gambarFiles];
        const newUrls = [...gambarUrls];

        // Limit to 1 image
        if (files.length + newFiles.length > 1) {
            alert("Maksimal 1 gambar!");
            return;
        }

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            newFiles.push(file);
            const reader = new FileReader();
            reader.onload = () => {
                newUrls.push(reader.result);
                setGambarUrls(newUrls);
            };
            reader.readAsDataURL(file);
        }

        setGambarFiles(newFiles);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setOpenModal(true);
    };

    const handleCancel = () => {
        // Handle cancel
        console.log('Cancel');
    };

    const [openModal, setOpenModal] = useState(false);

    const handleConfirm = () => {
        // Handle submit
        console.log('Submit');
        setOpenModal(false);
      };

    return (
        <section className="flex-1">
            <div className="flex flex-col bg-color-6 h-full p-8">
                <div className="flex flex-col bg-white p-8 w-full h-fit rounded-3xl">
                    <div className="font-bold text-xl border-b-4 pb-4">
                        Edit Profil Planetarium
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-4">
                            <label htmlFor="namaPlanetarium" className="block pb-2 text-sm font-medium text-gray-700">Nama Planetarium</label>
                            <input 
                                type="text" 
                                id="namaPlanetarium" 
                                placeholder="Masukkan nama planetarium"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2" 
                                value={namaPlanetarium} 
                                onChange={(e) => setNamaPlanetarium(e.target.value)} />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="tentangPlanetarium" className="block pb-2 text-sm font-medium text-gray-700">Tentang Planetarium</label>
                            <textarea 
                                id="tentangPlanetarium" 
                                rows={5} 
                                placeholder="Masukkan informasi tentang planetarium"
                                className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
                                value={tentangPlanetarium} 
                                onChange={(e) => setTentangPlanetarium(e.target.value)}></textarea>
                        </div>
                        <div className="font-medium text-lg pt-4">
                            Informasi Planetarium
                        </div>
                        <div className="mt-4">
                            <label htmlFor="prosedurPendaftaran" className="block pb-2 text-sm font-medium text-gray-700">Prosedur Pendaftaran</label>
                            <textarea 
                                id="prosedurPendaftaran" 
                                rows={5} 
                                placeholder="Masukkan informasi prosedur pendaftaran"
                                className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
                                value={prosedurPendaftaran} 
                                onChange={(e) => setProsedurPendaftaran(e.target.value)}></textarea>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="tataTertib" className="block pb-2 text-sm font-medium text-gray-700">Tata Tertib</label>
                            <textarea 
                                id="tataTertib" 
                                rows={5} 
                                placeholder="Masukkan informasi tata tertib"
                                className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
                                value={tataTertib} 
                                onChange={(e) => setTataTertib(e.target.value)}></textarea>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="noTelp" className="block pb-2 text-sm font-medium text-gray-700">Nomor Telepon</label>
                            <input 
                                type="text" 
                                id="noTelp" 
                                placeholder="Masukkan nomor telepon yang dapat dihubungi pelanggan"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2" 
                                value={noTelp} 
                                onChange={(e) => setNoTelp(e.target.value)} />
                        </div>
                        <div className="font-medium text-lg pt-4">
                            Galeri Planetarium
                        </div>
                        <div className="flex flex-row items-center justify-between pt-4">
                            <div className="font-medium text-sm">
                                Slideshow Foto
                            </div>
                            <div className="font-normal text-sm">
                                maks. 5 foto
                            </div>
                        </div>
                        <div className="flex flex-col mt-4">
                            {gambarUrls.map((url, index) => (
                                <div
                                    key={index}
                                    className="w-1/3 p-2 relative"
                                >
                                    <img
                                        src={url}
                                        alt={`gambar-${index}`}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                    <button
                                        type="button"
                                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center"
                                        onClick={() => {
                                            const newFiles = [...gambarFiles];
                                            const newUrls = [...gambarUrls];
                                            newFiles.splice(index, 1);
                                            newUrls.splice(index, 1);
                                            setGambarFiles(newFiles);
                                            setGambarUrls(newUrls);
                                        }}
                                    >
                                        &times;
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4">
                            <input
                                type="file"
                                id="gambar"
                                className="hidden"
                                multiple
                                onChange={handleSlideshowChange}
                            />
                            <label
                                htmlFor="gambar"
                                className="bg-gray-200 flex flex-col w-fit items-center justify-center cursor-pointer inline-block rounded-lg p-4">
                                <FaPlus className="text-xl" />
                                Tambah Foto
                            </label>
                        </div>
                        <div className="flex flex-row items-center justify-between pt-4">
                            <div className="font-medium text-sm">
                                Foto Planetarium
                            </div>
                            <div className="font-normal text-sm">
                                maks. 1 foto
                            </div>
                        </div>
                        <div className="flex flex-col mt-4">
                            {gambarUrls.map((url, index) => (
                                <div
                                    key={index}
                                    className="w-1/3 p-2 relative"
                                >
                                    <img
                                        src={url}
                                        alt={`gambar-${index}`}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                    <button
                                        type="button"
                                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center"
                                        onClick={() => {
                                            const newFiles = [...gambarFiles];
                                            const newUrls = [...gambarUrls];
                                            newFiles.splice(index, 1);
                                            newUrls.splice(index, 1);
                                            setGambarFiles(newFiles);
                                            setGambarUrls(newUrls);
                                        }}
                                    >
                                        &times;
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4">
                            <input
                                type="file"
                                id="gambar"
                                className="hidden"
                                onChange={handleFotoChange}
                            />
                            <label
                                htmlFor="gambar"
                                className="bg-gray-200 flex flex-col w-fit items-center justify-center cursor-pointer inline-block rounded-lg p-4">
                                <FaPlus className="text-xl" />
                                Tambah Foto
                            </label>
                        </div>
                    </form>
                </div>
                <div className="flex justify-end mt-8">
                    <button onClick={handleCancel} className="bg-color-2 bg-opacity-50 w-fit text-white font-inter font-bold text-lg py-2 px-8 rounded-3xl hover:bg-color-2 transition duration-300 transform">
                        Batal
                    </button>
                    <Button
                        onClick={handleSubmit}
                        className="ml-4 bg-color-2 bg-opacity-90 w-fit text-white font-inter font-bold text-lg py-2 px-8 rounded-3xl hover:bg-opacity-100"
                        >
                        Simpan
                    </Button>
                </div>
            </div>
            <Modal className="bg-white" show={openModal} size="sm" onClose={() => setOpenModal(false)} popup>
                <Modal.Header className="bg-white" />
                <Modal.Body className="bg-white">
                    <div className="text-center bg-white">
                    <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-color-2 " />
                    <h3 className="mb-5 text-lg font-normal text-black ">
                        Apakah Anda yakin ingin menyimpan perubahan?
                    </h3>
                    <div className="flex justify-center gap-4">
                        <Button className="border-gray-400 text-black" onClick={() => setOpenModal(false)}>
                        Tidak, batalkan
                        </Button>
                        <Button className="bg-color-2" onClick={handleConfirm}>
                        {"Ya, saya yakin"}
                        </Button>
                    </div>
                    </div>
                </Modal.Body>
                </Modal>
        </section>
    );
};

export default EditProfil;
