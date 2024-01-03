'use client'

interface textInput {
    text ?: string
    type ?: string
    bg ?: string
    error ?: boolean
    field ?: any
}

export default function TextInput({text, type="text", field, bg, error = false} : textInput){
    return (
        <input type={type} {...field} className={`h-[50px] mb-[20px] w-full ${bg ? `bg-${bg}` : ""} p-[19px] text-[15px] rounded-[10px] outline-none ${error ? "border-red_p border-solid border-[1px]" : ""}`} placeholder={text} />
    )
  }

  
  