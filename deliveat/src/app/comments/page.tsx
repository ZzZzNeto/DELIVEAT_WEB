'use client'

import SubLayout from "../sublayout"
import TextInput from "@/components/textInput"
import Select from "@/components/select"
import avatar from '@/../public/assets/avatar.jpg'
import Image from "next/image";
import Button from "@/components/Button"
import { useState } from 'react';
import Modal from 'react-modal';
import OrderModal from "@/components/ModalOrderContent"

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      padding: "30px",
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement('body');

const items = [
      {item : "Hamburguer Classic", obs : " sem picles e sem cebola"},
      {item : "Adicional de batata-frita M"},
      {item : "Coca-cola zero lata"},
      {item : "Fatima de bolo de chocolate", obs : " sem cobertura"},
]

export default function Comments() {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const comments = [
        {
            comment : "Não gostei nem um pouco, a comida estava extremamente fria e sem gosto, o primeiro provavelmente por conta da demora na entrega, 2 horas é demais!!!!! Não recomendo, pior restaurante!! ",
            user : {name: "Marta laurinda", profile: "https://randomuser.me/api/portraits/women/19.jpg"},
            date: "09/08/2030",
            answer: {
                comment : "Ta bom então 👍👏",
                user : {name: "Nome da empresa", profile: avatar},
                date: "10/08/2030"
            },
            rate: 2.5
        },
        {
            comment : "Não gostei nem um pouco, a comida estava extremamente fria e sem gosto, o primeiro provavelmente por conta da demora na entrega, 2 horas é demais!!!!! Não recomendo, pior restaurante!! ",
            user : {name: "Maria Pedrosa", profile: "https://randomuser.me/api/portraits/women/84.jpg"},
            date: "09/08/2030",
            rate: 2.5
        },
        {
            comment : "Não gostei nem um pouco, a comida estava extremamente fria e sem gosto, o primeiro provavelmente por conta da demora na entrega, 2 horas é demais!!!!! Não recomendo, pior restaurante!! ",
            user : {name: "Joao Gomes", profile: "https://randomuser.me/api/portraits/men/14.jpg"},
            date: "09/08/2030",
            rate: 2.5
        }
    ]

    return (
        <SubLayout>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <OrderModal code='K23UR3' close={closeModal} items={items} user={{name:"Rodolfo Padilha"}} addres={{street: "Rua das flores", number:158, city:"Pau dos Ferros", country:"RN"}} total={50.00} cupom={50} final={25.00} method='Cartão de credito'/>
            </Modal>
            <div className=" mb-[20px] flex">
                <TextInput text="Busque por palavras-chave..."/>
                <Select df="Ordenar por" options={["Melhor avaliados", "Pior avaliados", "Mais recentes", "Mais antigos"]} />
            </div>
            <div className="bg-white flex-1 px-[80px] py-[44px] justify-center items-center text-center">
                {
                comments.map((comment, index) => {
                    const [visible, setVisible] = useState(false)

                    return (
                    <div className="flex-1">
                        <div className="mb-[50px] flex">
                            <div className="w-[280px] mr-[20px] h-fit relative flex-row justify-center items-center text-center">
                                <Image className="m-auto rounded-full" alt="profile" width={100} height={100} src={comment.user.profile}/>
                                <h1 className="mt-[15px] text-[20px] font-bold">{comment.user.name}</h1>
                                <p className="mt-[-5px] text-[14px] text-[#ADB5BA]">{comment.date}</p>
                                <div className=" w-fit absolute right-[10px] top-0 bg-orange rounded-[5px] px-[7px] py-[1px] flex justify-center"><p className=" font-bold text-white text-[20px]">{comment.rate}</p></div>
                            </div>
                            <div className="mt-[20px]">
                                <p className="text-[20px] text-justify indent-[20px]">{comment.comment}</p>
                                <div className="flex justify-end mt-[20px]">
                                    <Button onClick={openModal} text="Ver pedido" height={30} width={150} font={18} type={3}/>
                                    {comment.answer ? null : <Button onClick={() => setVisible(true)} text="Responder" height={30} width={150} icon="mdi:share" font={18} type={1}/>}
                                </div>
                            </div>
                        </div>
                        {comment.answer ? 
                            <div className="ml-[170px] flex mb-[50px] mt-[-30px]">
                                <div className="w-[160px] mr-[20px] flex-row justify-center items-center text-center">
                                    <Image className="m-auto rounded-full" alt="profile" width={70} height={70} src={comment.answer.user.profile}/>
                                    <h1 className="mt-[10px] text-[14px] font-bold">{comment.answer.user.name}</h1>
                                    <p className=" text-[10px] text-[#ADB5BA]">{comment.answer.date}</p>
                                </div>
                                <div className="w-[1100px] mt-[10px]">
                                    <p className="text-[17px] text-justify indent-[20px]">{comment.answer.comment}</p>
                                    <div className="flex justify-end mt-[20px]">
                                        <Button onClick={() => console.log("")} text="Excluir" height={30} width={100} font={18} type={2}/>
                                        <Button onClick={() => console.log("")} text="Editar" height={30} width={100} font={18} type={1}/>
                                    </div>
                                </div>
                            </div>
                        : 
                           visible && <div className="w-[1100px] ml-[200px] mt-[10px] ">
                                <textarea name="Responda" cols={40} rows={5} placeholder="Responda" className="text-gray p-[20px] w-full h-[100px] outline-none bg-bg"></textarea>
                                <div className="flex justify-end mb-[20px] mt-[20px]">
                                    <Button onClick={() => setVisible(false)} text="Cancelar" height={30} width={100} font={18} type={2}/>
                                    <Button onClick={() => console.log("")} text="Enviar" height={30} width={100} font={18} type={1}/>
                                </div>
                            </div> 
                        }
                    </div>
                )})}
            </div>
        </SubLayout>
    )
}
