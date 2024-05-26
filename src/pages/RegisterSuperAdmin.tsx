import React, { useState } from 'react';
import { Button, Label, TextInput, Checkbox } from "flowbite-react";
import SidebarSuperAdmin from "../components/base/Sidebar_SuperAdmin";


export default function RegisterSuperAdmin() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prevState) => !prevState);
    };

    return(
        <>
            <div className='flex flex-col items-center h-full bg-[#E9EAF6]'>
                <div className="flex w-full h-full items-center justify-center">
                    <section className="bg-white rounded-2xl">
                        <form className="flex min-w-[35vw] px-12 py-5 flex-col gap-2">
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
                                <Label htmlFor="telp" value="Nomor Telepon" />
                                </div>
                                <TextInput id="telp" type="text" placeholder="Masukkan Nomor Telepon Anda" required shadow />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                <Label htmlFor="planetarium" value="Nama Planetarium" />
                                </div>
                                <TextInput id="planetarium" type="text" placeholder="Masukkan Nama Planetarium Anda" required shadow />
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