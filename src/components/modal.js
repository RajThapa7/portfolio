import React,{useState} from 'react'
import '../css/index.css';
import { AiOutlineClose } from "react-icons/ai";
import '../css/responsive.css';

export default function Modal({isOpen, setIsOpen, src, props}) {

  return (
    <div className='modalImage-container'>
        <AiOutlineClose className='closeIcon' onClick={()=>setIsOpen(false)}/>
        <img src={props.image} className='modalImage' />
    </div>

  )

}
