'use client'

import SubLayout from "../sublayout"
import TextInput from "@/components/textInput"
import Select from "@/components/select"
import avatar from '@/../public/assets/avatar.jpg'
import Image from "next/image";

export default function Comments() {
    const comments = [
        {
            comment : "Não gostei nem um pouco, a comida estava extremamente fria e sem gosto, o primeiro provavelmente por conta da demora na entrega, 2 horas é demais!!!!! Não recomendo, pior restaurante!! ",
            user : {name: "Maria Pedrosa", profile: avatar},
            date: "09/08/2030",
            answer: {
                comment : "Vá se lascar sua velha, sabe nem oque ta falando, chegou cedo sim, deixe de loucura e va lavar uma trouxa de roupa que vc ganhar mais. ",
                user : {name: "Nome da empresa", profile: avatar},
                date: "10/08/2030"
            },
            rate: 2.5
        },
        {
            comment : "Não gostei nem um pouco, a comida estava extremamente fria e sem gosto, o primeiro provavelmente por conta da demora na entrega, 2 horas é demais!!!!! Não recomendo, pior restaurante!! ",
            user : {name: "Maria Pedrosa", profile: avatar},
            date: "09/08/2030",
            rate: 2.5
        },
        {
            comment : "Não gostei nem um pouco, a comida estava extremamente fria e sem gosto, o primeiro provavelmente por conta da demora na entrega, 2 horas é demais!!!!! Não recomendo, pior restaurante!! ",
            user : {name: "Maria Pedrosa", profile: avatar},
            date: "09/08/2030",
            rate: 2.5
        }
    ]

    return (
        <SubLayout>
            <div className=" mb-[44px] flex">
                <TextInput text="Busque por palavras-chave..."/>
                <Select df="Ordenar por" options={["Melhor avaliados", "Pior avaliados", "Mais recentes", "Mais antigos"]} />
            </div>
            <div className="bg-white flex-1 px-[80px] py-[44px] justify-center items-center text-center">
                {comments.map((comment, index) => (
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
                                </div>
                            </div>
                        : null}
                    </div>
                ))}
            </div>
        </SubLayout>
    )
}
