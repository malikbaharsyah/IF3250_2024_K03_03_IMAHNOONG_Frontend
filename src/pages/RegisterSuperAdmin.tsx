import React, { useState } from 'react';
import { Button, Label, TextInput, Checkbox } from "flowbite-react";
import { RedNotification, GreenNotification } from '../components/base/Notification';
import SidebarSuperAdmin from "../components/base/Sidebar_SuperAdmin";
import api from '../services/api';


export default function RegisterSuperAdmin() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isRed, setIsRed] = useState(false);
    const [isGreen, setIsGreen] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const email = form.email.value;
        const username = form.username.value;
        const password = form.password.value;

        if (!email || !username || !password) {
            showRedNotif('Email, Username, and Password are required');
            return;
        }

        const body = JSON.stringify({
            email: email,
            username: username,
            password: password,
        });

        api.post('/api/registeradmin', 
        body, 
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        ).then((response) => {
            if (response.status === 200) {
                showGreenNotif('Admin account created successfully');
            } else if (response.status === 400) {
                showRedNotif('Invalid username or password');
            } else if (response.status == 500) {
                showRedNotif('Internal server error');
            }
        }).catch((error) => {
            alert(error);
        });
    }

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

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prevState) => !prevState);
    };



    return(
        <>
        <div className="red-notif-container absolute top-10 right-0 md:right-10" style={redNotifStyle}> 
            <RedNotification title="Gagal" description={message}/>
        </div>
        <div className="green-notif-container absolute top-10 right-0 md:right-10" style={greenNotifStyle}>
            <GreenNotification title="Berhasil" description={message}/>
        </div>
            <div className='flex flex-col items-center h-full bg-[#E9EAF6]'>
                <div className="flex w-full h-full items-center justify-center">
                    <section className="bg-white rounded-2xl">
                        <form onSubmit={handleSubmit} className="flex min-w-[35vw] px-12 py-5 flex-col gap-2">
                            <h1 className="mx-auto font-bold text-xl">
                            Buat Akun Admin
                            </h1>
                            <div>
                                <div className="mb-2 block">
                                <Label htmlFor="email" value="Email" />
                                </div>
                                <TextInput className="rounded-full" id="email" type="email" placeholder="Masukkan Email Anda" required shadow />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                <Label htmlFor="username" value="Username" />
                                </div>
                                <TextInput id="username" type="text" placeholder="Masukkan Username Anda" required shadow />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="password" value="Kata Sandi" />
                                </div>
                                <TextInput id="password" type={showPassword ? "text" : "password"} placeholder="Masukkan Kata Sandi Anda" required shadow />
                                <div className="flex px-2 pt-1 items-center cursor-pointer" onChange={togglePasswordVisibility}>
                                    <Checkbox id="checkbox-password" />
                                    <span className="ml-2 text-gray-500">{showPassword ? "Sembunyikan Kata Sandi" : "Tampilkan Kata Sandi"}</span>
                                </div>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                <Label htmlFor="repeat-password" value="Konfirmasi Kata Sandi" />
                                </div>
                                <TextInput id="repeat-password" type={showConfirmPassword ?  "text" : "password"} placeholder="Konfirmasi Kata Sandi" required shadow />
                                <div className="flex px-2 pt-1 items-center cursor-pointer" onChange={toggleConfirmPasswordVisibility}>
                                    <Checkbox id="checkbox-password" />
                                    <span className="ml-2 text-gray-500">{showConfirmPassword ? "Sembunyikan Kata Sandi" : "Tampilkan Kata Sandi"}</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <Button className="w-fit mt-4 px-8 rounded-full bg-gradient-to-r from-[#4F1395] to-[#2224A1]" type="submit">Buat Akun</Button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </>
    );
}