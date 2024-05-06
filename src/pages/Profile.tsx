import React, { useState } from 'react';
import NavbarAdmin from '../components/base/Navbar_Admin';
import Sidebar from '../components/base/Sidebar';
import Footer from '../components/base/footer';
import {FileInput, Label, TextInput, Textarea  } from "flowbite-react";



function Profile(){
    // const [file, setFile] = useState(null);
    const [files, setFiles] = useState<File[]>([]);

    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = Array.from(event.target.files || []);
        setFiles([...files, ...selectedFiles]);
    };

    return (
        <div className='flex'>
            <Sidebar />
            <div className="flex flex-col w-full items-center bg-[#E9EAF6] min-h-[100vh] bg-no-repeat bg-[length:100vw]">
                <div className='w-full'>
                    <NavbarAdmin />
                </div>
                <main className='flex w-full h-full'>
                    <form action="" className='flex w-full h-full px-[2vw] py-[1.5vw] justify-between space-x-5'>
                        <section className='bg-white rounded-2xl w-[70%] h-full p-7'>
                            <div className='h-[35vw] overflow-y-auto w-full space-y-5' style={{ scrollbarWidth: 'none' }}>
                                <div>
                                    <div className="mb-2 block">
                                        <Label className='font-semibold' htmlFor="nama_planetarium" value="Nama Planetarium" />
                                    </div>
                                    <TextInput id="nama_planetarium" type="text" placeholder="Nama Planetarium" required />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label className='font-semibold' htmlFor="tentang_planetarium" value="Tentang Planetarium" />
                                    </div>
                                    <Textarea  id="tentang_planetarium" placeholder="Masukkan tetang planetarium anda.. " required rows={4}/>
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label className='font-semibold text-lg' value="Informasi" />
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label className='font-semibold' htmlFor="prosedur_pendaftaran" value="Prosedur Pendaftaran" />
                                    </div>
                                    <Textarea  id="prosedur_pendaftaran" placeholder="Masukkan informasi prosedur pendaftaran.. " required rows={4}/>
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label className='font-semibold' htmlFor="tata_tertib" value="Tata Tertib" />
                                    </div>
                                    <Textarea  id="tata_tertib" placeholder="Masukkan informasi tata tertib.. " required rows={4}/>
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label className='font-semibold' htmlFor="no_telp" value="No. Telp" />
                                    </div>
                                    <TextInput id="no_telp" type="text" placeholder="Masukkan nomor telepon yang dapat dihubungi pelanggan.." required />
                                </div>
                                <div className='flex justify-end'>
                                    <button type="submit" className="text-white rounded-2xl mt-[2vw] px-[4vw] py-[1vw] bg-gradient-to-r from-[#4F1395] to-[#2224A1] ">Submit</button>
                                </div>
                            </div>
                        </section>
                        <section className='bg-white rounded-2xl w-[30%] p-4 h-full'>
                            <div className="flex flex-col h-[35vw] overflow-auto items-center space-y-5" style={{ scrollbarWidth: 'none' }}>
                                <ul className="list-disc space-y-5">
                                    {files.map((file, index) => (
                                        <li key={index}>
                                            <img src={URL.createObjectURL(file)} alt="profile" className="w-full rounded-lg h-64" />
                                        </li>
                                    ))}
                                </ul>
                                <Label
                                htmlFor="dropzone-file"
                                className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
                                >
                                    <div className="flex flex-col items-center justify-center pb-6 pt-5">
                                        <svg
                                        className="mb-4 h-8 w-8 text-gray-500"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 16"
                                        >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                        />
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500">
                                        <span className="font-semibold">Click to upload</span> or drag and drop
                                        </p>
                                        <p className="text-xs text-gray-500 ">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <FileInput id="dropzone-file" className="hidden" onChange={handleFileInputChange} />
                                </Label>

                            </div>
                        </section>
                    </form>
                </main>
            </div>
        </div>
    )
}

export default Profile;