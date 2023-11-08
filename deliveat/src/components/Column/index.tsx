'use client'
import { Icon } from '@iconify/react';
import { Droppable } from 'react-beautiful-dnd';
import CardOrder from '../CardOrder';

interface data {
    name : string
    tasks : Array<{id : number, name: string, date: string, user:string,address:string, price:number}>
    color : string
    id : number
}

export default function Column({id,name, tasks, color} : data){
    return (
        <div className="p-[19px] mr-[32px] bg-white rounded-[10px] h-[full] w-[270px] ">
            <div className="flex justify-between items-center">
                <h1 style={{color:color}} className={`font-bold text-[22px] `}>{name}</h1>
                <Icon icon="iconamoon:options" color={`${color}`}  width="30" height="27"/>
            </div>
            <Droppable droppableId={`${id}`}>
                {(droppableProvided, droppableSnapshot) => (
                    <div ref={droppableProvided.innerRef} {...droppableProvided.droppableProps} className="pb-[140px] h-full w-[270px] py-[25px]">
                        {tasks.map((task, index) => { 
                            return (
                                <CardOrder index={index} id={task.id} name={task.name} date={task.date} user={task.user} address={task.address} price={task.price}/>
                            )
                        })}
                    </div>
                )}
            </Droppable>
        </div>
    )
  }