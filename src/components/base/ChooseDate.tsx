import { FaAngleDown, FaCalendar } from "react-icons/fa";
import PrimaryButton from "../PrimaryButton";

const ChooseDate = () => {
    return (
        <div className="">
            <div className="bg-white bg-opacity-25 rounded-full p-4 flex flex-row items-center gap-6">
                <div className="flex flex-row gap-2 items-center bg-white bg-opacity-100 rounded-full py-1 px-2">
                    <FaCalendar/>
                    <h1 className="text-slate-400 text-[125%]">Pilih Tanggal</h1>
                    <FaAngleDown/>
                </div>
                <PrimaryButton text="Pilih"/>
            </div>
        </div>
    )
}

export default ChooseDate;