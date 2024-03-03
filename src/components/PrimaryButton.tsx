import React from "react"

const PrimaryButton = ({text, onClick}: any) => {
    return (
        <button className="w-[207px] h-[69px] rounded-full bg-gradient-to-b hover:bg-opacity-40 hover:from-[#B5B5B5] hover:to-color-3 hover:transition from-color-2 to-color-3
    font-inter font-medium text-[24px] text-white">
            {text}
        </button>)
}

export default PrimaryButton;