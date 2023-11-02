'use client'
import { Icon } from '@iconify/react';
import Button from '../Button';

interface data {
    name : string,
    date : string,
    price : number,
    address : string,
    user : string 
}

export default function CardOrder({name, date, price, address, user} : data){
    return (
        <div className=" w-[233px] h-[122px] rounded-[10px] bg-bg px-[17px] py-[10px]">
            <div className='flex items-center justify-between w-full'>
                <h1 className='text-[15px] font-bold'>{name}</h1>
                <p className='text-orange font-bold text-[12px]'>R${price}</p>
            </div>
            <p className=' text-[11px] pt-[-20]'>{date}</p>
            <div className='flex items-center mt-[6px]'>
                <Icon icon="icon-park-outline:local" color="#42464D"  width="15" height="15"/>
                <p className=' text-[12px] ml-[5px]'>{address}</p>
            </div>
            <div className='flex items-center mt-[3px]'>
                <Icon icon="mdi:user" color="#42464D"  width="15" height="15"/>
                <p className='text-[12px] ml-[5px]'>{user}</p>
            </div>
            <div className=' relative flex justify-end'>
                <Button type={1} text='detalhes' font={10} width={60} height={20}/>
            </div>
        </div> 
    )
  }

  
  