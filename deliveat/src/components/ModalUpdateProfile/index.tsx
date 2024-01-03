'use client'
import { Icon } from '@iconify/react';
import avatar from '@/../public/assets/avatar.jpg'
import Image from "next/image";
import Button from '../Button';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from "react-hook-form";
import { MyContext } from '@/contexts';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';

export default function ProfileModal(id : number){
    const { data, updateData } = useContext(MyContext);
    const [imagePreview, setImagePreview] = useState(null);
    const [user, setUser] = useState()

    const get_image = () => {
        if(data){
            return `http://127.0.0.1:8000/${user.profile_picture}`
        }
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setValue("profile_picture", file);
    
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        if (file) {
          reader.readAsDataURL(file);
        } else {
          setImagePreview(null);
        }
      };

    useEffect(() => {
        get_user()
    },[data])

    const get_user = async () => {
        if(data){
            const dataset = await axios.get(
                `http://127.0.0.1:8000/user/get/${id}`, {headers: { Authorization: `Bearer ${data.access_token}`}} 
            )
            setUser(dataset.data)
        }
    }

    const update_user = async (new_user) => {
        await axios.post(
            `http://127.0.0.1:8000/user/update/${id}`,
            new_user,
            { headers: { Authorization: `Bearer ${data.access_token}`, 'Content-Type' : 'multipart/form-data' }}
        );
    }

    const schema = yup.object({
        name: yup.string().required("Este campo é obrigatório"),
        
    });


    const { control, handleSubmit,setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = handleSubmit(
        (data) => update_user(data)
    )

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                />
                <label htmlFor="image" className='cursor-pointer bg-orange text-white text-[16px] w-fit p-[5px] items-center justify-center flex px-[5px] ml-[10px] py-[2px] rounded-full absolute z-10 top-9 hover:bg-[#a36440]'>
                    <Icon icon="ic:round-edit" color="white" width={20} height={20}/>
                </label>
                <div className='w-[300px] h-[300px] relative'>
                    <Image src={imagePreview || (user ? get_image() : avatar)} alt="opa" layout='fill' objectFit='cover' className='rounded-full'/>
                </div>
            </div>
            <div>

            </div>
        </form>
    )
  }

  
  