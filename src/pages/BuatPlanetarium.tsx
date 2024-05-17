import { useState, useEffect, useRef } from "react";
import TextField from '@material-ui/core/TextField';

const BuatPlanetarium = () => {
    const [planetariumName, setPlanetariumName] = useState('');

    const handleSubmitButtonClick = () => {
        console.log(planetariumName);
    };

    const handleBackButtonClick = () => {
        console.log('Back');
    };
    
    return (
        <div className='flex flex-col items-center h-screen bg-[#E9EAF6]'>
            <div className="flex w-full h-fit bg-white py-4 pl-12">
                <h1 className="text-xl font-bold text-center text-gray-800">JOPI</h1>
                <p className="text-md text-black mt-auto">Superadmin</p>
            </div>
            <div className="flex w-full h-full items-center justify-center">
                <div className="flex flex-col bg-white rounded-xl w-fit h-fit py-2 px-8">
                    <h1 className="text-xl font-bold text-center text-gray-800 p-8">Masukan Nama Planetarium</h1>
                    <TextField
                        className='rounded-full mt-4'
                        label="Nama Planetarium"
                        variant="outlined"
                        value={planetariumName}
                        onChange={(event) => setPlanetariumName(event.target.value)}
                    />
                    <div className="flex justify-between px-8">
                        <button
                            className={`w-fit h-10 px-8 bg-color-2 bg-opacity-80 text-white rounded-full my-8`}
                            onClick={handleBackButtonClick}
                          >
                            Kembali
                        </button>
                        <button
                            className={`w-fit h-10 px-8 bg-color-2 text-white rounded-full my-8 ${!planetariumName ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={handleSubmitButtonClick}
                            disabled={!planetariumName}
                          >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuatPlanetarium;
