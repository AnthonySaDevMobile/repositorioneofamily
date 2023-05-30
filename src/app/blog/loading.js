'use client'
import Image from 'next/image';
import { FaSpinner } from 'react-icons/fa';
import logo from '../../../public/logo1.png';

export default function Loading() {
 return  (
        <div className="h-screen flex items-center justify-center bg-[#ece8dd]">
            <div className='h-fit flex flex-col items-center justify-center gap-5'>
                <div className="w-full flex flex-col items-center justify-center m-auto">
                    <Image priority="true" src={logo} alt="logo" className="w-1/3 brightness-75 h-1/2 object-cover" />
                    <FaSpinner color='#827774' className="animate-spin mt-5 text-4xl text-gray-500" />
                </div>
            </div>
        </div>
    ) 
}