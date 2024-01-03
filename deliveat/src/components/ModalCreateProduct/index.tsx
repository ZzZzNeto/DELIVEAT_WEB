'use client'
import { Icon } from '@iconify/react';
import avatar from '@/../public/assets/avatar.jpg'
import base_image from '@/../public/assets/default.jpg'
import Image from "next/image";
import Button from '../Button';
import { useState, useContext, useEffect } from 'react';
import Select from 'react-select';
import { MyContext } from '@/contexts';
import { useRouter } from 'next/navigation';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';
import TextInput from '../textInput';

interface category {
    name : string
}

interface product_bonus {
    name : string
}

interface data {
    id ?: string
    image ?: string
    close ?: Function
    reload ?: Function;
    price ?: number
    unique_price ?: boolean
    name ?: string
    description ?: string
    categories ?: Array<category>
    bonuses ?: Array<product_bonus>
    is_bonus ?: boolean
}

export default function ProductModal({id, close, reload} : data){
    const [product, setProduct] = useState()
    const { data, updateData } = useContext(MyContext);
    const [category, setCategories] = useState([])
    const [imagePreview, setImagePreview] = useState(null);
    const [bonus, setBonus] = useState([])
    const router = useRouter()
    const [is_bonus, setIsBonus] = useState(false)

    useEffect(() => {
        get_product()
        get_categories()
        get_bonus()
    },[data])

    const get_image = () => {
        if(data){
            return `http://127.0.0.1:8000/${product.image}`
        }
    }

    const get_product = async () => {
        if(id){
            const dataset = await axios.get(
                `http://127.0.0.1:8000/product/get/${id}`, {headers: { Authorization: `Bearer ${data.access_token}`}} 
            )
            setProduct(dataset.data)
            setValue("name", dataset.data.name)
            setValue("description", dataset.data.description)
            setValue("cost", dataset.data.cost)
            setValue("name", dataset.data.name)
        }
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setValue("image", file);
    
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

    const get_categories = async () => {
        const dataset = await axios.get(
            `http://127.0.0.1:8000/category/list`, {headers: { Authorization: `Bearer ${data.access_token}`}} 
        )
        setCategories(dataset.data)
    }

    const get_bonus = async () => {
        const dataset = await axios.get(
            `http://127.0.0.1:8000/product_bonus/list`, {headers: { Authorization: `Bearer ${data.access_token}`}} 
        )
        setBonus(dataset.data)
    }

    const create_product = async (new_product) => {
        new_product.categories = new_product.categories.join(', ')
        new_product.products_bonus = new_product.products_bonus.join(', ')
        console.log(new_product)
        await axios.post(
            `http://127.0.0.1:8000/product/add/`,
            new_product,
            { headers: { Authorization: `Bearer ${data.access_token}`, 'Content-Type' : 'multipart/form-data' }}
        );
        reload()
        close()
    }

    const update_product = async (new_product) => {
        await axios.post(
            `http://127.0.0.1:8000/product/update/${id}`,
            new_product,
            { headers: { Authorization: `Bearer ${data.access_token}`, 'Content-Type' : 'multipart/form-data' }}
        );
    }

    const schema = yup.object({
        name: yup.string().required("Este campo é obrigatório"),
        description: yup.string().required("Este campo é obrigatório"),
        cost: yup.number().required("Este campo é obrigatório"),
        categories: yup.array().transform((originalValue) => {
            return originalValue.map((category) => category.value);
          }).required("Este campo é obrigatório"),
          products_bonus: yup.array().transform((originalValue) => {
            return originalValue.map((bonus) => bonus.value);
          }).nullable(),
        image: yup
        .mixed()
        .required("Este campo é obrigatório")
        .test("fileSize", "A imagem deve ter no máximo 2MB", (value) => {
            if (!value || !value[0]) return true;
            return value[0].size <= 2 * 1024 * 1024; 
        })
        .test("fileType", "Formato de arquivo inválido", (value) => {
            if (!value || !value[0] || !value[0].type) return true; 
            const supportedFormats = ["image/jpeg", "image/png"];
            return supportedFormats.includes(value[0].type);
          })
    });


    const { control, handleSubmit,setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = handleSubmit(
        (data) => {if(id){
            update_product(data)
        }else{
            create_product(data)
        }}
    )

    return (
        <>
            <form onSubmit={onSubmit} className=' flex justify-between items-center'>
                <div className='w-[400px]'>
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
                    <div className='w-[400px] h-[200px] relative'>
                        <Image src={imagePreview || (product ? get_image() : base_image)} alt="opa" layout='fill' objectFit='cover' className='rounded-[10px]'/>
                    </div>
                    <h1 className='font-bold mt-[20px] text-[22px]'>Preços:</h1>
                    <div className="flex h-[50px] w-[235px] items-center">
                        <input type="checkbox" className="mr-[10px]"/>
                        <p>Preço unico</p>
                    </div>
                    <Controller
                    name="cost"
                    control={control}
                    render={({ field }) => <TextInput error={errors.cost && true} bg="bg" type='number' field={field} text="Preço"/>}
                    />
                    <p className="text-red-600 h-[25px] text-[16px] mt-[-20px] mb-[7px]">
                    {errors.cost?.message}
                    </p>
                    <div className="flex h-[50px] mt-[-10px] w-[235px] items-center">
                        <input type="checkbox" className="mr-[10px]"/>
                        <p>Multiplos preços</p>
                    </div>
                    <div className=' flex items-center justify-between'>
                        <TextInput bg="bg" text="Tipo"/>
                        <div className='mx-[10px]'><TextInput type="number" bg="bg" text="Preço"/></div>
                        <div className='mb-[20px]'><Button onClick={() => console.log()} type={2} icon="material-symbols:delete" font={30} width={60} height={50}/></div>
                    </div>
                    <div className=' flex items-center justify-between'>
                        <TextInput  bg="bg" text="Tipo"/>
                        <div className='mx-[10px]'><TextInput type="number" bg="bg" text="Preço"/></div>
                        <div className='mb-[20px]'><Button onClick={() => console.log()} type={1} icon="ic:baseline-plus" font={30} width={60} height={50}/></div>
                    </div>
                </div>
                <div className='h-full w-[500px] ml-[30px]'>
                    <h1 className='font-bold mb-[20px] text-[22px]'>Criando produto:</h1>
                    <Controller
                    name="name"
                    control={control}
                    render={({ field }) => <TextInput error={errors.name && true} bg="bg" field={field} text="Nome do produto"/>}
                    />
                    <p className="text-red-600 h-[25px] text-[16px] mt-[-20px] mb-[7px]">
                    {errors.name?.message}
                    </p>
                    <Controller
                    name="description"
                    control={control}
                    render={({ field }) => <textarea {...field} className={` bg-bg rounded-[10px] p-[20px] w-full ${errors.description && "border-red_p border-solid border-[1px]"}`} rows={5} placeholder='ingredientes'></textarea>}
                    />
                    <p className="text-red-600 h-[25px] text-[16px] mt-[-5px] mb-[7px]">
                    {errors.description?.message}
                    </p>
                    <Controller
                        name="categories"
                        control={control}
                        render={({ field }) => (
                            <>
                            <Select
                                {...field}
                                isMulti
                                options={category.map(category => ({
                                value: category.id,
                                label: category.name,
                                }))}
                            />
                            {errors.categories && (
                                <p className="text-red-600 h-[25px] text-[16px] mt-[-20px] mb-[7px]">
                                {errors.categories?.message}
                                </p>
                            )}
                            </>
                        )}
                        />
                    <h1 className='font-bold mb-[20px] my-[20px] text-[22px]'>Acompanhamentos</h1>
                    <div className="flex h-[50px] mt-[-20px] w-full items-center">
                        <input type="checkbox" onChange={() => setIsBonus(!is_bonus)} className="mr-[10px]"/>
                        <p>Esse produto pode ser um acompanhamento de outro</p>
                    </div>
                    <Controller
                        name="products_bonus"
                        control={control}
                        render={({ field }) => (
                            <>
                            <Select
                                {...field}
                                isMulti
                                options={bonus.map(category => ({
                                value: category.id,
                                label: category.name,
                                }))}
                            />
                            {errors.products_bonus && (
                                <p className="text-red-600 h-[25px] text-[16px] mt-[-20px] mb-[7px]">
                                {errors.products_bonus?.message}
                                </p>
                            )}
                            </>
                        )}
                        />
                    {id ? 
                        (
                            <div className=' mt-[10px] flex justify-end items-center'>
                                <Button type={2} height={25} width={100} text='Cancelar' font={16} onClick={close}/>
                                <button className='bg-orange transition text-white text-[16px] items-center justify-center flex px-[5px] ml-[10px] py-[2px] rounded-[5.9px] hover:bg-[#a36440]' onClick={() => handleSubmit}>Salvar</button>
                            </div>
                        ):(
                            <div className=' mt-[10px] flex justify-end items-center'>
                                <Button type={2} height={25} width={100} text='Cancelar' font={16} onClick={close}/>
                                <button className='bg-orange transition text-white text-[16px] items-center justify-center flex px-[5px] ml-[10px] py-[2px] rounded-[5.9px] hover:bg-[#a36440]' onClick={() => handleSubmit}>Criar</button>
                            </div>
                        )
                    }
                </div>
            </form>
        </>
    )
  }

  
  