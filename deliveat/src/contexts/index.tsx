'use client'

import { createContext, useState ,ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import axios from "axios"

interface MyContextData {
  data: string;
  updateData: (newData: string) => void;
}

interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContext = createContext<MyContextData>({} as MyContextData);

export function MyContextProvider({ children }: MyContextProviderProps) {
  const [data, setData] = useState('');
  const path = usePathname()
  const router = useRouter()

  const updateData = (newData : string) => {
    setData(newData);
  };

  useEffect(() => {
    let access_token = localStorage.getItem('access_token')

    if(access_token){
      att(access_token)
    }else{
      if(path !== "/" && path !== "/signin"){
        router.push('/')
      }
    }
  },[])

  const att = async (access_token: string) => {
    const user = await axios.get(
      `http://127.0.0.1:8000/user/me`, {headers: { Authorization: `Bearer ${access_token}` }} 
    );
    updateData({...user.data,'access_token' : access_token})
  }

  return (
    <MyContext.Provider value={{ data, updateData }}>
      {children}
    </MyContext.Provider>
  );
}
