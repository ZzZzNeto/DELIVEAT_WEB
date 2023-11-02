'use client'

import SubLayout from "../sublayout"
import TextInput from "@/components/textInput";
import Select from "@/components/select";
import CardOrder from "@/components/CardOrder";
import { Icon } from '@iconify/react';

export default function Orders() {

    return (
        <SubLayout>
            <div className=" mb-[44px] flex">
                <TextInput text="Busque por palavras-chave..."/>
                <Select df="Cardapio" options={["Hamburguer", "pizza", "Macarrão"]} />
            </div>
            <div className="h-full flex justify-between">
                <div className="p-[19px] mr-[32px] bg-red_p rounded-[10px] w-[270px] h-full">
                    <div className="flex justify-between items-center">
                        <h1 className="text-orange font-bold text-[22px] ">Pendentes</h1>
                        <Icon icon="iconamoon:options" color="#FF6D1B"  width="30" height="27"/>
                    </div>
                    <div className="py-[25px]">
                        <CardOrder name="hamburguer" date="08 de Dez, 2023" user="Pedro Fagundes" address="Rua Isidro Queiroga, n°158" price={23.79}/>
                    </div>
                </div>
                <div className="p-[19px] mr-[32px] bg-red_p rounded-[10px] w-[270px] h-full">
                    <div className="flex justify-between items-center">
                        <h1 className="text-orange font-bold text-[22px] ">Aceitos</h1>
                        <Icon icon="iconamoon:options" color="#FF6D1B"  width="30" height="27"/>
                    </div>
                </div>
                <div className="p-[19px] mr-[32px] bg-white rounded-[10px] w-[270px] h-full">
                    <div className="flex justify-between items-center">
                        <h1 className="text-orange font-bold text-[22px] ">Prontos</h1>
                        <Icon icon="iconamoon:options" color="#FF6D1B"  width="30" height="27"/>
                    </div>
                </div>
                <div className="p-[19px] mr-[32px] bg-white rounded-[10px] w-[270px] h-full">
                    <div className="flex justify-between items-center">
                        <h1 className="text-orange font-bold text-[22px] ">Enviados</h1>
                        <Icon icon="iconamoon:options" color="#FF6D1B"  width="30" height="27"/>
                    </div>
                </div>
                <div className="p-[19px] bg-white rounded-[10px] w-[270px] h-full">
                    <div className="flex justify-between items-center">
                        <h1 className="text-blue font-bold text-[22px] ">Concluidos</h1>
                        <Icon icon="iconamoon:options" color="#157AFE"  width="30" height="27"/>
                    </div>
                </div>
            </div>
        </SubLayout>
    )
}
