import { useState, useEffect } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { RedNotification, GreenNotification } from '../components/base/Notification';
import api from '../services/api';

const PilihAdmin = () => {
    const [adminName, setAdminName] = useState('');
    const [planetariumId, setPlanetariumId] = useState(0);
    const [isRed, setIsRed] = useState(false);
    const [isGreen, setIsGreen] = useState(false);
    const [message, setMessage] = useState("");
    const [admins, setAdmins] = useState([]);
    const [planetariums, setPlanetariums] = useState([]);

    useEffect(() => {
        api.get('/api/assignadmin').then((response) => {
            setAdmins(response.data);
        }).catch((error) => {
            console.error(error);
        });
        api.get('/api/catalog').then((response) => {
            // map response.data to get only {id:id, namaPlanetarium:namaPlanetarium}
           const pDatas = response.data.map((planetarium) => {
            return `${planetarium.id}. ${planetarium.namaPlanetarium}`});
            setPlanetariums(pDatas);
        }).catch((error) => {
            console.error(error);
        });
    }, []);

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

    const handleSubmit = () => {
        const body = {
            username: adminName,
            idPlanetarium: planetariumId
        }
        api.post('/api/assignadmin', body,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then((response) => {
            if (response.status === 200) {
                showGreenNotif('Berhasil assign admin');
            } else {
                showRedNotif('Gagal assign admin');
            }
        }).catch((error) => {
            showRedNotif('Gagal assign admin');
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
                    <h1 className="text-xl font-bold text-center text-gray-800 p-8">Pilih Admin dan Planetarium</h1>
                    <Autocomplete
                        options={admins}
                        getOptionLabel={(option) => option}
                        onInputChange={(event, newInputValue) => {
                        setAdminName(newInputValue);
                        }}
                        renderInput={(params) => <TextField {...params} label="Nama Admin" variant="outlined" />}
                    />
                    <Autocomplete
                        className='mt-4'
                        // show options to `{id}. {namaPlanetarium}`
                        
                        options={planetariums}
                        getOptionLabel={(option) => option}
                        onInputChange={(event, newInputValue) => {
                        setPlanetariumId(parseInt(newInputValue.split('.')[0]));
                        }}
                        renderInput={(params) => <TextField {...params} label="Nama Planetarium" variant="outlined" />}
                    />
                    <div className="flex justify-center px-8">
                        <button
                            className={`w-fit h-10 px-8 bg-gradient-to-r from-[#4F1395] to-[#2224A1] text-white rounded-full my-8 ${!planetariumId ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={handleSubmit}
                            disabled={!planetariumId}
                            type="submit"
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
