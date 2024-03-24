import React from 'react';
import { NotificationProps } from '../../interfaces/Notification';

export const RedNotification:React.FC<NotificationProps> = ({
    title,
    description
}
 ) => {
  return (
    <div className='bg-gradient-to-r from-[#9C1515] to-50% to-[#0A0723] font-inter w-[415px] h-[88px] rounded-[20px] flex items-center gap-4 pl-6'>
      <div className="w-[50px] h-[50px] bg-[#5C5C5C] bg-opacity-30 rounded-[12px] flex justify-center items-center">
        <img src='../../../exclamation.svg' alt="exclamation"></img>
      </div>
      <div className="content">
        <div className="text-[#CE1F1F] font-bold text-[16px]">{title}</div>
        <div className="text-white text-[12px]">{description}</div>
      </div>
    </div>
  )
}

export const GreenNotification:React.FC<NotificationProps> = ({
  title,
  description
}
) => {
  return (
    <div className='bg-gradient-to-r from-[#009229] to-50% to-[#0A0723] font-inter w-[415px] h-[88px] rounded-[20px] flex items-center gap-4 pl-6'>
      <div className="w-[50px] h-[50px] bg-[#5C5C5C] bg-opacity-30 rounded-[12px] flex justify-center items-center">
        <img src='../../../check.svg' alt="exclamation"></img>
      </div>
      <div className="content">
        <div className="text-[#009229] font-bold text-[16px]">{title}</div>
        <div className="text-white text-[12px]">{description}</div>
      </div>
    </div>
  )
}