'use client'
import { Icon } from '@iconify/react';

interface data {
    type : number, 
    height : number , 
    width : number, 
    icon ?: string,
    text ?: string,
    font : number,
    onClick : Function,
}

export default function Button({type, height, width, icon, text, font, onClick} : data){
    return (
        <button onClick={() => onClick()} style={{height : height, width : width}} className={
            type == 1 ? ` bg-orange transition text-white text-[${font}px] items-center justify-center flex px-[5px] ml-[10px] py-[2px] rounded-[5.9px] hover:bg-[#a36440]`  : 
            type == 2 ? ` bg-red_p transition text-white text-[${font}px] justify-center items-center flex px-[5px] ml-[10px] py-[2px] rounded-[5.9px] hover:bg-red-900` : 
            type == 3 ? ` bg-gray transition text-white text-[${font}px] justify-center items-center flex px-[5px] ml-[10px] py-[2px] rounded-[5.9px] hover:bg-black` : ""}
        >
            {text}{icon && <Icon className={text && `ml-[10px]`} icon={icon} color="white" width={font} height={font}/>}
        </button>
    )
  }

  
  