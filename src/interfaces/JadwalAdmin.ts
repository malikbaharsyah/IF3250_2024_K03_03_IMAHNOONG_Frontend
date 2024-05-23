export interface JadwalAdmin {
    id: number | String;
    jenis: String;
    imagePath: String[];
    namaJadwal: String;
    deskripsiJadwal: String;
    tanggal: String;
    waktu: String;
    kapasitas: number;
    durasi: number;
    hargaTiket: true;
    hari: string;
}