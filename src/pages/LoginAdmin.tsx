import React from 'react';
import '../components/base/button.css';


const LoginAdmin = () => {
  return (
    <div className="h-screen bg-color-1 bg-starsLogin bg-repeat bg-local font-inter">
        <div className="grid lg:grid-cols-2">
            <div className="hidden lg:flex w-full bg-local justify-center items-center" style={{backgroundImage: "url('../../../loginBg.png')"}}>
                <div className="text-2xl md:text-4xl">
                    <div className="text-white font-bold">Logo/Web name</div>
                </div>
            </div>
            <div className="w-full h-screen bg-white flex items-center justify-center bg-white">
                <div className="bg-white w-full">
                    <div className="mx-12 flex flex-col lg:mx-24">
                        <h1 className="font-bold text-2xl md:text-4xl bg-gradient-to-r from-color-2 to-color-3 bg-clip-text text-transparent">Hi!</h1>
                        <div className="mt-24">
                            <div className="">
                                <div className="flex flex-col">
                                    <p className="font-semibold text-lg md:text-2xl w-fit bg-gradient-to-r from-color-2 via-color-3 to-color-2 bg-clip-text text-transparent">Email/Phone number</p>
                                    <input className="mt-4 text-lg md:text-2xl bg-transparent border-0 focus:outline-none" type="text" name="email" placeholder="" />
                                    <div className="bg-gradient-to-r from-color-2 via-color-3 to-color-2 h-1 w-full"></div>
                                </div>
                                <div className="flex flex-col">
                                    <p className="mt-2 font-semibold text-lg md:text-2xl w-fit bg-gradient-to-r from-color-2 via-color-3 to-color-2 bg-clip-text text-transparent">Password</p>
                                    <input className="mt-4 text-lg md:text-2xl bg-transparent border-0 focus:outline-none" type="password" name="password" placeholder="" />
                                    <div className="bg-gradient-to-r from-color-2 via-color-3 to-color-2 h-1 w-full"></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="bg-gradient-to-b from-color-2 to-color-3 hover:scale-105 duration-150 hover:shadow-2xl hover:shadow-color-3  transition ease-in-out mt-24 text-white w-[207px] h-[69px] rounded-full font-inter font-medium text-2xl">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default LoginAdmin