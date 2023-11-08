'use client'
import Button from "@/components/Button"
import { useState } from "react"

export default function CommentInput(){
    const [visible, setVisible] = useState(false)
    return (
        <div hidden={visible} className="w-[1100px] ml-[200px] mt-[10px] ">
            <textarea name="Responda" cols={40} rows={5} placeholder="Responda" className="text-gray p-[20px] w-full h-[100px] bg-bg"></textarea>
            <div className="flex justify-end mb-[20px] mt-[20px]">
                <Button onClick={() => console.log("")} text="Cancelar" height={30} width={100} font={18} type={2}/>
                <Button onClick={() => console.log("")} text="Enviar" height={30} width={100} font={18} type={1}/>
            </div>
        </div>
    )
  }

  
  