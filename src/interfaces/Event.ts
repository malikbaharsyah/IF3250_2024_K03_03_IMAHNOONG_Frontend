
export interface Event {
    id: number;
    namaJadwal: string;
    waktuKunjungan: string[];
    kapasitas: number;
    hargaTiket: number;
    planetariumId: number;
    deskripsiJadwal: string;
    imagePath: string;
    lokasi: string;
  }

export interface EventContentProps {
    eventImage: string;
    eventName: string;
    eventDescription: string;
    eventLocation: string;
    eventTime: string;
    eventDate: string;
}