'use client'

import SideBar from "@/components/SideBar";

export default function SubLayout({ children } : any){
    return (
        <>  
            <main className="flex h-full bg-bg text-gray">
                <section className=" w-[304px] h-full">
                    <SideBar/>
                </section>
                <section className="p-[44px] h-full w-[1550px]">
                    {children}
                </section>
            </main>
        </>
    )
  };