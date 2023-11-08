'use client'

import SubLayout from "../sublayout"
import Image from "next/image";

import avatar from "../../../public/assets/avatar.jpg"

export default function Analysys() {

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
                                    <p className="text-[12px] mb-[10px]">31/10/2023</p>
                                    <h1 className="text-orange font-bold text-[20px]">R$ 394.90</h1>
                                </div>
                                <div className="border-[1px] border-orange border-dashed border-collapse border-spacing-30"></div>
                                <div>
                                    <h1 className="font-bold text-[20px] text-end">Ontem</h1>
                                    <p className="text-[12px] mb-[10px] text-end">30/10/2023</p>
                                    <h1 className="text-orange font-bold text-[20px] text-end">R$ 304.90</h1>
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
                                    <p className="text-[12px] mb-[10px]">31/10/2023</p>
                                    <h1 className="text-orange font-bold text-[20px]">34 vendas</h1>
                                </div>
                                <div className="border-[1px] border-orange border-dashed border-collapse border-spacing-30"></div>
                                <div>
                                    <h1 className="font-bold text-[20px] text-end">Ontem</h1>
                                    <p className="text-[12px] mb-[10px] text-end">30/10/2023</p>
                                    <h1 className="text-orange font-bold text-[20px] text-end">45 vendas</h1>
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
                                    <h1 className="font-bold text-[20px]">Domingo</h1>
                                    <p className="text-[12px] mb-[10px]">29/10/2023</p>
                                </div>
                                <h1 className="font-bold text-[20px]">R$ 394.90</h1>
                                <p className="text-[14px]"><span className="font-bold">29</span> vendas</p>
                                <p className="text-[14px]"><span className="font-bold">4.6</span> - 78 avaliações</p>
                            </div>
                            <div className="border-[1px] border-gray border-dashed border-collapse border-spacing-30 my-[10px]"></div>
                            <div className="flex items-center justify-between">
                                <div className="w-[95px]">
                                    <h1 className="font-bold text-[20px]">Segunda</h1>
                                    <p className="text-[12px] mb-[10px]">30/10/2023</p>
                                </div>
                                <h1 className="font-bold text-[20px]">R$ 394.90</h1>
                                <p className="text-[14px]"><span className="font-bold">29</span> vendas</p>
                                <p className="text-[14px]"><span className="font-bold">4.6</span> - 78 avaliações</p>
                            </div>
                            <div className="border-[1px] border-gray border-dashed border-collapse border-spacing-30 my-[10px]"></div>
                            <div className="flex items-center justify-between">
                                <div className="w-[95px]">
                                    <h1 className="font-bold text-[20px]">Terça</h1>
                                    <p className="text-[12px] mb-[10px]">31/10/2023</p>
                                </div>
                                <h1 className="font-bold text-[20px]">R$ 394.90</h1>
                                <p className="text-[14px]"><span className="font-bold">29</span> vendas</p>
                                <p className="text-[14px]"><span className="font-bold">4.6</span> - 78 avaliações</p>
                            </div>
                            <div className="border-[1px] border-gray border-dashed border-collapse border-spacing-30 my-[10px]"></div>
                            <div className="flex items-center justify-between">
                                <div className="w-[95px]">
                                    <h1 className="font-bold text-[20px]">Quarta</h1>
                                    <p className="text-[12px] mb-[10px]">01/11/2023</p>
                                </div>
                                <h1 className="font-bold text-[20px]">R$ 394.90</h1>
                                <p className="text-[14px]"><span className="font-bold">29</span> vendas</p>
                                <p className="text-[14px]"><span className="font-bold">4.6</span> - 78 avaliações</p>
                            </div>
                            <div className="border-[1px] border-gray border-dashed border-collapse border-spacing-30 my-[10px]"></div>
                            <div className="flex items-center justify-between">
                                <div className="w-[95px]">
                                    <h1 className="font-bold text-[20px]">Quinta</h1>
                                    <p className="text-[12px] mb-[10px]">02/11/2023</p>
                                </div>
                                <h1 className="font-bold text-[20px]">R$ 394.90</h1>
                                <p className="text-[14px]"><span className="font-bold">29</span> vendas</p>
                                <p className="text-[14px]"><span className="font-bold">4.6</span> - 78 avaliações</p>
                            </div>
                            <div className="border-[1px] border-gray border-dashed border-collapse border-spacing-30 my-[10px]"></div>
                            <div className="flex items-center justify-between">
                                <div className="w-[95px]">
                                    <h1 className="font-bold text-[20px]">Sexta</h1>
                                    <p className="text-[12px] mb-[10px]">03/11/2023</p>
                                </div>
                                <h1 className="font-bold text-[20px]">R$ 394.90</h1>
                                <p className="text-[14px]"><span className="font-bold">29</span> vendas</p>
                                <p className="text-[14px]"><span className="font-bold">4.6</span> - 78 avaliações</p>
                            </div>
                            <div className="border-[1px] border-gray border-dashed border-collapse border-spacing-30 my-[10px]"></div>
                            <div className="flex items-center justify-between">
                                <div className="w-[95px]">
                                    <h1 className="font-bold text-[20px]">Sabado</h1>
                                    <p className="text-[12px] mb-[10px]">04/11/2023</p>
                                </div>
                                <p className="text-[20px] font-bold mr-[230px]">Sem dados</p>
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
                                        <p className="text-[12px] mb-[10px]">31/10/2023</p>
                                        <h1 className="text-orange font-bold text-[20px]">4.6</h1>
                                        <p className="text-[12px] text-orange mb-[10px]">30 avaliações</p>
                                    </div>
                                    <div className="border-[1px] border-orange border-dashed border-collapse border-spacing-30"></div>
                                    <div>
                                        <h1 className="font-bold text-[20px] text-end">Ontem</h1>
                                        <p className="text-[12px] mb-[10px] text-end">30/10/2023</p>
                                        <h1 className="text-orange font-bold text-[20px] text-end">4.7</h1>
                                        <p className="text-[12px] text-orange mb-[10px]">45 avaliações</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="w-[350px] h-[432px] rounded-[20px] bg-white ml-[30px] mb-[30px]">
                                <div className=" bg-orange rounded-ss-[20px] justify-center flex rounded-se-[20px] w-full px-[16px] py-[7px]">
                                    <h1 className="text-white text-[20px] font-bold">Mais vendidos da semana</h1>
                                </div>
                                <div className="px-[40px] py-[10px]">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-[726px] h-[400px] rounded-[20px] bg-white mb-[30px]">
                            <div className=" bg-orange rounded-ss-[20px] justify-center flex rounded-se-[20px] w-full px-[16px] py-[7px]">
                                <h1 className="text-white text-[20px] font-bold">Principais avaliações da semana</h1>
                            </div>
                            <div className="px-[40px] flex flex-wrap justify-between py-[30px]">
                                <div className="w-[310px]">
                                    <div className="flex justify-between">
                                        <div className="flex ">
                                            <Image className="rounded-full mr-[20px]" alt="icon" src={avatar} width={43}/>
                                            <div>
                                                <h1 className="text-[20px] font-bold">Pedro fagundes</h1>
                                                <p className="text-[12px] mt-[-5px]">12 pedidos</p>
                                            </div>
                                        </div>
                                        <h1 className="text-[20px] text-orange font-bold">2.9</h1>
                                    </div>
                                    <p className="my-[20px] text-justify indent-[20px]">
                                        Gostei do sabor da carne e estava bem no ponto, entrega rapida e molho saboroso, perfeito.
                                    </p>
                                </div>
                                <div className="w-[310px]">
                                    <div className="flex justify-between">
                                        <div className="flex ">
                                            <Image className="rounded-full mr-[20px]" alt="icon" src={avatar} width={43}/>
                                            <div>
                                                <h1 className="text-[20px] font-bold">Pedro fagundes</h1>
                                                <p className="text-[12px] mt-[-5px]">12 pedidos</p>
                                            </div>
                                        </div>
                                        <h1 className="text-[20px] text-orange font-bold">2.9</h1>
                                    </div>
                                    <p className="my-[20px] text-justify indent-[20px]">
                                        Gostei do sabor da carne e estava bem no ponto, entrega rapida e molho saboroso, perfeito.
                                    </p>
                                </div>
                                <div className="w-[310px]">
                                    <div className="flex justify-between">
                                        <div className="flex ">
                                            <Image className="rounded-full mr-[20px]" alt="icon" src={avatar} width={43}/>
                                            <div>
                                                <h1 className="text-[20px] font-bold">Pedro fagundes</h1>
                                                <p className="text-[12px] mt-[-5px]">12 pedidos</p>
                                            </div>
                                        </div>
                                        <h1 className="text-[20px] text-orange font-bold">2.9</h1>
                                    </div>
                                    <p className="my-[20px] text-justify indent-[20px]">
                                        Gostei do sabor da carne e estava bem no ponto, entrega rapida e molho saboroso, perfeito.
                                    </p>
                                </div>
                                <div className="w-[310px]">
                                    <div className="flex justify-between">
                                        <div className="flex ">
                                            <Image className="rounded-full mr-[20px]" alt="icon" src={avatar} width={43}/>
                                            <div>
                                                <h1 className="text-[20px] font-bold">Pedro fagundes</h1>
                                                <p className="text-[12px] mt-[-5px]">12 pedidos</p>
                                            </div>
                                        </div>
                                        <h1 className="text-[20px] text-orange font-bold">2.9</h1>
                                    </div>
                                    <p className="my-[20px] text-justify indent-[20px]">
                                        Gostei do sabor da carne e estava bem no ponto, entrega rapida e molho saboroso, perfeito.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SubLayout>
    )
}
