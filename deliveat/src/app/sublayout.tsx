'use client'

import SideBar from "@/components/SideBar";

export default function SubLayout({ children } : any){
    return (
        <>  
            <main className="flex flex-1 bg-bg text-gray">
                <section className=" w-[304px] ">
                    <SideBar/>
                </section>
                <section className="p-[44px] w-[1550px]">
                    {children}
                </section>
            </main>
        </>
    )
  };