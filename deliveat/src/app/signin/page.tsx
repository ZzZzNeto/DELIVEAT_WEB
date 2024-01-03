'use client'

import Link from 'next/link';
import { Icon } from '@iconify/react';
import Image from "next/image";
import logo from '../../../public/assets/logo.png'
import TextInput from "@/components/textInput";
import { useRouter } from "next/navigation";
import axios from 'axios';
import { useState, useContext } from 'react';
import { MyContext } from '@/contexts'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from "react-hook-form";

export default function Signin() {
  const router = useRouter();
  const [notfound,setNotFound] = useState(false)
  const { data, updateData } = useContext(MyContext);

  const signin = async (data? : any) => {
    try{
      console.log(data)
        const new_user = await axios.post(
        `http://127.0.0.1:8000/auth/signup/`, {
            name : data.name,
            email : data.email,
            password : data.password,
            role : "Store"
        });

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

  const schema = yup
    .object({
      name: yup.string().required("Este campo é obrigatório"),
      email: yup
        .string()
        .email("E-mail inválido")
        .required("Este campo é obrigatório"),
      password: yup
        .string()
        .required("Este campo é obrigatório")
        .min(8, "A senha deve ter no minimo 8 carateres"),
      confirmPassword: yup
        .string()
        .required("Este campo é obrigatório")
        .oneOf([yup.ref("password")], "As senhas não são iguais"),
    })
    .required();
  
  const {control, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => signin(data));

  return (
    <main className="flex flex-1 h-full bg-bg text-gray">
        <section className="w-[55vw] h-full bg-signin-bg">
        </section>
        <section className="px-[142px] py-[30px] text-center w-[45vw] h-full bg-white">
          <Image className="m-auto mb-[20px]" alt="logo" src={logo} />
          <h1 className="text-[36px] font-bold">Primeira vez aqui?</h1>
          <p className="text-[18px] mt-[-10px] mb-[50px]">Não perca tempo, expanda sua clientela</p>
          <form onSubmit={onSubmit}>
          <Controller
              name="name"
              control={control}
              render={({ field }) => <TextInput error={errors.name && true} bg="bg" field={field} text="Nome"/>}
            />
            <p className="text-red-600 h-[25px] text-[16px] mt-[-20px] mb-[7px]">
              {errors.name?.message}
            </p>
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
              render={({ field }) => <TextInput error={errors.password && true} type='password' bg="bg" field={field} text="Senha"/>}
            />
            <p className="text-red-600 h-[25px] text-[16px] mt-[-20px] mb-[7px]">
              {errors.password?.message}
            </p>
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => <TextInput type='password' error={errors.confirmPassword && true} bg="bg" field={field} text="Confirme sua senha"/>}
            />
            <p className="text-red-600 h-[25px] text-[16px] mt-[-20px] mb-[7px]">
              {errors.confirmPassword?.message}
            </p>
          <button className="bg-orange hover:bg-[#C75413] text-white text-[18px] font-bold h-[50px] w-full rounded-[10px]" type='submit'>Criar</button>
          </form>
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
