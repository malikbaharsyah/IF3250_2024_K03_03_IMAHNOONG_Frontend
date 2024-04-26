import { useCallback, useEffect, useRef, useState } from "react";


const useClipboard = (props: { duration: number; }) => {
    const [copied, setCopied] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ref = useRef<any>();
    const resetCopy = useRef<NodeJS.Timeout>();
  
    const onCopy = useCallback(() => {
      navigator.clipboard
        .writeText(ref.current?.innerText)
        .then(() => setCopied(true));
    }, [ref]);
  
    useEffect(() => {
      if (copied) {
        resetCopy.current = setTimeout(
          () => setCopied(false),
          1000,
        );
      }
  
      return () => {
        clearTimeout(resetCopy.current);
      };
    }, [copied, props.duration]);
  
    return { copied, ref, onCopy };
  };

const PaymentPage = () => {

    
  const { ref, copied, onCopy } = useClipboard({ duration: 4000 });
    
    return (
        <div className="flex flex-col font-inter text-color-4 gap-4">
            <div className="rounded-[20px] items-center size-fit bg-color-2 justify-between bg-opacity-50 p-6 flex w-full">
                <h2 className="font-medium text-[24px]">Selesaikan Dalam</h2>
                <div className="text-center flex ml-20 items-center gap-2 font-medium text-2xl">
                    <p className="bg-color-4 bg-opacity-20 rounded-[12px] size-12 p-2">00</p>
                    <p>:</p>
                    <p className="bg-color-4 bg-opacity-20 rounded-[12px] size-12 p-2">20</p>
                    <p>:</p>
                    <p className="bg-color-4 bg-opacity-20 rounded-[12px] size-12 p-2">00</p>
                </div>                
            </div>
            <div className="rounded-[20px] items-center gap-6 size-fit bg-color-2 bg-opacity-50 p-6 flex flex-col">
                <div className="flex gap-5 items-center">
                    <h2 className="font-medium text-[28px] justify-between">Instruksi Pembayaran</h2>
                    <div className="bg-color-4 bg-opacity-20 rounded-[12px] p-3 ">
                        <h3 className="font-medium text-xl text-white text-opacity-50">Selesaikan sebelum</h3>
                        <p className="font-medium text-xl">Minggu, 3 Maret 2034, 15:12 WIB</p>
                    </div>
                </div>
                <div className="bg-color-4 w-full h-px"/>
                <div className="flex flex-col w-full gap-4">
                    <h2 className="font-inter font-medium text-[24px]">Lakukan transfer ke</h2>
                    <div className="flex items-center gap-4">
                        <img className="size-fit" src="./PaymentLogo/LogoMandiri.svg"/>
                        <p className="font-medium text-[20px]">Mandiri Virtual Account</p>
                    </div>
                    <div className="flex items-center justify-between rounded-[8px] bg-color-4 bg-opacity-20 px-4 py-4">
                        <p className="px-2 font-medium text-2xl" ref={ref} id="virtualacc">7001 4545 0808 2727</p>
                        <button
                            onClick={onCopy}>
                                <svg className={`${copied ? `animate-ping` : `animate-none`}`} width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <g clipPath="url(#clip0_785_13148)">
                                    <path d="M5.40039 14.0955C5.40039 10.0065 5.40039 7.96201 6.66489 6.69151C7.93089 5.42101 9.96639 5.42101 14.0404 5.42101H18.3604C22.4329 5.42101 24.4699 5.42101 25.7344 6.69151C27.0004 7.96201 27.0004 10.0065 27.0004 14.0955V21.3255C27.0004 25.4145 27.0004 27.459 25.7344 28.7295C24.4699 30 22.4329 30 18.3604 30H14.0404C9.96639 30 7.93089 30 6.66489 28.7295C5.40039 27.459 5.40039 25.4145 5.40039 21.3255V14.0955Z" fill="white"/>
                                    <path opacity="0.5" d="M1.758 1.758C-1.78814e-07 3.5145 0 6.3435 0 12V15C0 20.6565 -1.78814e-07 23.4855 1.758 25.242C2.6835 26.169 3.9075 26.607 5.688 26.814C5.4 25.554 5.4 23.82 5.4 21.324V14.0955C5.4 10.0065 5.4 7.962 6.6645 6.6915C7.9305 5.421 9.966 5.421 14.04 5.421H18.36C20.838 5.421 22.56 5.421 23.817 5.706C23.61 3.9165 23.172 2.688 22.242 1.758C20.4855 -1.78814e-07 17.6565 0 12 0C6.3435 0 3.5145 -1.78814e-07 1.758 1.758Z" fill="white"/>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_785_13148">
                                      <rect width="27" height="30" fill="white"/>
                                    </clipPath>
                                  </defs>
                                </svg>
                        </button>
                    </div>
                    <div>
                      <h2 className="font-medium text-[24px]">Total Pembayaran</h2>
                      <div className="flex items-center justify-between rounded-[8px] bg-color-4 bg-opacity-20 px-4 py-4">
                        <p className="px-2 font-medium text-2xl">Rp1.000.000,00.-</p>
                      </div>
                    </div>
                    <div className="gap-2 flex flex-col">
                      <h2 className=" font-medium text-[24px]">Cara Membayar</h2>
                      <div className="border-2 rounded-[20px] flex flex-col text-[20px] font-medium">
                        <button className="px-5 py-2 flex flex-row justify-between border-b-[2px]">
                          <h2>
                            Transfer Melalui ATM
                          </h2>
                          <div className="pt-2">
                            <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L10 9L19 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </button>
                        <button className="px-5 py-2 flex flex-row justify-between  border-b-[2px]">
                          <h2>
                            Transfer Melalui Livin by Mandiri
                          </h2>
                          <div className="pt-2">
                            <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L10 9L19 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </button>
                        <button className="px-5 py-2 flex flex-row justify-between">
                          <h2>
                            Transfer Melalui Internet Banking
                          </h2>
                          <div className="pt-2">
                            <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L10 9L19 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentPage;