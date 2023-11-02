'use client'

import SubLayout from "../sublayout"
import TextInput from "@/components/textInput"
import Select from "@/components/select"
import { Icon } from '@iconify/react';


export default function History() {
    const data = [
        {code : "#HFJ9S3", value : 29.50, date : "29/08/2013", user : "Pedro Silva", status : true},
        {code : "#HFJ9S3", value : 29.50, date : "29/08/2013", user : "Pedro Silva", status : false},
        {code : "#HFJ9S3", value : 29.50, date : "29/08/2013", user : "Pedro Silva", status : true},
        {code : "#HFJ9S3", value : 29.50, date : "29/08/2013", user : "Pedro Silva", status : true},
        {code : "#HFJ9S3", value : 29.50, date : "29/08/2013", user : "Pedro Silva", status : false},
        {code : "#HFJ9S3", value : 29.50, date : "29/08/2013", user : "Pedro Silva", status : true},
    ]

    return (
        <SubLayout>
            <div className=" mb-[44px] w-[1500px] justify-between flex">
                <TextInput text="Busque por palavras-chave..."/>
                <div className="flex justify-between pl-[44px] w-[900px]"> 
                    <div className="flex bg-white rounded-[10px] p-2.5 w-[235px] items-center">
                        <input type="radio" className="mx-[10px]"/>
                        <p>Cupom utilizado</p>
                    </div>
                    <Select df="Cardapio" options={["Hamburguer", "pizza", "Macarrão"]} />
                    <Select df="Ordenar por" options={["Mais recentes", "Mais antigos", "Melhor avaliados", "Pior avaliados"]} />
                </div>
            </div>
            <div className="bg-white rounded-[20px] p-[34px] h-[800px]">
                <div className="mt-[30px] ml-[44px] w-[1330px] rounded-lg border-solid border-[#DEE0E0] border-[1px]">
                        <table className="w-[1330px]">
                            <tr className="p-[10px] bg-[#F2F4F6]">
                                <th className="w-[290px] text-[16px] py-[15px] pl-[50px] text-start">Codigo do pedido</th>
                                <th className="text-[16px] py-[15px] text-start">Valor total</th>
                                <th className="w-[300px] text-[16px] pl-[70px] py-[15px] text-start" >Data de criação</th>
                                <th className="text-[16px] py-[15px] text-start">Requisitante</th>
                                <th className="text-[16px] py-[15px] text-start">Status</th>
                                <th> </th>
                            </tr>
                            {data ? data.map((item, key) => ( 
                                <tr key={key}>
                                    <td className="w-[290px] py-[10px] text-[16px] text-start pl-[50px]">{item.code}</td>
                                    <td className="text-[16px] py-[10px] text-start">R${item.value}</td>
                                    <td className="w-[300px] text-[16px] pl-[70px] py-[10px] text-start">{item.date}</td>
                                    <td className="text-[16px] py-[10px] text-start">{item.user}</td>
                                    <td className="w-[100px] text-[16px] py-[10px] text-start">{item.status ? 
                                        <div className="bg-[#49C81D] rounded-[5px] text-center py-[2px] px-[5px]"><p className="text-[14px] text-white ">ENTREGUE</p></div> :
                                        <div className=" bg-red_p rounded-[5px] text-center py-[2px] px-[5px]"><p className="text-[14px] text-white ">CANCELADO</p></div>}</td>
                                    <td className=" text-end items-center pr-[30px]">
                                        <button className="mt-[5px]"><Icon className="mr-[1px]" icon="material-symbols:delete" color="#CF2A36"  width="25" height="25"/></button>
                                        <button><Icon icon="mdi:eye" color="#FF6D1B"  width="25" height="24"/></button>
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
                    </div>
            </div>
        </SubLayout>
    )
}
