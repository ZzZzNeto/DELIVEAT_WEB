'use client'

import SubLayout from "../sublayout"
import TextInput from "@/components/textInput";
import Select from "@/components/select";
import CardOrder from "@/components/CardOrder";
import { Icon } from '@iconify/react';

import { DragDropContext } from 'react-beautiful-dnd'
import dynamic from "next/dynamic";
import { useContext, useEffect, useState } from "react";
import { MyContext } from '@/contexts'
import axios from 'axios';
import { string } from "yup";

export default function Orders() {
    const Column = dynamic(() => import("@/components/Column"), {ssr:false} )
    const { data, updateData } = useContext(MyContext);

    const [orders, setOrders] = useState([]);
    const [columns, setColumns] = useState([
        { id: 1, name: "Pendente", color: "#FF6D1B", tasks: [] },
        { id: 2, name: "Aceito", color: "#FF6D1B", tasks: [] },
        { id: 3, name: "Pronto", color: "#FF6D1B", tasks: [] },
        { id: 4, name: "Enviado", color: "#FF6D1B", tasks: [] },
        { id: 5, name: "Concluido", color: "#157AFE", tasks: [] },
    ]);

    useEffect(() => {
        const fetchData = async () => {
          if (data && data.access_token) {
            await getOrders();
          }
        };
        fetchData();
    }, [data]);

    const getOrders = async () => {
        try {
            const dataset = await axios.get(
                `http://127.0.0.1:8000/order/list`, 
                {headers: { Authorization: `Bearer ${data.access_token}` }} 
            );  
    
            setOrders(dataset.data);
    
            const organizedColumns = columns.map(column => {
                const tasks = dataset.data.filter(order => order.status.toLowerCase() === column.name.toLowerCase());
                return { ...column, tasks };
            });
    
            setColumns(organizedColumns);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };
    
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

    const updateStatus = async (id, column_name) => {
        console.log(column_name)
        await axios.patch(
            `http://127.0.0.1:8000/order/update/${id}`, {
                status : column_name
            });
    }

    const onDragEnd = (result : any) => {
        const {destination, source, draggableId} = result
        let col = columns.find(obj => obj.id == destination.droppableId).name.toUpperCase()
        updateStatus(draggableId,col)

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
