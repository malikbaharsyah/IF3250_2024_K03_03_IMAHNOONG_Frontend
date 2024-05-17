import { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';


const dummyDataAdmin = ['Aa1', 'aaa2', 'ab3', 'a3'];
const dummyDataPlanetarium = ['Planetarium1', 'Planetarium2', 'Planetarium3'];

const PilihAdmin = () => {
    const [adminName, setAdminName] = useState('');
    const [planetariumName, setPlanetariumName] = useState('');

    const handleSubmitButtonClick = () => {
        console.log(planetariumName);
        console.log(adminName);

    };

    const handleBackButtonClick = () => {
        console.log('Back');
    };
    return (
        <div className='flex flex-col items-center h-screen bg-[#E9EAF6]'>
            <div className="flex w-full h-fit bg-white py-4 pl-12">
                <h1 className="text-xl font-bold text-center text-gray-800">JOPI</h1>
                <p className="mt-auto text-md text-black">Superadmin</p>
            </div>
            <div className="flex w-full h-full items-center justify-center">
                <div className="flex flex-col bg-white rounded-xl w-fit h-fit py-2 px-8">
                    <h1 className="text-xl font-bold text-center text-gray-800 p-8">Pilih Admin dan Planetarium</h1>
                    <Autocomplete
                        options={dummyDataAdmin}
                        getOptionLabel={(option) => option}
                        onInputChange={(event, newInputValue) => {
                        setAdminName(newInputValue);
                        }}
                        renderInput={(params) => <TextField {...params} label="Nama Admin" variant="outlined" />}
                    />
                    <Autocomplete
                        className='mt-4'
                        options={dummyDataPlanetarium}
                        getOptionLabel={(option) => option}
                        onInputChange={(event, newInputValue) => {
                        setPlanetariumName(newInputValue);
                        }}
                        renderInput={(params) => <TextField {...params} label="Nama Planetarium" variant="outlined" />}
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

export default PilihAdmin;
