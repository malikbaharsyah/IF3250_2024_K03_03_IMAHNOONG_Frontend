import React, { useEffect, useState } from "react";
import { FaRegBell, FaRegUser } from "react-icons/fa";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { CalendarContainer } from "react-datepicker";
import DatePickerComponent from "../components/base/datepicker";
import { Pesanan } from "../interfaces/Pesanan";
import api from "../services/api";

const dashboardFieldStyle = "pb-2 bg-white rounded-[20px] overflow-hidden ";
const dashboardFieldTitleStyle =
  "px-4 py-6 mx-4 text-start font-semibold text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap border-b ";

const TodayOrders = () => {
  return (
    <div className="flex flex-col bg-white p-8 mb-4 w-full h-fit rounded-3xl">
      <div className="flex flex-row items-center justify-between font-bold text-xl border-b-4 pb-4">
        Pemesanan hari ini
      </div>
      <TodayOrdersTable />
    </div>
  );
};

const TodayOrdersTable = () => {
  const tableTitles = ["Nama", "Email", "Waktu Berkunjung", "Show", "Status"];

  //TODO(connect to backend, scroll)
  const [pesananData, setPesananData] = useState<Pesanan[]>([]);

  useEffect(() => {
    api.post("/api/dashboard/listPesananHariIni/", {
      id: parseInt(localStorage.getItem("idPlanetarium")!!),
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setPesananData(response.data);
      })

      .catch((error) => console.error("Error fetching jadwal data:", error));
  }, []);

  return (
    <div className="mr-4 overflow-auto">
      <table className="w-full">
        <thead>
          <tr>
            {tableTitles.map((head) => (
              <th key={head} className="p-4">
                <p className="text-[#0a061d] text-[16px] whitespace-nowrap relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium tracking-[0] leading-[normal]">
                  {head}
                </p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="max-h-full overflow-scroll">
          {pesananData.map((item, index) => {
            const isLast = index === pesananData.length - 1;
            const classes = isLast ? "p-4" : "p-4";
            const data_style =
              "[font-family:'Inter-Medium',Helvetica] font-medium text-[#94959a] text-[14px] tracking-[0] leading-[normal]";
            return (
              <tr key={item.namaPemesan}>
                <td className={classes}>
                  <p className={data_style}>{item.namaPemesan}</p>
                </td>
                <td className={classes}>
                  <p className={data_style}>{item.email}</p>
                </td>
                <td className={classes}>
                  <p className={data_style}>
                    {item.waktuAcara[2] +
                      " " +
                      item.waktuAcara[1] +
                      "\n" +
                      item.waktuDipesan[2] +
                      " " +
                      item.waktuDipesan[1]}
                  </p>
                </td>
                <td className={classes}>
                  <p className={data_style}>{item.namaAcara}</p>
                </td>
                <td className={classes}>
                  <p className={data_style}>{item.statusTiket}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// const TopBar = () => {
//     return (
//         <div className="flex items-center justify-end gap-[43px] p-8 bg-white">
//             <FaRegBell/>
//             <div className="inline-flex items-center justify-center gap-[10px] relative flex-[0_0_auto]">
//             <FaRegUser/>
//                 <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#0a061d] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
//                     Admin
//                 </div>
//             </div>
//         </div>
//     )
// }
const DashboardCalendar = () => {
  return (
    <div
      className={
        dashboardFieldStyle + "flex justify-around min-w-[387px] min-h-[345px]"
      }
    >
      <DatePickerComponent integrated className="grow" />
    </div>
  );
};
const DashboardGraph = () => {
  // const penjualanPerHari = Array(31)
  //   .fill(0)
  //   .map(() => Math.floor(Math.random() * 10) + 1); //TODO(connect to backend)

  const [penjualanPerHari, setPenjualanPerHari] = useState<number[]>([]);
  const [date, setDate] = useState(new Date());
  const fetchData = (month: number, year: number) => {
    fetch(`http://localhost:9000/api/dashboard/statistik/${localStorage.getItem("idPlanetarium")}/${month}/${year}`)
      .then((response) => response.json())
      .then((data) => {
        setPenjualanPerHari(data);
      })
      .catch((error) => console.error("Error fetching statistic data:", error));
  };

  useEffect(() => {
    // Fetch data on initial render
    fetchData(date.getMonth(), date.getFullYear());
  }, []);

  const onDateChange = (date: Date | null) => {
    if (date) {
      setDate(date);
      // Fetch data based on the new date
      fetchData(date.getMonth(), date.getFullYear());
    }
  };

  const chartSeries: ApexAxisChartSeries = [
    {
      name: "penjualan",
      data: penjualanPerHari,
    },
  ];
  const chartOptions: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    // title: {
    //     show: "",
    // },
    dataLabels: {
      enabled: false,
    },
    colors: ["#4F1395"],
    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: true,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: penjualanPerHari
        .map((_, i) => i + 1), // banyak baris, TODO(sesuaikan dengan jumlah hari dengan bulan yang dipilih)
    },
    yaxis: {
      axisBorder: {
        show: true,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: false,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  };
  return (
    <div className="flex flex-col bg-white p-8 mb-4 w-full h-fit rounded-3xl">
      <div className="flex flex-row items-center justify-between font-bold text-xl border-b-4 pb-4">
        Statistik pemesanan
        <DatePickerComponent selectedDate={date} onDateChange={onDateChange} month={true} />
      </div>
      <div>
        <Chart
          type={"line"}
          options={chartOptions}
          series={chartSeries}
        />
      </div>
    </div>
  );
};
const GraphCalCombo = () => {
  return (
    <div className="flex gap-4">
      <DashboardGraph />
      {/* <DashboardCalendar/> */}
    </div>
  );
};
// text-[#0a061d] text-[16px] whitespace-nowrap relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium tracking-[0] leading-[normal]
// [font-family:'Inter-Medium',Helvetica] font-medium text-[#94959a] text-[14px] tracking-[0] leading-[normal]
export const DashboardAdmin = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-full bg-[#E9EAF6] min-h-[100vh] bg-no-repeat bg-[length:100vw]">
        <div className="p-8 grow flex flex-col gap-4">
          <TodayOrders />
          <GraphCalCombo />
        </div>
      </div>
    </div>
  );
};
export default DashboardAdmin;
