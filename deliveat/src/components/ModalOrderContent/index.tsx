'use client'
import { Icon } from '@iconify/react';
import avatar from '@/../public/assets/avatar.jpg'
import Image from "next/image";
import Button from '../Button';

interface data {
    code : string, 
    items : Array<{item : string, obs ?: string}> , 
    user : {name : string, profile ?: string}, 
    addres : {street: string, city : string, country: string, number ?: number},
    total : number,
    cupom : number,
    final : number,
    method :string,
    close: Function,
    buttons ?: boolean
}

export default function OrderModal({code, items, user, addres, total, cupom, final, method, close, buttons} : data){
    return (
       <>
            <button className='right-[10px] top-[10px] absolute' onClick={() => close()}><Icon icon="material-symbols:close" color="#42464D" height={25} width={25}/></button>
            <h1 className='text-[20px] font-bold'>Detalhes do pedido: </h1>
            <p className=' text-orange mb-[26px] text-[12px]'>#{code}</p>
            <ul className=" h-[100px] flex-wrap flex-col flex list-['+'] list-inside">
                {items.map((item, key) => ( 
                    <>
                        <li key={key}>1 : {item.name}</li>
                        <ul className=" list-['OBS:'] list-inside">
                            {item.obs && <li className='ml-[30px]'>{item.obs}</li>}
                        </ul>
                    </>
                ))}
            </ul>
            <h2 className='my-[16px] text-[18px] font-bold'>Entrega para:</h2>
            <div className='flex justify-between'>
                <div>
                    <div className='flex items-center mb-[10px] justify-start'>
                        <Image src={user.profile ? user.profile : avatar} alt="opa" width={25} height={25} className="rounded-full mr-[10px]"/>
                        <p className='text-[18px] font-bold'>{user.name}</p>
                    </div>
                    <div className='flex items-center justify-start'>
                        <Icon className="mr-[10px]" icon="icon-park-outline:local" color="#42464D"  width="23" height="25"/>
                        <div>
                            <p className='text-[18px]'>{addres.street}, n{addres.number}</p>
                            <p className='mt-[-5px] font-bold'>{addres.city} - {addres.country}</p>
                        </div>
                    </div>
                </div>
                <div className='mt-[-20px]'>
                    <p className='text-[14px]'>valor total: R${total}</p>
                    <p className='ml-[30px] text-[12px]'>~ Cupom aplicado: <span className='font-bold'>{cupom}%</span></p>
                    <p className='text-[14px]'>Valor final: <span className=' font-bold'>R${final}</span> <span className='font-bold text-[12px]'>: {method}</span></p>
                    {buttons && <div className='flex justify-end mt-[20px]'>
                        <Button type={2} height={25} width={100} text='Cancelar' font={16} onClick={() => console.log("Pedido cancelado")}/>
                        <Button type={1} height={25} width={100} text='Aprovar' font={16} onClick={() => console.log("Pedido aprovado")}/>
                    </div>}
                </div>
            </div>
        </>
    )
  }

  
  