'use client'

import Link from 'next/link';
import { Icon } from '@iconify/react';
import Image from "next/image";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from "react-hook-form";
import logo from '../../public/assets/logo.png'
import TextInput from "@/components/textInput";
import { useRouter } from "next/navigation";
import { useState, useContext } from 'react';
import { MyContext } from '@/contexts'
import axios from "axios"

export default function Home() {
  const router = useRouter();
  const [notfound,setNotFound] = useState(false)
  const { data, updateData } = useContext(MyContext);

  const login = async (data? : any) => {
    try{
        const response = await axios.post(
        `http://127.0.0.1:8000/auth/token/`, {
            email : data.email,
            password : data.password
        });

        const user = await axios.get(
          `http://127.0.0.1:8000/user/me`, {headers: { Authorization: `Bearer ${response.data.access_token}` }} 
        );  
        
        localStorage.setItem('access_token',response.data.access_token)
          
        updateData({...user.data,...response.data})
        setNotFound(false)
        router.push("/orders")
    }catch{
        console.log("error")
        setNotFound(true)
    }
  }

  const schema = yup.object({
    email: yup.string().email("E-mail inválido").required("Este campo é obrigatório"),
    password: yup.string().required("Este campo é obrigatório").min(8,"A senha deve ter no minimo 8 carateres"),
  }).required();
  
  
  const {control, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => login(data));

  return (
    <main className="flex flex-1 h-full bg-bg text-gray">
        <section className="w-[55vw] h-full bg-login-bg">
        </section>
        <section className="px-[142px] py-[100px] text-center w-[45vw] h-full bg-white">
          <Image className="m-auto mb-[20px]" alt="logo" src={logo} />
          <h1 className="text-[36px] font-bold">Bem vindo!</h1>
          <p className="text-[18px] mt-[-10px] mb-[50px]">Seus clientes estão esperando</p>
          <form onSubmit={onSubmit}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => <TextInput error={errors.email && true} bg="bg" field={field} text="Email"/>}
            />
            <p className="text-red-600 h-[25px] text-[16px] mt-[-20px] mb-[7px]">
              {errors.email?.message}
            </p>
            <Controller
              name="password"
              control={control}
              render={({ field }) => <TextInput error={errors.password && true} type='password' field={field} bg="bg" {...field} text="Senha"/>}
            />
            <p className="text-red-600 h-[25px] mt-[-20px] text-[16px] mb-[7px]">
              {errors.password?.message}
            </p>
            <div className="mb-[20px] flex items-center justify-end"><a className="mt-[-20px] hover:text-[#C75413] text-orange" href="">Esqueceu a senha?</a></div>
            <button type='submit' className="bg-orange hover:bg-[#C75413] text-white text-[18px] font-bold h-[50px] w-full rounded-[10px]">Entrar</button>
          </form>
          <div className=" flex items-center my-[20px] justify-between">
            <div className="h-[1px] w-[45%] bg-gray"></div>
            <p>ou</p>
            <div className="h-[1px] w-[45%] bg-gray"></div>
          </div>
          <button className="bg-white hover:bg-bg flex justify-center items-center text-gray text-[18px] border-solid border-gray border-[1px] h-[50px] w-full rounded-[10px]"><Icon icon="devicon:google" className='mr-[20px]' width="25" height="25"/>Entrar com o google</button>
          <p className="text-[16px] mt-[10px]">Não tem uma conta? <Link href='/signin' className=" hover:text-[#C75413] text-orange">Cadastre-se</Link></p>
        </section>
    </main>
  )
}
