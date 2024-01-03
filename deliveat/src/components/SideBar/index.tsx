'use client'
import avatar from '@/../public/assets/avatar.jpg'
import Image from "next/image";
import { usePathname } from 'next/navigation'

import { Icon } from '@iconify/react';
import Link from 'next/link';

import { MyContext  } from '@/contexts'
import { useContext, useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function NavBar(){
    const pathname = usePathname()
    const { data, updateData } = useContext(MyContext);
    const router = useRouter()

    const logout = () => {
        localStorage.removeItem('access_token')
        updateData(" ")
        router.push('/')
    }

    useEffect(() => {

    },[data])

    const get_image = () => {
        if(data){
            return `http://127.0.0.1:8000/${data.profile_picture}`
        }
    }

    return (
        <aside id="default-sidebar" className="fixed bg-white top-0 left-0 z-40 w-[304px] h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="pt-[50px] px-[44px] flex justify-start items-center">
                <Image alt='avatar' src={data.profile_picture ? get_image() : avatar} height={70} width={70} className='rounded-full'/>
                <div className='pl-[10px]'>
                    <p className=' font-bold text-[16px] truncate'>{data.name}</p>
                    <p className=' text-[13px] mt-[-2px]'>Lanchonete</p>
                </div>
            </div>
            <div className="pt-[30px] px-[44px] items-center">
                <p className='text-[#8D8D8D] mb-[1px] text-[13px] mt-[-2px]'>Overview</p>
                <div className='h-[1px] bg-[#8D8D8D] w-full'><div></div></div>
            </div>
            <div className="px-[30px] py-[16px] overflow-y-auto">
                <ul className="space-y-2">
                    <li className={pathname == "/orders" ? "bg-orange hover:bg-[#C75413] transition px-[14px] py-[10px] rounded-lg" : "bg-white hover:bg-bg transition px-[14px] py-[10px] rounded-lg"}>
                        <Link href="/orders" className='flex items-center justify-start'><Icon icon="fa6-solid:list" color={pathname == "/orders" ? "white" :"#42464D"}  width="20" height="20"/><span className={pathname == "/orders" ? "text-white ml-[10px] text-[16px] font-bold" : "text-[#42464D] ml-[10px] text-[16px] font-bold"}>Pedidos</span></Link>
                    </li>
                    <li className={pathname == "/analysys" ? "bg-orange hover:bg-[#C75413] transition px-[14px] py-[10px] rounded-lg" : "bg-white hover:bg-bg transition px-[14px] py-[10px] rounded-lg"}>
                        <Link href="/analysys" className='flex items-center justify-start'><Icon icon="icon-park-outline:analysis" color={pathname == "/analysys" ? "white" :"#42464D"}  width="20" height="20"/><span className={pathname == "/analysys" ? "text-white ml-[10px] text-[16px] font-bold" : "text-[#42464D] ml-[10px] text-[16px] font-bold"}>Análise</span></Link>
                    </li>
                    <li className={pathname == "/menu" ? "bg-orange hover:bg-[#C75413] transition px-[14px] py-[10px] rounded-lg" : "bg-white hover:bg-bg transition px-[14px] py-[10px] rounded-lg"}>
                        <Link href="/menu" className='flex items-center justify-start'><Icon icon="iconamoon:profile-circle-fill" color={pathname == "/menu" ? "white" :"#42464D"}  width="20" height="20"/><span className={pathname == "/menu" ? "text-white ml-[10px] text-[16px] font-bold" : "text-[#42464D] ml-[10px] text-[16px] font-bold"}>Cadapio</span></Link>
                    </li>
                    <li className={pathname == "/history" ? "bg-orange hover:bg-[#C75413] transition px-[14px] py-[10px] rounded-lg" : "bg-white hover:bg-bg transition px-[14px] py-[10px] rounded-lg"}>
                        <Link href="/history" className='flex items-center justify-start'><Icon icon="fluent:history-32-filled" color={pathname == "/history" ? "white" :"#42464D"}  width="20" height="20"/><span className={pathname == "/history" ? "text-white ml-[10px] text-[16px] font-bold" : "text-[#42464D] ml-[10px] text-[16px] font-bold"}>Historico</span></Link>
                    </li>
                    <li className={pathname == "/comments" ? "bg-orange hover:bg-[#C75413] transition px-[14px] py-[10px] rounded-lg" : "bg-white hover:bg-bg transition px-[14px] py-[10px] rounded-lg"}>
                        <Link href="/comments" className='flex items-center justify-start'><Icon icon="material-symbols:comment" color={pathname == "/comments" ? "white" :"#42464D"}  width="20" height="20"/><span className={pathname == "/comments" ? "text-white ml-[10px] text-[16px] font-bold" : "text-[#42464D] ml-[10px] text-[16px] font-bold"}>Avaliações</span></Link>
                    </li> 
                    <li className='px-[14px] py-[10px]'>
                        <button onClick={logout} className='flex items-center justify-start'><Icon icon="mdi:exit-to-app" color="#CF2A36"  width="20" height="20"/><span className='ml-[10px] text-[16px] text-red_p hover:text-red-800 font-bold'>SAIR</span></button>
                    </li>
                </ul>
            </div>
        </aside>
    )
  }

  
  