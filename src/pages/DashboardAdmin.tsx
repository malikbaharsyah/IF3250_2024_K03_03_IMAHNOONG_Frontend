import React, { useState } from "react";
import Sidebar from "../components/base/Sidebar";
import { FaChevronDown, FaRegBell, FaRegUser } from "react-icons/fa";
import Chart from "react-apexcharts"
import { ApexOptions } from "apexcharts";
// import { Component } from "./Component";
// import { ComponentWrapper } from "./ComponentWrapper";
// import { Profile } from "./Profile";

const dashboardFieldStyle = "pb-2 bg-white rounded-[20px] overflow-hidden "
const dashboardFieldTitleStyle = "px-4 py-6 mx-4 text-start font-semibold text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap border-b "

const TodayOrders = () => {
    return (
        <div className={dashboardFieldStyle}>
            <div className={dashboardFieldTitleStyle}>
                Pemesanan hari ini
            </div>
            <TodayOrdersTable/>
        </div>
    )
}

const TodayOrdersTable = () => {
    const tableTitles = ["Nama", "Email", "Waktu Berkunjung", "Show", "Status"]
    
    //TODO(connect to backend, scroll)
    const tableRows = [
        {
            nama: "Veveel",
            email: "iloveppl@gmail.com",
            waktu_kunjung: "3/30/2024 : 03.00",
            show: "Show 1",
            status_bayar : "Telah Membayar",
        },
        {
            nama: "Jauza",
            email: "iloveppl@gmail.com",
            waktu_kunjung: "4/03/2024 : 03.00",
            show: "Show 1",
            status_bayar : "Menunggu",
        },
        {
            nama: "Laila",
            email: "iloveppl@gmail.com",
            waktu_kunjung: "4/05/2024 : 03.00",
            show: "Show 1",
            status_bayar : "Telah Membayar",
        },
        {
            nama: "Bintang",
            email: "iloveppl@gmail.com",
            waktu_kunjung: "4/11/2024 : 03.00",
            show: "Show 1",
            status_bayar : "Telah Membayar",
        },
    ]
    return (
        <div className="mx-4">
            <table className="w-full">
                <thead>
                    <tr>
                        {tableTitles.map((head) => (
                        <th
                            key={head}
                            className="p-4"
                        >
                            <p
                            className="text-[#0a061d] text-[16px] whitespace-nowrap relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium tracking-[0] leading-[normal]"
                            >
                            {head}
                            </p>
                        </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="max-h-full overflow-scroll">
                    {tableRows.map(({ nama, email, waktu_kunjung, show, status_bayar }, index) => {
                        const isLast = index === tableRows.length - 1;
                        const classes = isLast ? "p-4" : "p-4";
                        const data_style = "[font-family:'Inter-Medium',Helvetica] font-medium text-[#94959a] text-[14px] tracking-[0] leading-[normal]"
                        return (
                        <tr key={nama}>
                            <td className={classes}>
                            <p
                                className={data_style}
                            >
                                {nama}
                            </p>
                            </td>
                            <td className={classes}>
                            <p
                                className={data_style}
                            >
                                {email}
                            </p>
                            </td>
                            <td className={classes}>
                            <p 
                                className={data_style}
                            >
                                {waktu_kunjung}
                            </p>
                            </td>
                            <td className={classes}>
                            <p 
                                className={data_style}
                            >
                                {show}
                            </p>
                            </td>
                            <td className={classes}>
                            <p 
                                className={data_style}
                            >
                                {status_bayar}
                            </p>
                            </td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

const TopBar = () => {
    return (
        <div className="flex items-center justify-end gap-[43px] p-8 bg-white">
            <FaRegBell/>
            <div className="inline-flex items-center justify-center gap-[10px] relative flex-[0_0_auto]">
            <FaRegUser/>
                <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#0a061d] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Admin
                </div>
            </div>
        </div>
    )
}
const DashboardCalendar = () => {
    return (
    <div className={dashboardFieldStyle + "minw-[387px] min-h-[345px]"}>
         <div className="">

         </div>
    </div>
    )
}
const DashboardGraph = () => {
    const penjualanPerHari = Array(31).fill(0).map(() => Math.floor(Math.random() * 10) + 1) //TODO(connect to backend)
    const chartConfig : ApexChart = {
        type: "line",
    }
    const chartSeries : ApexAxisChartSeries = [{
        data: penjualanPerHari,
    }]
    const chartOptions : ApexOptions = {
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
            categories: Array(31).fill(0).map((_, i) => i + 1) // banyak baris, TODO(sesuaikan dengan jumlah hari dengan bulan yang dipilih)
            ,
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
    }
    return (
    <div className={dashboardFieldStyle + "min-w-[634px] min-h-[552px]"}>
       <div className={dashboardFieldTitleStyle}>
            Statistik pemesanan
        </div>
        <div>
            <Chart 
            type={chartConfig.type}
            options={chartOptions}
            series={chartSeries}
            />
        </div>
    </div>
    )
}
const GraphCalCombo = () => {
    return (
    <div className="flex gap-4">
        <DashboardGraph/>
        <DashboardCalendar/>
    </div>
    )
}
// text-[#0a061d] text-[16px] whitespace-nowrap relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium tracking-[0] leading-[normal]
// [font-family:'Inter-Medium',Helvetica] font-medium text-[#94959a] text-[14px] tracking-[0] leading-[normal]
export const DashboardAdmin = () => {
    return (
    <div className="flex flex-row">
        <Sidebar/>
        <div className="grow bg-[#e9eaf6] flex flex-col">
            {/* <div className="relative h-[1024px]"> */}
            {/* <div className="absolute w-[1103px] h-[1024px] top-0 left-px bg-white rotate-180" /> */}
            <TopBar/>
            <div className="p-8 grow flex flex-col gap-4">
                <TodayOrders/>
                <GraphCalCombo/>
            </div>
        </div>
    </div>
  );
};
