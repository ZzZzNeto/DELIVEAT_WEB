'use client'

interface textInput {
    text : string
}

export default function TextInput({text} : textInput){
    return (
        <input type="text"  className="h-[50px] w-full p-[19px] text-[15px] rounded-[10px] outline-none" placeholder={text} />
    )
  }

  
  