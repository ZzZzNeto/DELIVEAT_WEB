'use client'

import { createContext, useState ,ReactNode } from 'react';

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

  const updateData = (newData : string) => {
    setData(newData);
  };

  return (
    <MyContext.Provider value={{ data, updateData }}>
      {children}
    </MyContext.Provider>
  );
}
