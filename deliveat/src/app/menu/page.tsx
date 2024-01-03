'use client'

import SubLayout from "../sublayout"
import avatar from '@/../public/assets/avatar.jpg'
import Image from "next/image";
import Button from "@/components/Button";
import { MyContext } from '@/contexts'
import { useRouter } from "next/navigation";
import { Icon } from '@iconify/react';
import { useState,useContext, useEffect } from "react";
import axios from "axios";
import Modal from 'react-modal';
import ProductModal from '../../components/ModalCreateProduct';

export default function Menu() {
    const [select, setSelected] = useState(0)
    const [reload, setReload] = useState(false)
    const { data, updateData } = useContext(MyContext);
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [detailId, setId] = useState("")
    const router = useRouter()
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modal2IsOpen, set2IsOpen] = useState(false);

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

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function refresh() {
        router.refresh()
        setReload(!reload)
    }

    function openModal2(id : string) {
        set2IsOpen(true);
        setId(id)
    }

    function closeModal2() {
        set2IsOpen(false);
    }

    useEffect(() => {
        get_categories();
        get_products();
    }, [data, reload]);

    const get_image = () => {
        if(data){
            return `http://127.0.0.1:8000/${data.profile_picture}`
        }
    }

    const delete_product = async (id) => {
        await axios.delete(
            `http://127.0.0.1:8000/product/delete/${id}`, {headers: { Authorization: `Bearer ${data.access_token}`}} 
        )
        setReload(!reload)
    }

    const get_categories = async () => {
        if(data){
            const new_categories = await axios.get(
                `http://127.0.0.1:8000/category/list`, {headers: { Authorization: `Bearer ${data.access_token}` }} 
            ); 
            setCategories(new_categories.data)
        }
    }

    const get_products = async () => {
        if(data){
            const new_products = await axios.get(
                `http://127.0.0.1:8000/product/list`, {headers: { Authorization: `Bearer ${data.access_token}` }} 
            ); 
            setProducts(new_products.data)
        }
    }

    return (
        <SubLayout>
            <div className="rounded-[20px] h-full w-[1450px]">
                <div className="bg-gray rounded-ss-[20px] rounded-se-[20px] h-[168px] w-full"></div>
                <div className="bg-white rounded-es-[20px] rounded-ee-[20px] h-[710px] p-[30px] w-[1450px]">
                    <Image src={data.profile_picture ? get_image() : avatar} alt="opa" width={250} height={250} className=" absolute rounded-full top-[128px] left-[421px]" />
                    <div className=" mb-[44px] flex pl-[330px]">
                        <div className="mr-[75px]">
                            <h1 className="text-[36px] font-bold">{data.name}</h1>
                            <p className="mt-[-10px] text-[20px]">Lanchonete</p>
                        </div>
                        <div className="mr-[30px]">
                            <p className="text-[18px] text-[#939393] mt-[20px]">Aberto das 13:00h até  23:00h | SEG - SEX</p>
                        </div>
                        <div className="">
                            <div className="mt-[20px] h-fit flex items-center">
                                <div className="bg-orange px-[8px] py-[1px] h-[35px] flex items-center rounded-[5px] mr-[10px]">
                                    <p className="text-white text-[20px] font-bold">4.0</p>
                                </div>
                                <p className="text-[16px]">4 avaliações</p>
                            </div>
                            <div className="mt-[6px] h-fit flex items-center">
                                <div className="bg-blue px-[8px] py-[1px] h-[35px] flex items-center rounded-[5px] mr-[10px]">
                                    <p className="text-white text-[20px] font-bold">6</p>
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
                            <Modal
                                isOpen={modal2IsOpen}
                                onRequestClose={closeModal2}
                                style={customStyles}
                                contentLabel="Example Modal"
                            >
                                <ProductModal close={closeModal2} id={detailId}/>
                            </Modal>
                            {products ? products.map((item, key) => ( 
                                <tr key={key}>
                                    <td className="w-[390px] py-[10px] text-[16px] text-start pl-[50px]">{item.name}</td>
                                    <td className="text-[16px] py-[10px] text-start">R${item.cost}</td>
                                    <td className="w-[500px] text-[16px] pl-[70px] py-[10px] text-start">{item.product_bonus.map((e, i) => (i === 0 ? e.name : `, ${e.name}`)).join('')}</td>
                                    <td className="text-[16px] py-[10px] text-start">{item.categories.map((e, i) => (i === 0 ? e.name : `, ${e.name}`)).join('')}</td>
                                    <td className=" text-end items-center pr-[30px]">
                                        <button onClick={() => delete_product(item.id)} className="mt-[5px]"><Icon className="mr-[1px]" icon="material-symbols:delete" color="#CF2A36"  width="25" height="25"/></button>
                                        <button onClick={() => openModal2(item.id)}><Icon icon="ic:round-edit" color="#FF6D1B"  width="25" height="24"/></button>
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
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                style={customStyles}
                                contentLabel="Example Modal"
                            >
                                <ProductModal close={closeModal} reload={refresh}/>
                            </Modal>
                            <Button onClick={openModal} type={1} height={30} width={80} text="Novo" font={16} icon="ic:baseline-plus"/>
                        </div>
                    </div>
                </div>
            </div>
        </SubLayout>
    )
}
