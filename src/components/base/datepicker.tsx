import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaChevronDown } from 'react-icons/fa';

interface DatePickerProps extends React.HTMLProps<HTMLDivElement>{
  month? : boolean | undefined;
  integrated? : boolean | undefined;
}

const DatePickerComponent: React.FC<DatePickerProps> = ({month, integrated}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  if (month) {
    return (
      <div className="w-fit">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MMMM YYYY"
          className="w-44 border-2 text-sm rounded-full text-center outline-gradient-to-r from-[#4F1395] to-[#2224A1] cursor-pointer"
          showMonthYearPicker
          placeholderText='Pick Month'
          showIcon
        />
      </div>
    )
  }
  if (integrated){
    return (
      <div className="w-fit">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MMMM YYYY"
          className="border-2 p-2 rounded-full text-center outline-gradient-to-r from-[#4F1395] to-[#2224A1] cursor-pointer"
          popperClassName="relative"
          open
        />
      </div>
    )
  }
  return (
    <div className="w-fit">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        className="p-2 rounded-full outline-gradient-to-r from-[#4F1395] to-[#2224A1] cursor-pointer"
        showIcon
      />
    </div>
  )
};

export default DatePickerComponent;