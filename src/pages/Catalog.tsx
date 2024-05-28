import { useState, useEffect } from 'react';
import Navbar from "../components/base/Navbar";
import CatalogContent from "../components/contents/CatalogContent";
import { Planetarium } from '../interfaces/Planetarium';
import api from '../services/api';

const Catalog = () => {

    const [catalogData, setCatalogData] = useState<Planetarium[]>([]);

    useEffect(() => {
        api.get('/api/catalog')
        .then(response => {setCatalogData(response.data);})
        .catch(error => console.error('Error fetching catalog data:', error));
    }, []);


    return (
        <div className='h-screen bg-stars bg-no-repeat bg-cover bg-local overflow-auto'>
            <div>
                <Navbar/>
            </div>
            <div className="flex flex-col items-center my-8 gap-y-8"> 
                <h1 className="font-inter text-white text-center text-2xl sm:text-3xl lg:text-5xl font-bold py-5 px-10">
                    Observatorium dan Planetarium
                </h1>
                <div className="flex flex-row flex-wrap px-10 sm:px-20 gap-[32px] size-fit justify-center">
                {catalogData.map((catalogItem) => (
                        <CatalogContent
                            planetariumId={catalogItem.id}
                            key={catalogItem.id} 
                            imageSrc={catalogItem.imagePath} 
                            title={catalogItem.namaPlanetarium}
                            description={catalogItem.deskripsi}
                            location={catalogItem.lokasi}
                            
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Catalog;