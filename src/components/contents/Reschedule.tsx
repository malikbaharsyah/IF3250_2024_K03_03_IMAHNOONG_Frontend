import { DetailPesanan } from "../../interfaces/DetailPesanan";

const Reschedule = ({
  id,
  planetariumId,
  namaPemesan,
  noTelepon,
  email,
  waktuKunjungan,
  waktuDibuat,
  jumlahTiket,
  note,
  statusTiket,
  jenis,
  hargaTiket,
  namaJadwal,
  statusDiv,
}: DetailPesanan & { statusDiv: string | JSX.Element}) => {
  return (
    <div className="flex flex-col w-full h-fit rounded-3xl font-inter">
      <div className="flex flex-col bg-white p-8 w-full h-fit rounded-3xl">
        <div className="flex flex-row justify-between border-b-4 pb-4">
          <div className="font-bold text-xl">Penjadwalan Ulang</div>
          <div className="font-semibold text-lg">Jenis : {jenis}</div>
        </div>
        <div className="text-sm py-2">
          <table>
            <tbody>
              <tr>
                <td className="font-semibold" style={{ verticalAlign: "top" }}>
                  Order ID
                </td>
                <td style={{ verticalAlign: "top" }}>:</td>
                <td style={{ verticalAlign: "top" }}>{id}</td>
              </tr>
              <tr>
                <td className="font-semibold" style={{ verticalAlign: "top" }}>
                  Waktu Pemesanan
                </td>
                <td style={{ verticalAlign: "top" }}>:</td>
                <td style={{ verticalAlign: "top" }}>{(waktuDibuat !== null ? waktuDibuat[2] : "") + (waktuDibuat !== null ? waktuDibuat[1] : "")}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-row">
          <div className="flex flex-col pr-8">
            <div className="text-lg font-semibold">Data Pesanan</div>
            <div className="font-medium text-md mt-2">
              <table>
                <tbody>
                  <tr>
                    <td style={{ verticalAlign: "top" }}>Nama Acara/Show</td>
                    <td style={{ verticalAlign: "top" }}>:</td>
                    <td style={{ verticalAlign: "top" }}>{namaJadwal}</td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "top" }}>
                      <div className="mb-4">Tanggal Kunjungan</div>
                    </td>
                    <td style={{ verticalAlign: "top" }}>:</td>
                    <td style={{ verticalAlign: "top" }}>
                      <input
                        type="date"
                        className=" border border-color-2 rounded-md px-2"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "top" }}>
                      <div className="mb-4">Waktu Kunjungan</div>
                    </td>
                    <td style={{ verticalAlign: "top" }}>:</td>
                    <td style={{ verticalAlign: "top" }}>
                      <input
                        type="time"
                        className="border border-color-2 rounded-md px-2"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "top" }}>Jumlah Tiket</td>
                    <td style={{ verticalAlign: "top" }}>:</td>
                    <td style={{ verticalAlign: "top" }}>{jumlahTiket}</td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "top" }}>Harga Tiket</td>
                    <td style={{ verticalAlign: "top" }}>:</td>
                    <td style={{ verticalAlign: "top" }}>{jenis === "Permintaan Kunjungan" ? "-" : ("Rp"+(hargaTiket || ''))}</td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "top" }}>Total Harga</td>
                    <td style={{ verticalAlign: "top" }}>:</td>
                    <td style={{ verticalAlign: "top" }}>{jenis === "Permintaan Kunjungan" ? "-" : ("Rp"+(((hargaTiket || 0) * (jumlahTiket || 0)) || ''))}</td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "top" }}>Metode Pembayaran </td>
                    <td style={{ verticalAlign: "top" }}>:</td>
                    <td style={{ verticalAlign: "top" }}>
                      Mandiri Virtual Account
                    </td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "top" }}>Status</td>
                    <td style={{ verticalAlign: "top" }}>:</td>
                    <td style={{ verticalAlign: "top" }}>
                      {statusDiv}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-lg font-semibold">Data Pemesan</div>
            <div className="font-medium text-md mt-2">
              <table>
                <tbody>
                  <tr>
                    <td style={{ verticalAlign: "top" }}>Nama</td>
                    <td style={{ verticalAlign: "top" }}>:</td>
                    <td style={{ verticalAlign: "top" }}>{namaPemesan}</td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "top" }}>Email</td>
                    <td style={{ verticalAlign: "top" }}>:</td>
                    <td style={{ verticalAlign: "top" }}>{email}</td>
                  </tr>
                  <tr>
                    <td style={{ verticalAlign: "top" }}>No Telepon </td>
                    <td style={{ verticalAlign: "top" }}>:</td>
                    <td style={{ verticalAlign: "top" }}>{noTelepon}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex flex-col pb-4">
          <div className="font-medium text-lg">
            <table>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: "top" }}>
                    Catatan / Detail Permintaan :
                  </td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: "top" }}>
                    {note}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-color-7 w-fit text-white font-inter font-regular text-xl py-2 px-8 rounded-3xl hover:scale-105">
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reschedule;
