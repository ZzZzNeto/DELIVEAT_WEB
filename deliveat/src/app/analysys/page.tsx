'use client'

import SubLayout from "../sublayout"
import Image from "next/image";

import axios from "axios";
import avatar from "../../../public/assets/avatar.jpg"
import { MyContext } from "@/contexts";
import { useContext, useState, useEffect } from "react";

export default function Analysys() {
    const { data, updateData } = useContext(MyContext);
    const [total, setTotal] = useState([])
    const [week, setWeek] = useState([])
    const [count, setCount] = useState([])
    const [comments, setComments] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        get_total()
        get_week()
        get_count()
        get_comments()
        get_products()
    },[data])

    const formatNoteDate = (date: string) => {
        if (!date) return date;
        const formattedDate = new Date(date);
        return (
          formattedDate.toLocaleDateString("pt-br", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }) +
          " - " +
          formattedDate.toLocaleTimeString("pt-br", { timeStyle: "short" })
        );
      };

    const get_total = async () => {
        if(data){
            const dataset = await axios.get(
                `http://127.0.0.1:8000/order/amount/`, {headers: { Authorization: `Bearer ${data.access_token}`}} 
            )
            setTotal(dataset.data)
        }
    }

    const get_products = async () => {
        if(data){
            const dataset = await axios.get(
                `http://127.0.0.1:8000/product/list/`, {headers: { Authorization: `Bearer ${data.access_token}`}} 
            )
            setProducts(dataset.data)
        }
    }

    const get_week = async () => {
        if(data){
            const dataset = await axios.get(
                `http://127.0.0.1:8000/order/last_week/`, {headers: { Authorization: `Bearer ${data.access_token}`}} 
            )
            setWeek(dataset.data)
        }
    }

    const get_count = async () => {
        if(data){
            const dataset = await axios.get(
                `http://127.0.0.1:8000/order/count/`, {headers: { Authorization: `Bearer ${data.access_token}`}} 
            )
            setCount(dataset.data)
        }
    }

    const get_comments = async () => {
        if(data){
            const dataset = await axios.get(
                `http://127.0.0.1:8000/rating/list/`, {headers: { Authorization: `Bearer ${data.access_token}`}} 
            )
            setComments(dataset.data)
        }
    }

    return (
        <SubLayout>
            <div className="flex">
                <div>
                    <div className="flex ">
                        <div className="w-[350px] h-[201px] rounded-[20px] bg-white mr-[30px]">
                            <div className=" bg-orange rounded-ss-[5000px] rounded-ee-full w-[206px] px-[16px] py-[7px]">
                                <h1 className="text-white text-[20px] font-bold">Lucro</h1>
                            </div>
                            <div className="px-[40px] py-[30px] flex justify-between">
                                <div>
                                    <h1 className="font-bold text-[20px]">Hoje</h1>
                                    <p className="text-[12px] mb-[10px]">{total[1] && total[1].date}</p>
                                    <h1 className="text-orange font-bold text-[20px]">R$ {total[1] && total[1].total}</h1>
                                </div>
                                <div className="border-[1px] border-orange border-dashed border-collapse border-spacing-30"></div>
                                <div>
                                    <h1 className="font-bold text-[20px] text-end">Ontem</h1>
                                    <p className="text-[12px] mb-[10px]">{total[0] && total[0].date}</p>
                                    <h1 className="text-orange font-bold text-[20px]">R$ {total[0] && total[0].total}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="w-[350px] h-[201px] rounded-[20px] bg-white">
                            <div className=" bg-orange rounded-ss-[5000px] rounded-ee-full w-[206px] px-[16px] py-[7px]">
                                <h1 className="text-white text-[20px] font-bold">Total de vendas</h1>
                            </div>
                            <div className="px-[40px] py-[30px] flex justify-between">
                                <div>
                                    <h1 className="font-bold text-[20px]">Hoje</h1>
                                    <p className="text-[12px] mb-[10px]">{count[1] && count[1].date}</p>
                                    <h1 className="text-orange font-bold text-[20px]">{count[1] && count[1].total} vendas</h1>
                                </div>
                                <div className="border-[1px] border-orange border-dashed border-collapse border-spacing-30"></div>
                                <div>
                                    <h1 className="font-bold text-[20px] text-end">Ontem</h1>
                                    <p className="text-[12px] mb-[10px] text-end">{count[0] && count[0].date}</p>
                                    <h1 className="text-orange font-bold text-[20px]">{count[0] && count[0].total} vendas</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[730px] h-[627px] rounded-[20px] bg-white mr-[30px] mt-[30px]">
                        <div className=" bg-orange rounded-ss-[5000px] rounded-ee-full w-[206px] px-[16px] py-[7px]">
                            <h1 className="text-white text-[20px] font-bold">Semanal</h1>
                        </div>
                        <div className="px-[40px] py-[20px]">
                            <div className="flex items-center justify-between">
                                <div className="w-[95px]">
                                    <h1 className="font-bold text-[20px]">{week[0] && week[0].day}</h1>
                                    <p className="text-[12px] mb-[10px]">{week[0] && week[0].date}</p>
                                </div>
                                <h1 className="font-bold text-[20px]">R$ 0.0</h1>
                                <p className="text-[14px]"><span className="font-bold">{week[0] && week[0].total_orders}</span> vendas</p>
                                <p className="text-[14px]"><span className="font-bold">0.0</span> - 0 avaliações</p>
                            </div>
                            <div className="border-[1px] border-gray border-dashed border-collapse border-spacing-30 my-[10px]"></div>
                            <div className="flex items-center justify-between">
                                <div className="w-[95px]">
                                    <h1 className="font-bold text-[20px]">{week[1] && week[1].day}</h1>
                                    <p className="text-[12px] mb-[10px]">{week[1] && week[1].date}</p>
                                </div>
                                <h1 className="font-bold text-[20px]">R$ 0.0</h1>
                                <p className="text-[14px]"><span className="font-bold">{week[1] && week[1].total_orders}</span> vendas</p>
                                <p className="text-[14px]"><span className="font-bold">0.0</span> - 0 avaliações</p>
                            </div>
                            <div className="border-[1px] border-gray border-dashed border-collapse border-spacing-30 my-[10px]"></div>
                            <div className="flex items-center justify-between">
                                <div className="w-[95px]">
                                    <h1 className="font-bold text-[20px]">{week[2] && week[2].day}</h1>
                                    <p className="text-[12px] mb-[10px]">{week[2] && week[2].date}</p>
                                </div>
                                <h1 className="font-bold text-[20px]">R$ 0.0</h1>
                                <p className="text-[14px]"><span className="font-bold">{week[2] && week[2].total_orders}</span> vendas</p>
                                <p className="text-[14px]"><span className="font-bold">0.0</span> - 0 avaliações</p>
                            </div>
                            <div className="border-[1px] border-gray border-dashed border-collapse border-spacing-30 my-[10px]"></div>
                            <div className="flex items-center justify-between">
                                <div className="w-[95px]">
                                    <h1 className="font-bold text-[20px]">{week[3] && week[3].day}</h1>
                                    <p className="text-[12px] mb-[10px]">{week[3] && week[3].date}</p>
                                </div>
                                <h1 className="font-bold text-[20px]">R$ 0.0</h1>
                                <p className="text-[14px]"><span className="font-bold">{week[3] && week[3].total_orders}</span> vendas</p>
                                <p className="text-[14px]"><span className="font-bold">0.0</span> - 0 avaliações</p>
                            </div>
                            <div className="border-[1px] border-gray border-dashed border-collapse border-spacing-30 my-[10px]"></div>
                            <div className="flex items-center justify-between">
                                <div className="w-[95px]">
                                    <h1 className="font-bold text-[20px]">{week[4] && week[4].day}</h1>
                                    <p className="text-[12px] mb-[10px]">{week[4] && week[4].date}</p>
                                </div>
                                <h1 className="font-bold text-[20px]">R$ 0.0</h1>
                                <p className="text-[14px]"><span className="font-bold">{week[4] && week[4].total_orders}</span> vendas</p>
                                <p className="text-[14px]"><span className="font-bold">0.0</span> - 0 avaliações</p>
                            </div>
                            <div className="border-[1px] border-gray border-dashed border-collapse border-spacing-30 my-[10px]"></div>
                            <div className="flex items-center justify-between">
                                <div className="w-[95px]">
                                    <h1 className="font-bold text-[20px]">{week[5] && week[5].day}</h1>
                                    <p className="text-[12px] mb-[10px]">{week[5] && week[5].date}</p>
                                </div>
                                <h1 className="font-bold text-[20px]">R$ 0.0</h1>
                                <p className="text-[14px]"><span className="font-bold">{week[5] && week[5].total_orders}</span> vendas</p>
                                <p className="text-[14px]"><span className="font-bold">0.0</span> - 0 avaliações</p>
                            </div>
                            <div className="border-[1px] border-gray border-dashed border-collapse border-spacing-30 my-[10px]"></div>
                            <div className="flex items-center justify-between">
                                <div className="w-[95px]">
                                    <h1 className="font-bold text-[20px]">{week[6] && week[6].day}</h1>
                                    <p className="text-[12px] mb-[10px]">{week[6] && week[6].date}</p>
                                </div>
                                <h1 className="font-bold text-[20px]">R$ 23.99</h1>
                                <p className="text-[14px]"><span className="font-bold">{week[6] && week[6].total_orders}</span> vendas</p>
                                <p className="text-[14px]"><span className="font-bold">0.0</span> - 0 avaliações</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=" flex">
                        <div className="">
                            <div className="w-[350px] h-[201px] rounded-[20px] bg-orange mb-[30px]">
                                <div className=" bg-white border-[1px] border-orange border-solid rounded-ss-[4000px] rounded-ee-full w-[256px] px-[16px] py-[7px]">
                                    <h1 className="text-orange text-[20px] font-bold">Cupons ativos</h1>
                                </div>
                                <div className="px-[40px] py-[10px]">
                                    <h1 className="text-white text-[16px] font-bold">CUPOM  ESPECIAL DE VERÃO</h1>
                                    <p className="text-white text-[12px]"><span className="font-bold">30%</span> desconto em qualquer compra</p>
                                    <p className="text-white mb-[10px] text-[12px]">Até <span className="font-bold">29/12/2023</span></p>
                                    <h1 className="text-white text-[16px] font-bold">CUPOM PREMIUM</h1>
                                    <p className="text-white text-[12px]"><span className="font-bold">15%</span> desconto em compras acima de R$30</p>
                                    <p className="text-white mb-[10px] text-[12px]">Até <span className="font-bold">29/12/2023</span></p>
                                </div>
                            </div>
                            <div className="w-[350px] h-[201px] rounded-[20px] bg-white">
                                <div className=" bg-orange rounded-ss-[5000px] rounded-ee-full w-[256px] px-[16px] py-[7px]">
                                    <h1 className="text-white text-[20px] font-bold">Media de avaliações</h1>
                                </div>
                                <div className="px-[40px] py-[20px] flex justify-between">
                                    <div>
                                        <h1 className="font-bold text-[20px]">Hoje</h1>
                                        <p className="text-[12px] mb-[10px]">{count[1] && count[1].date}</p>
                                        <h1 className="text-orange font-bold text-[20px]">4.0</h1>
                                        <p className="text-[12px] text-orange mb-[10px]">3 avaliações</p>
                                    </div>
                                    <div className="border-[1px] border-orange border-dashed border-collapse border-spacing-30"></div>
                                    <div>
                                        <h1 className="font-bold text-[20px] text-end">Ontem</h1>
                                        <p className="text-[12px] mb-[10px]">{count[0] && count[0].date}</p>
                                        <h1 className="text-orange font-bold text-[20px] text-end">3.0</h1>
                                        <p className="text-[12px] text-orange mb-[10px]">2 avaliações</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="w-[350px] h-[432px] rounded-[20px] bg-white ml-[30px] mb-[30px]">
                                <div className=" bg-orange rounded-ss-[20px] justify-center flex rounded-se-[20px] w-full px-[16px] py-[7px]">
                                    <h1 className="text-white text-[20px] font-bold">Mais vendidos da semana</h1>
                                </div>
                                {products && 
                                    <div className="px-[40px] py-[10px]">
                                        <div className="flex mt-[30px] justify-center items-center bg-bg p-[10px] w-full rounded-[10px]">
                                            <div className=" mr-[30px] flex flex-col items-center justify-center">
                                                <p className="font-bold text-[25px] text-orange">1º</p>
                                                <p className="text-orange text-[12px]">8 vendidos</p>
                                            </div>
                                            <div className="w-[50px] h-[50px] relative">
                                                <Image className="rounded-full mr-[20px]" layout='fill' objectFit='cover' alt="icon" src={products[0] ? "http://127.0.0.1:8000/"+products[0].image : avatar} />
                                            </div>
                                        </div>
                                        <div className="flex mt-[30px] justify-center items-center bg-bg p-[10px] w-full rounded-[10px]">
                                        <div className=" mr-[30px] flex flex-col items-center justify-center">
                                                <p className="font-bold text-[25px] text-orange">2º</p>
                                                <p className="text-orange text-[12px]">3 vendidos</p>
                                            </div>
                                            <div className="w-[50px] h-[50px] relative">
                                                <Image className="rounded-full mr-[20px]" layout='fill' objectFit='cover' alt="icon" src={products[1] ? "http://127.0.0.1:8000/"+products[1].image : avatar} />
                                            </div>                                        </div>
                                        <div className="flex mt-[30px] justify-center items-center bg-bg p-[10px] w-full rounded-[10px]">
                                        <div className=" mr-[30px] flex flex-col items-center justify-center">
                                                <p className="font-bold text-[25px] text-orange">3º</p>
                                                <p className="text-orange text-[12px]">2 vendidos</p>
                                            </div>
                                            <div className="w-[50px] h-[50px] relative">
                                                <Image className="rounded-full mr-[20px]" layout='fill' objectFit='cover' alt="icon" src={products[2] ? "http://127.0.0.1:8000/"+products[2].image : avatar} />
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-[726px] h-[400px] rounded-[20px] bg-white mb-[30px]">
                            <div className=" bg-orange rounded-ss-[20px] justify-center flex rounded-se-[20px] w-full px-[16px] py-[7px]">
                                <h1 className="text-white text-[20px] font-bold">Principais avaliações da semana</h1>
                            </div>
                            <div className="px-[40px] flex flex-wrap justify-between py-[30px]">
                                {comments && comments.map((item, key) => (
                                    <div className="w-[310px]">
                                        <div className="flex justify-between">
                                            <div className="flex ">
                                                <Image className="rounded-full mr-[20px]" alt="icon" src={item.user.profile_picture ? item.user.profile_picture : avatar} width={43}/>
                                                <div>
                                                    <h1 className="text-[20px] font-bold">{item.user.name}</h1>
                                                    <p className="text-[12px] mt-[-5px]">{formatNoteDate(item.date)}</p>
                                                </div>
                                            </div>
                                            <h1 className="text-[20px] text-orange font-bold">{item.rating}.0</h1>
                                        </div>
                                        <p className="line-clamp-3 my-[20px] text-justify indent-[20px]">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SubLayout>
    )
}
