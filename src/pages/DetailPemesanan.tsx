import Sidebar from "../components/base/Sidebar";
import { useParams } from "react-router-dom";
import RingkasanPesanan from "../components/contents/RingkasanPesanan";

const DetailPemesanan = () => {
  const urlParams = new URLSearchParams(window.location.search);

  const id = urlParams.get('id');

  return (
    <section className="flex-1">
      <div className="flex flex-col bg-color-6 h-full p-8">
        <RingkasanPesanan id={id!!} />
        <div className="flex justify-end mt-8">
          <button className="bg-gradient-to-b from-color-2 to-color-3 w-fit text-white font-inter font-bold text-lg py-3 px-12 rounded-3xl hover:from-color-2 hover:to-color-3 transition duration-300 transform hover:scale-105">
            Kembali
          </button>
        </div>
      </div>
    </section>
  );
};

export default DetailPemesanan;
