import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import api from '../services/api';
import { editEvent } from '../interfaces/Event';

const EditAcara = () => {
    const [namaAcara, setNamaAcara] = useState('');
    const [deskripsiAcara, setDeskripsiAcara] = useState('');
    const [hargaTiket, setHargaTiket] = useState('');
    const [jumlahTiket, setJumlahTiket] = useState('');
    const [tanggal, setTanggal] = useState(new Date());
    const [waktu, setWaktu] = useState('');
    const [waktuZone, setWaktuZone] = useState('WIB');
    const [gambar, setGambar] = useState<File | null>(null);
    const [gambarUrl, setGambarUrl] = useState<string | null>(null);
    const [isNamaAcaraUpdated, setIsNamaAcaraUpdated] = useState(false);
    const imageRef = useRef<string>("");

    const [openModal, setOpenModal] = useState(false);
    const [openCancelModal, setOpenCancelModal] = useState(false);
    const [eventData, setEventData] = useState<editEvent>();
    const { jadwalId } = useParams();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setGambar(file);
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setGambarUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setOpenModal(true);
    };

    const handleCancel = () => {
        setOpenCancelModal(true);
    };

    const handleConfirmCancel = () => {
        setOpenCancelModal(false);
        console.log('Cancel');
    };

    const handleConfirm = async () => {
        try {
            setOpenModal(false);
            if (!namaAcara) return alert('Nama acara belum diisi');

            const [hours, minutes] = waktu.split(':').map(Number);
            const combined = new Date(tanggal);
            combined.setHours(hours);
            combined.setMinutes(minutes);

            if (waktuZone === 'WITA') combined.setHours(combined.getHours() - 1);
            else if (waktuZone === 'WIT') combined.setHours(combined.getHours() - 2);

            const isoString = combined.toISOString();

            const response = await api.post('/api/jadwal/editJadwal', {
                id: Number(jadwalId),
                title: namaAcara,
                date: isoString,
                kapasitas: Number(jumlahTiket),
                hargaTiket: Number(hargaTiket),
                planetariumId: parseInt(localStorage.getItem('idPlanetarium') || '0'),
                deskripsiJadwal: deskripsiAcara,
                imagePath: gambarUrl ? gambarUrl.split(',')[1] : '',
                isKunjungan: false,
                durasi: 60,
            });
            console.log('Jadwal edit successfully:', response.data);
        } catch (error) {
            console.error('Error edit jadwal:', error);
        }
    };

    useEffect(() => {
        api.get(`/api/jadwal/viewJadwal/${jadwalId}`)
            .then(response => response.data)
            .then(data => setEventData(data))
            .catch(error => console.error('Error fetching catalog data:', error));
    }, [jadwalId]);

    useEffect(() => {
        if (eventData && !isNamaAcaraUpdated) {
            setNamaAcara(eventData.namaJadwal);
            setDeskripsiAcara(eventData.deskripsiJadwal);
            setHargaTiket(eventData.hargaTiket.toString());
            setJumlahTiket(eventData.kapasitas.toString());
            setTanggal(new Date(eventData.waktuKunjungan));

            const hour = String(new Date(eventData.waktuKunjungan).getHours()).padStart(2, '0');
            const minute = String(new Date(eventData.waktuKunjungan).getMinutes()).padStart(2, '0');
            setWaktu(`${hour}:${minute}`);
            imageRef.current = eventData.imagePath[0];
            setIsNamaAcaraUpdated(true);
        }
    }, [eventData, isNamaAcaraUpdated]);

    return (
        <section className="flex-1">
            <div className="flex flex-col bg-color-6 h-full p-8">
                <div className="flex flex-col bg-white p-8 w-full h-fit rounded-3xl">
                    <div className="font-bold text-xl border-b-4 pb-4">Edit Acara</div>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-4">
                            <label htmlFor="namaAcara" className="block text-sm font-medium text-gray-700">Nama Acara</label>
                            <input
                                type="text"
                                id="namaAcara"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2"
                                value={namaAcara}
                                placeholder="Masukkan nama acara"
                                onChange={(e) => setNamaAcara(e.target.value)}
                            />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="deskripsiAcara" className="block text-sm font-medium text-gray-700">Deskripsi Acara</label>
                            <textarea
                                id="deskripsiAcara"
                                rows={3}
                                placeholder="Masukkan deskripsi acara"
                                className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                                value={deskripsiAcara}
                                onChange={(e) => setDeskripsiAcara(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="flex flex-col sm:flex-row mt-4">
                            <div className="mr-4">
                                <label htmlFor="hargaTiket" className="block text-sm font-medium text-gray-700">Harga Tiket<span className="ml-1 text-xs text-gray-500">(Isi dengan angka)</span></label>
                                <input
                                    type="number"
                                    id="hargaTiket"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2"
                                    value={hargaTiket}
                                    placeholder="Masukkan harga tiket"
                                    onChange={(e) => setHargaTiket(e.target.value)}
                                />
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <label htmlFor="jumlahTiket" className="block text-sm font-medium text-gray-700">Jumlah Tiket<span className="ml-1 text-xs text-gray-500">(Isi dengan angka)</span></label>
                                <input
                                    type="number"
                                    id="jumlahTiket"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2"
                                    value={jumlahTiket}
                                    placeholder="Masukkan jumlah tiket"
                                    onChange={(e) => setJumlahTiket(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row mt-4">
                            <div className="mr-4">
                                <label htmlFor="tanggal" className="block text-sm font-medium text-gray-700">Tanggal</label>
                                <DatePicker
                                    selected={tanggal}
                                    onChange={(date) => setTanggal(date || new Date())}
                                    placeholderText="Pilih tanggal"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2"
                                />
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <label htmlFor="waktu" className="block text-sm font-medium text-gray-700">Waktu</label>
                                <div className="flex">
                                    <input
                                        type="time"
                                        id="waktu"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2"
                                        value={waktu}
                                        onChange={(e) => setWaktu(e.target.value)}
                                    />
                                    <select
                                        id="waktuZone"
                                        className="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2"
                                        value={waktuZone}
                                        onChange={(e) => setWaktuZone(e.target.value)}
                                    >
                                        <option value="WIB">WIB</option>
                                        <option value="WITA">WITA</option>
                                        <option value="WIT">WIT</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="gambar" className="block text-sm font-medium text-gray-700">Gambar</label>
                            <input
                                type="file"
                                id="gambar"
                                accept="image/*"
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                                onChange={handleFileChange}
                            />
                            {gambarUrl && <img src={gambarUrl} alt="Preview" className="mt-2" style={{ maxHeight: '200px' }} />}
                        </div>
                        <div className="flex mt-6">
                            <Button type="submit" className="bg-blue-500 text-white rounded-lg p-2">Simpan</Button>
                            <Button type="button" onClick={handleCancel} className="ml-4 bg-red-500 text-white rounded-lg p-2">Batal</Button>
                        </div>
                    </form>
                    <Modal show={openModal} onClose={() => setOpenModal(false)}>
                        <Modal.Header>Konfirmasi</Modal.Header>
                        <Modal.Body>Apakah Anda yakin ingin menyimpan perubahan?</Modal.Body>
                        <Modal.Footer>
                            <Button onClick={handleConfirm}>Ya</Button>
                            <Button onClick={() => setOpenModal(false)}>Tidak</Button>
                        </Modal.Footer>
                    </Modal>
                    <Modal show={openCancelModal} onClose={() => setOpenCancelModal(false)}>
                        <Modal.Header>Konfirmasi Pembatalan</Modal.Header>
                        <Modal.Body>Apakah Anda yakin ingin membatalkan perubahan?</Modal.Body>
                        <Modal.Footer>
                            <Button onClick={handleConfirmCancel}>Ya</Button>
                            <Button onClick={() => setOpenCancelModal(false)}>Tidak</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </section>
    );
};

export default EditAcara;
