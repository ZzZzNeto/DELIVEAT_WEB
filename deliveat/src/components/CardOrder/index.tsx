'use client'
import { Icon } from '@iconify/react';
import Button from '../Button';
import { useState } from 'react';
import Modal from 'react-modal';
import OrderModal from '../ModalOrderContent';
import { Draggable } from 'react-beautiful-dnd';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      padding: "30px",
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement('main');

const items = [
    {item : "Hamburguer Classic", obs : " sem picles e sem cebola"},
    {item : "Adicional de batata-frita M"},
    {item : "Coca-cola zero lata"},
    {item : "Fatima de bolo de chocolate", obs : " sem cobertura"},
]

const formatNoteDate = (date: string) => {
    if (!date) return date;
    const formattedDate = new Date(date);
    return (
      formattedDate.toLocaleDateString("pt-br", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }) +
      " às " +
      formattedDate.toLocaleTimeString("pt-br", { timeStyle: "short" })
    );
  };

interface data {
    index : number,
    id : number,
    name : string,
    date : string,
    total : number,
    address : string,
    user : string 
    code : string
    payment_method : string
    products : any
}

export default function CardOrder({index,id,name, date, total, products, address, user, code, payment_method} : data){
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Draggable key={id} draggableId={`${id}`} index={index}>
            {(draggableProvided, draggableSnapshot) => (
                <div ref={draggableProvided.innerRef} {...draggableProvided.draggableProps} {...draggableProvided.dragHandleProps}  className=" w-[233px] mb-[20px] h-[122px] rounded-[10px] bg-bg px-[17px] py-[10px]">
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <OrderModal code={code} buttons close={closeModal} items={products} user={{name:`${user}`}} addres={{street: `${address}`, number:158, city:"Pau dos Ferros", country:"RN"}} total={50.00} cupom={50} final={total} method={payment_method}/>
                        </Modal>
                    <div className='flex items-center justify-between w-full'>
                        <h1 className='text-[15px] font-bold'>{name}</h1>
                        <p className='text-orange font-bold text-[12px]'>R${total}</p>
                    </div>
                    <p className=' text-[11px] pt-[-20]'>{formatNoteDate(date)}</p>
                    <div className='flex items-center mt-[6px]'>
                        <Icon icon="icon-park-outline:local" color="#42464D"  width="15" height="15"/>
                        <p className=' text-[12px] ml-[5px]'>{address}</p>
                    </div>
                    <div className='flex items-center mt-[3px]'>        
                        <Icon icon="mdi:user" color="#42464D"  width="15" height="15"/>
                        <p className='text-[12px] ml-[5px]'>{user}</p>
                    </div>
                    <div className=' relative flex justify-end'>
                        <Button onClick={openModal} type={1} text='detalhes' font={10} width={60} height={20}/>
                    </div>
                </div> 
            )}
        </Draggable>
    )
  }

  
  