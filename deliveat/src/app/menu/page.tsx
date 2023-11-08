'use client'

import SubLayout from "../sublayout"
import avatar from '@/../public/assets/avatar.jpg'
import Image from "next/image";
import Button from "@/components/Button";

import { Icon } from '@iconify/react';
import { useState } from "react";

export default function Menu() {
    const [select, setSelected] = useState(0)

    const categories = [
        {name : "Hamburguer", id : 1},
        {name : "Massas", id : 2},
        {name : "Bebidas", id : 3},
    ]

    const data = [
        {name : "Hmaburguer classic", price : 29.50, side_dishes : ["ketchup", "maionese", "refri"], category : "Hamburguer"},
        {name : "Hmaburguer classic", price : 29.50, side_dishes : ["ketchup", "maionese", "refri"], category : "Hamburguer"},
        {name : "Hmaburguer classic", price : 29.50, side_dishes : ["ketchup", "maionese", "refri"], category : "Hamburguer"},
        {name : "Hmaburguer classic", price : 29.50, side_dishes : ["ketchup", "maionese", "refri"], category : "Hamburguer"}
    ]

    return (
        <SubLayout>
            <div className="rounded-[20px] h-full w-[1450px]">
                <div className="bg-gray rounded-ss-[20px] rounded-se-[20px] h-[168px] w-full"></div>
                <div className="bg-white rounded-es-[20px] rounded-ee-[20px] h-[710px] p-[30px] w-[1450px]">
                    <Image src={avatar} alt="opa" width={250} height={250} className=" absolute rounded-full top-[128px] left-[421px]" />
                    <div className=" mb-[44px] flex pl-[330px]">
                        <div className="mr-[75px]">
                            <h1 className="text-[36px] font-bold">Nome da empresa</h1>
                            <p className="mt-[-10px] text-[20px]">Lanchonete</p>
                        </div>
                        <div className="mr-[30px]">
                            <p className="text-[18px] text-[#939393] mt-[20px]">Aberto das 13:00h até  23:00h | SEG - SEX</p>
                        </div>
                        <div className="">
                            <div className="mt-[20px] h-fit flex items-center">
                                <div className="bg-orange px-[8px] py-[1px] h-[35px] flex items-center rounded-[5px] mr-[10px]">
                                    <p className="text-white text-[20px] font-bold">4.8</p>
                                </div>
                                <p className="text-[16px]">248 avaliações</p>
                            </div>
                            <div className="mt-[6px] h-fit flex items-center">
                                <div className="bg-blue px-[8px] py-[1px] h-[35px] flex items-center rounded-[5px] mr-[10px]">
                                    <p className="text-white text-[20px] font-bold">238</p>
                                </div>
                                <p className="text-[16px]">pedidos entregues</p>
                            </div>
                            <div className="flex items-center mt-[15px]">
                                <Icon className="mr-[10px]" icon="icon-park-outline:local" color="#42464D"  width="30" height="30"/>
                                <div>
                                    <p className="text-[16px]">Rua das flores, n 126</p>
                                    <p className="text-[12px]">Pau dos ferros - RN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-[44px] w-[1300px]">
                        <div className="flex">
                            {categories.map((category, key) => ( 
                                <button onClick={() => setSelected(category.id)} key={key} className={`hover px-[10px] pt[2px] ml-[20px] rounded-ss-[5px] hover:bg-bg transition border-b-[0px] border-solid border-gray border-[1px] rounded-se-[5px] ${select == category.id ? "bg-orange hover:bg-orange text-[white] border-none" : ""}`}>
                                    <p>{category.name}</p>
                                </button>
                            ))}
                            <button onClick={() => setSelected(0)} className={`hover px-[10px] pt[2px] ml-[20px] rounded-ss-[5px] border-b-[0px] border-solid border-gray border-[1px] rounded-se-[5px] ${select == 0 ? "bg-orange text-[white] border-none" : ""}`}>
                                <p>Todas</p>
                            </button>
                        </div>
                        <div className="bg-gray w-[1330px] justify-self-center h-[1px]"></div>
                    </div>
                    <div className="mt-[30px] ml-[44px] w-[1330px] rounded-lg border-solid border-[#DEE0E0] border-[1px]">
                        <table className="w-[1330px]">
                            <tr className="p-[10px] bg-[#F2F4F6]">
                                <th className="w-[390px] text-[16px] py-[15px] pl-[50px] text-start">Nome do produto</th>
                                <th className="text-[16px] py-[15px] text-start">Preço</th>
                                <th className="w-[500px] text-[16px] pl-[70px] py-[15px] text-start" >Acompanhamentos</th>
                                <th className="text-[16px] py-[15px] text-start">Categoria</th>
                                <th> </th>
                            </tr>
                            {data ? data.map((item, key) => ( 
                                <tr key={key}>
                                    <td className="w-[390px] py-[10px] text-[16px] text-start pl-[50px]">{item.name}</td>
                                    <td className="text-[16px] py-[10px] text-start">R${item.price}</td>
                                    <td className="w-[500px] text-[16px] pl-[70px] py-[10px] text-start">{item.side_dishes.map((e, i) => (e + ", ")).join(' ')}</td>
                                    <td className="text-[16px] py-[10px] text-start">{item.category}</td>
                                    <td className=" text-end items-center pr-[30px]">
                                        <button className="mt-[5px]"><Icon className="mr-[1px]" icon="material-symbols:delete" color="#CF2A36"  width="25" height="25"/></button>
                                        <button><Icon icon="ic:round-edit" color="#FF6D1B"  width="25" height="24"/></button>
                                    </td>
                                </tr>
                            )) : <p>Sem dados</p>
                            }
                        </table>
                    </div>
                    <div className="flex items-center justify-center w-[1330px] mt-[30px]">
                        <button className="flex">
                            <Icon icon="fluent:ios-arrow-24-filled" color="#000000"  width="15" height="14"/>
                            <Icon className="ml-[-10px]" icon="fluent:ios-arrow-24-filled" color="#000000"  width="15" height="14"/>
                        </button>
                        <button>
                            <Icon icon="fluent:ios-arrow-24-filled" color="#000000"  width="15" height="14"/>
                        </button>
                        <p className="font-bold mx-[20px] text-[20px]">1</p>
                        <button>
                            <Icon icon="fluent:ios-arrow-24-filled" rotate={2} color="#000000"  width="15" height="14"/>
                        </button>
                        <button className="flex">
                            <Icon icon="fluent:ios-arrow-24-filled" className="mr-[-10px]" rotate={2} color="#000000"  width="15" height="14"/>
                            <Icon icon="fluent:ios-arrow-24-filled" rotate={2} color="#000000"  width="15" height="14"/>
                        </button>
                        <div className=" relative right-[-585px]">
                            <Button onClick={() => console.log("")} type={1} height={30} width={80} text="Novo" font={16} icon="ic:baseline-plus"/>
                        </div>
                    </div>
                </div>
            </div>
        </SubLayout>
    )
}
