'use client'

import SubLayout from "../sublayout"
import TextInput from "@/components/textInput";
import Select from "@/components/select";
import CardOrder from "@/components/CardOrder";
import { Icon } from '@iconify/react';

import { DragDropContext } from 'react-beautiful-dnd'
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

export default function Orders() {
    const Column = dynamic(() => import("@/components/Column"), {ssr:false} )

    const tasks = {
        1 : {id : 1, name : "hamburguer", date : "08 de Dez, 2023", user : "Pedro Fagundes", address : "Rua Isidro Queiroga, n°158", price : 23.79},
        2 : {id : 2, name : "hamburguer", date : "08 de Dez, 2023", user : "Pedro Fagundes", address : "Rua Isidro Queiroga, n°158", price : 23.79},
        3 : {id : 3, name : "hamburguer", date : "08 de Dez, 2023", user : "Pedro Fagundes", address : "Rua Isidro Queiroga, n°158", price : 23.79},
        4 : {id : 4, name : "hamburguer", date : "08 de Dez, 2023", user : "Pedro Fagundes", address : "Rua Isidro Queiroga, n°158", price : 23.79},
        5 : {id : 5, name : "hamburguer", date : "08 de Dez, 2023", user : "Pedro Fagundes", address : "Rua Isidro Queiroga, n°158", price : 23.79},
        6 : {id : 6, name : "hamburguer", date : "08 de Dez, 2023", user : "Pedro Fagundes", address : "Rua Isidro Queiroga, n°158", price : 23.79}
    }
    
    const reorderColumn = (sourceCol, startIndex, endIndex) => {
        const [removed] = sourceCol.tasks.splice(startIndex,1)
        sourceCol.tasks.splice(endIndex, 0 , removed)
        return sourceCol
    }
    
    const reorderNewColumn = (sourceCol, destinationCol, startIndex, endIndex) => {
        const [removed] = sourceCol.tasks.splice(startIndex,1)
        destinationCol.tasks.splice(endIndex, 0 , removed)
        return destinationCol
    }
    
    const [columns, setColumns] = useState([
        {id : 1, name: "Recebidos", color : "#FF6D1B", tasks: [tasks[4],tasks[5],tasks[6]]},
        {id : 2, name: "Aceitos", color : "#FF6D1B", tasks: [tasks[1],tasks[3],tasks[2]]},
        {id : 3, name: "Prontos", color : "#FF6D1B", tasks: []},
        {id : 4, name: "Enviados", color : "#FF6D1B", tasks: []},
        {id : 5, name: "Concluidos", color : "#157AFE", tasks: []},
    ])

    const onDragEnd = (result : any) => {
        const {destination, source} = result

        if (!destination) return;

        if (destination.droppableId === source.droppableId && destination.index === source.index){
            return
        }

        const sourceCol = columns.find((amiga) => amiga.id==source.droppableId);
        const destinationCol = columns.find((amiga) => amiga.id==destination.droppableId)

        if (sourceCol.id === destinationCol.id) {
            const Newcolumn = reorderColumn(sourceCol, source.index, destination.index)
        }else{
            const Newcolumn = reorderNewColumn(sourceCol, destinationCol, source.index, destination.index)
        }
    }

    return (
        <SubLayout>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className=" mb-[20px] flex">
                    <TextInput text="Busque por palavras-chave..."/>
                    <Select df="Cardapio" options={["Hamburguer", "pizza", "Macarrão"]} />
                </div>
                <div className="flex flex-1 min-h-[80vh] justify-between">
                    {columns.map((column, index) => { 
                        return(
                            <Column name={column.name} color={column.color} id={column.id} tasks={column.tasks} />
                        )
                    })}
                </div>
            </DragDropContext>
        </SubLayout>
    )
}
