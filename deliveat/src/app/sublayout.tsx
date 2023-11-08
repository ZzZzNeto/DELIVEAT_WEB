'use client'

import SideBar from "@/components/SideBar";

export default function SubLayout({ children } : any){
    return (
        <>  
            <main className="flex flex-1 h-fit min-h-full bg-bg text-gray">
                <section className=" w-[304px] ">
                    <SideBar/>
                </section>
                <section className="p-[44px] w-fit max-w-[1570px]">
                    {children}
                </section>
            </main>
        </>
    )
  };