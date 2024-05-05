export interface Planetarium {
    id: number;
    namaPlanetarium: string;
    deskripsi: string;
    imagePath: string[];
    lokasi: string;
    rating?: string;
}

export interface CatalogContentProps {
    imageSrc: string[];
    title: string;
    description: string;
    location: string;
    
  }

export interface PlanetariumLandingPage {
    id: number;
    imagePath: string[];
    namaPlanetarium: string;
    deskripsi: string;
    lokasi: string;
}

export interface EditPlanetarium {
    id: number;
    namaPlanetarium: string;
    deskripsi: string;
    prosedurPendaftaran: string;
    tataTertib: string;
    noTelepon: string;
    imagePath: string[];
    lokasi: string;
}