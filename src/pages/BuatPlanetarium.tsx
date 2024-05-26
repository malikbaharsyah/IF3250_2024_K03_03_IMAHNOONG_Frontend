import { useState } from "react";
import TextField from '@material-ui/core/TextField';
import { RedNotification, GreenNotification } from '../components/base/Notification';
import api from "../services/api";

const BuatPlanetarium = () => {
    const [planetariumName, setPlanetariumName] = useState('');
    const [isRed, setIsRed] = useState(false);
    const [isGreen, setIsGreen] = useState(false);
    const [message, setMessage] = useState("");

    const showRedNotif = (message: string) => {
        setMessage(message);
        setIsRed(true);
        setTimeout(() => {
            setIsRed(false);
        }, 1000);
    }

    const showGreenNotif = (message: string) => {
        setMessage(message);
        setIsGreen(true);
        setTimeout(() => {
            setIsGreen(false);
        }, 1000);
    }

    const redNotifStyle: React.CSSProperties = {
        opacity: isRed ? 1 : 0,
        transition: 'opacity 0.5s ease-out',
      };

    const greenNotifStyle: React.CSSProperties = {
        opacity: isGreen ? 1 : 0,
        transition: 'opacity 0.5s ease-out',
    }
    const handleSubmitButtonClick = () => {
        api.post('/api/catalog', {
            namaPlanetarium: planetariumName,
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        
        }).then((response) => {
            if (response.status === 200) {
                showGreenNotif('Planetarium created successfully');
            } else if (response.status === 400) {
                showRedNotif('Invalid planetarium name');
            } else if (response.status == 500) {
                showRedNotif('Internal server error');
            }
        }).catch((error) => {
            alert(error);
        });
    };
    
    return (
        <div className='flex flex-col items-center h-full bg-[#E9EAF6]'>
            <div className="red-notif-container absolute top-10 right-0 md:right-10" style={redNotifStyle}> 
                <RedNotification title="Gagal" description={message}/>
            </div>
            <div className="green-notif-container absolute top-10 right-0 md:right-10" style={greenNotifStyle}>
                <GreenNotification title="Berhasil" description={message}/>
            </div>
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
