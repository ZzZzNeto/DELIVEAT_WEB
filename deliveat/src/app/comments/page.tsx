'use client'

import SubLayout from "../sublayout"
import TextInput from "@/components/textInput"
import Select from "@/components/select"
import avatar from '@/../public/assets/avatar.jpg'
import Image from "next/image";
import axios from "axios"
import Button from "@/components/Button"
import { useState, useContext, useEffect } from 'react';
import { MyContext } from "@/contexts"
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
    const [comments,setComments] = useState([]);
    const { data, updateData } = useContext(MyContext);
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        get_comments()
    },[data])

    const get_comments = async () => {
        if(data){
            const dataset = await axios.get(
                `http://127.0.0.1:8000/rating/list/`, {headers: { Authorization: `Bearer ${data.access_token}`}} 
            )
            setComments(dataset.data)
        }
    }

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

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

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
            <div className="bg-white w-full flex-1 px-[80px] py-[44px] justify-center items-center text-center">
                {
                comments.map((comment, index) => {
                    return (
                    <div className="flex-1">
                        <div className="mb-[50px] flex">
                            <div className="w-[180px] w-min-[200px] mr-[40px] h-fit relative flex-row justify-center items-center text-center">
                                <Image className="m-auto rounded-full" alt="profile" width={100} height={100} src={comment.user.profile_picture ? comment.user.profile_picture : avatar}/>
                                <h1 className="mt-[15px] text-[20px] font-bold">{comment.user.name}</h1>
                                <p className="mt-[-5px] text-[14px] text-[#ADB5BA]">{formatNoteDate(comment.date)}</p>
                                <div className=" w-fit absolute right-[10px] top-0 bg-orange rounded-[5px] px-[7px] py-[1px] flex justify-center"><p className=" font-bold text-white text-[20px]">{comment.rating}.0</p></div>
                            </div>
                            <div className="mt-[20px] w-[1150px]">
                                <p className="text-[20px] text-justify indent-[20px]">{comment.text}</p>
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
