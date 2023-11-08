'use client'

interface options {
    options : Array<string>
    df: string
}

export default function Select({options, df} : options){
    return (
        <select id="countries" className="bg-gray-50 outline-none text-[15px] text-gray rounded-lg focus:ring-blue-500 h-[50px] focus:border-blue-500 block w-[365px] ml-[30px] p-2.5 ">
            <option selected>{df}</option>
            {options.map((option, index) => (
                <option key={index} value={index}>{option}</option>
            ))}
        </select>
    )
  }

  
  