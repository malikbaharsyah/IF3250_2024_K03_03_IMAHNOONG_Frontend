import { useState } from "react";
import TextField from '@material-ui/core/TextField';

const BuatPlanetarium = () => {
    const [planetariumName, setPlanetariumName] = useState('');

    const handleSubmitButtonClick = () => {
        console.log(planetariumName);
    };
    
    return (
        <div className='flex flex-col items-center h-full bg-[#E9EAF6]'>
            <div className="flex w-full h-full items-center justify-center p-4">
                <div className="flex flex-col bg-white rounded-xl w-fit h-fit py-2 px-8">
                    <h1 className="text-xl font-bold text-center text-gray-800 p-8">Masukan Nama Planetarium</h1>
                    <TextField
                        className='rounded-full mt-4'
                        label="Nama Planetarium"
                        variant="outlined"
                        value={planetariumName}
                        onChange={(event) => setPlanetariumName(event.target.value)}
                    />
                    <div className="flex justify-center px-8">
                        <button
                            className={`w-fit h-10 px-8 bg-gradient-to-r from-[#4F1395] to-[#2224A1] text-white rounded-full my-8 ${!planetariumName ? 'opacity-50 cursor-not-allowed' : ''}`}
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
