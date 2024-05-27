
export interface Event {
    id: number;
    namaJadwal: string;
    waktuKunjungan: string[];
    kapasitas: number;
    hargaTiket: number;
    planetariumId: number;
    deskripsiJadwal: string;
    imagePath: string[];
    durasi: number;
    lokasi: string;
  }

export interface EventContentProps {
    eventId: number;
    planetariumId: number;
    eventImage: string;
    eventName: string;
    eventDescription: string;
    eventLocation: string;
    eventTime: string;
    eventDate: string;
    eventDuration: string;
}

export interface editEvent{
  id: number;
  namaJadwal: string;
  waktuKunjungan: string;
  kapasitas: number;
  hargaTiket: number;
  planetariumId: number;
  deskripsiJadwal: string;
  imagePath: string[];
}