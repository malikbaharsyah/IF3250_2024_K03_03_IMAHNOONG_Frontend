export interface DetailsData {
    id: number;
    namaPlanetarium: string;
    deskripsi: string;
    prosedurPendaftaran: string;
    tataTertib: string;
    noTelepon: string;
    imagePath: string[];
    lokasi: string;
}

export interface Jadwal {
    id: number;
    namaJadwal: string;
    waktuKunjungan: string[];
    kapasitas: number;
    hargaTiket: number;
    planetariumId: number;
    deskripsiJadwal: string; 
    imagePath: string[];
    durasi: number;
    date?: Date;
}