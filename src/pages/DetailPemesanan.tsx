import Sidebar from "../components/base/Sidebar";
import RingkasanPesanan from "../components/contents/RingkasanPesanan";
import Reschedule from "../components/contents/Reschedule";
import KonfirmasiRequest from "../components/contents/KonfirmasiRequest";

const DetailPemesanan = () => {


    return (
        <section className="flex">
            <Sidebar/>
            <section className="flex-1">
                <div className="m-3 text-xl text-gray-900 font-semibold">
                    Pemesanan
                </div>
                <div className="flex flex-col bg-color-6 h-full p-8">
                    <RingkasanPesanan/>
                    <div className="flex justify-end mt-8">
                        <button className="bg-gradient-to-b from-color-2 to-color-3 w-fit text-white font-inter font-bold text-lg py-3 px-12 rounded-3xl hover:from-color-2 hover:to-color-3 transition duration-300 transform hover:scale-105">
                            Kembali
                        </button>
                    </div>
                </div>
                
            </section>
        </section>
    );
}

export default DetailPemesanan;