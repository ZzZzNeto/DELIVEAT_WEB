'use client'

interface textInput {
    text : string
    bg ?: string
}

export default function TextInput({text, bg} : textInput){
    return (
        <input type="text" className={`h-[50px] mb-[20px] w-full ${bg ? `bg-${bg}` : ""} p-[19px] text-[15px] rounded-[10px] outline-none`} placeholder={text} />
    )
  }

  
  