'use client'

import Link from 'next/link';
import { Icon } from '@iconify/react';
import Image from "next/image";
import logo from '../../../public/assets/logo.png'
import TextInput from "@/components/textInput";
import { useRouter } from "next/navigation";

export default function Signin() {
  const router = useRouter();

  const signin = () => {
    router.push("/orders")
  }
  return (
    <main className="flex flex-1 h-full bg-bg text-gray">
        <section className="w-[55vw] h-full bg-signin-bg">
        </section>
        <section className="px-[142px] py-[30px] text-center w-[45vw] h-full bg-white">
          <Image className="m-auto mb-[20px]" alt="logo" src={logo} />
          <h1 className="text-[36px] font-bold">Primeira vez aqui?</h1>
          <p className="text-[18px] mt-[-10px] mb-[50px]">Não perca tempo, expanda sua clientela</p>
          <TextInput bg="bg" text="Nome"/>
          <TextInput bg="bg" text="Email"/>
          <TextInput bg="bg" text="Senha"/>
          <TextInput bg="bg" text="Confirme sua senha"/>
          <button className="bg-orange hover:bg-[#C75413] text-white text-[18px] font-bold h-[50px] w-full rounded-[10px]" onClick={() => signin()}>Criar</button>
          <div className=" flex items-center my-[20px] justify-between">
            <div className="h-[1px] w-[45%] bg-gray"></div>
            <p>ou</p>
            <div className="h-[1px] w-[45%] bg-gray"></div>
          </div>
          <button className="bg-white hover:bg-bg flex justify-center items-center text-gray text-[18px] border-solid border-gray border-[1px] h-[50px] w-full rounded-[10px]"><Icon icon="devicon:google" className='mr-[20px]' width="25" height="25"/>Entrar com o google</button>
          <p className="text-[16px] mt-[10px]">Ja possui uma conta? <Link href='/' className=" hover:text-[#C75413] text-orange">Entrar</Link></p>
        </section>
    </main>
  )
}
