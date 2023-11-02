'use client'
import { Icon } from '@iconify/react';

interface data {
    type : number, 
    height : number , 
    width : number, 
    icon ?: string,
    text : string,
    font : number
}

export default function Button({type, height, width, icon, text, font} : data){
    return (
        <button className={
            type == 1 ? ` bg-orange text-white text-[${font}px] h-[${height}px] w-[${width}px] items-center flex px-[5px] py-[2px] rounded-[3px] hover:bg-[#a36440]` : 
            type == 2 ? ` bg-red_p text-white text-[${font}px] h-[${height}px] w-[${width}px] items-center flex px-[5px] py-[2px] rounded-[3px] hover:bg-red-900` : 
            type == 3 ? ` bg-gray text-white text-[${font}px] h-[${height}px] w-[${width}px] items-center flex px-[5px] py-[2px] rounded-[3px] hover:bg-black` : ""}
        >
            {text}{icon && <Icon icon={icon} color="white" width={font} height={font}/>}
        </button>
    )
  }

  
  