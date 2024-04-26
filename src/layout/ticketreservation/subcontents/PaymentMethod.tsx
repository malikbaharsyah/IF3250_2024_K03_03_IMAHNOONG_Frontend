import { useState } from "react";

const PaymentMethod = () => {

    const [payment, setPayment] = useState<string>('')
    console.log(payment);
    const listPayment = [
        "Mandiri Virtual Account",
        "BCA Virtual Account",
        "QRIS"
    ];
    const logoPayment = [
        "./PaymentLogo/LogoMandiri.svg",
        "./PaymentLogo/LogoBCA.svg",
        "./PaymentLogo/LogoQRIS.svg"
    ];

    return (
        <div className="font-inter flex flex-col gap-6 size-fit rounded-3xl bg-color-2 bg-opacity-50 p-8">
            <h2 className="font-semibold text-[28px] text-color-4">
                Metode Pembayaran
            </h2>
            <div className="w-[744px] bg-color-4 h-px"></div>
            <ul className="font-medium text-2xl text-color-4 flex flex-col w-full gap-5">{
                    listPayment.map((item, index)=>(
                        <div className="flex justify-between w-full"
                             key={item}>
                            <div className="inline-flex items-center">
                                <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="black">
                                    <input name="color" type="radio"
                                        className="before:content[''] peer relative size-8 cursor-pointer appearance-none rounded-full border-4 border-blue-gray-200 text-color-4 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-color-4 checked:before:bg-color-4 hover:before:opacity-10"
                                        id="black"
                                        onClick={() => setPayment(item)} />
                                    <span
                                        className="absolute text-color-4 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                        <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                        </svg>
                                    </span>
                                </label>    
                                {item}
                            </div>
                            <img className="rounded-lg" src={logoPayment[index]} alt={`${listPayment[index]}`}/>
                        </div>
                    ))
                }
            </ul>
        </div>
    );
}

export default PaymentMethod;