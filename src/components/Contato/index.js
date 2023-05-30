import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function Contato() {
    return (
        <div className='w-full text-sm  lg:text-xl mt-10'>
            <main className='bg-[#d6b19f] w-9/12 lg:w-10/12 h-fit lg:rounded-[5rem] rounded-3xl m-auto flex items-center justify-around py-5 lg:py-14'>
                <div className='font-extrabold text-[#897876] w-6/12 lg:w-fit lg:text-3xl'>
                    <p>Cuide do seu sorriso,</p>
                    <p>Agende um horário.</p>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <button className='bg-[#897876] lg:px-16 px-2 py-2 font-bold text-white rounded-2xl text-xs lg:text-xl'>AGENDAR</button>
             
                    <FaWhatsapp className='lg:hidden' color='white' size={40} />
         
                </div>
                <div className='hidden lg:flex'>
                    <FaWhatsapp color='white' size={100} />
                </div>
            </main>
        </div>
    )
}
