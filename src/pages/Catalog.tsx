import { useState, useEffect } from 'react';
import Navbar from "../components/base/Navbar";
import CatalogContent from "../components/contents/CatalogContent";
import { Planetarium } from '../interfaces/planetarium';

const Catalog = () => {

    const [catalogData, setCatalogData] = useState<Planetarium[]>([]);

    useEffect(() => {
      fetch('http://localhost:9000/api/catalog')
        .then(response => response.json())
        .then(data => {setCatalogData(data);})
            
        .catch(error => console.error('Error fetching catalog data:', error));
    }, []);


    return (
        <div className='h-screen bg-stars bg-no-repeat bg-cover bg-local overflow-auto'>
            <div>
                <Navbar/>
            </div>
            <div className="my-8">
                <h1 className="font-inter text-white text-center text-5xl font-bold py-5">
                    Observatorium and Planetarium
                </h1>
            </div>
            <div className="flex flex-row flex-wrap px-28 gap-[32px] size-fit justify-center">
            {catalogData.map((catalogItem) => (
                    <CatalogContent
                        key={catalogItem.id} 
                        imageSrc={catalogItem.imagePath} 
                        title={catalogItem.namaPlanetarium}
                        description={catalogItem.deskripsi}
                        location={catalogItem.lokasi}
                        
                    />
                ))}
                {/* <CatalogContent/>
                <CatalogContent/>
                <CatalogContent/>
                <CatalogContent/>
                <CatalogContent/>
                <CatalogContent/>
                <CatalogContent/> */}
            </div>
        </div>
    );
}

export default Catalog;