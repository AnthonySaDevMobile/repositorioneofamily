'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Home from '../../../public/homeBack.png'
export default function HomeComponent() {
    return (
        <div>
            <main className='h-screen w-full relative'>
                <motion.div
                    initial={{ y: -900 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <Image src={Home} alt='home' className='object-cover object-center w-full h-screen md:rounded-b-[8rem] rounded-b-3xl brightness-75' />
                </motion.div>

                <div className='absolute top-1/4 md:top-1/3 md:left-10 left-2 text-[4rem]'>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2.5 }}
                        className='text-white font-extrabold w-1/3 leading-none'>Sorriso Perfeito</motion.p>

                    <motion.p
                        initial={{ x: -200,  opacity:0 }}
                        animate={{ x: 0, opacity:1 }}
                        transition={{ duration: 1.5 }}
                        className='text-lg md:text-xl  w-1/2 text-white font-semibold tracking-wider my-2'>É aquele que tem uma Saúde bucal equilibrada.</motion.p>
                    <motion.button
                        initial={{ x: 320, opacity:0}}
                        animate={{ x: 0, opacity:1 }}
                        transition={{
                            ease:'linear',
                            duration: 1
                        }}
                        className='text-lg md:text-xl bg-[#d6b19f] py-4 w-7/12 text-white font-bold rounded-3xl hover:bg-[#897876] transition-all'
                    >
                        FALE CONOSCO
                    </motion.button>
                </div>
            </main>
        </div>
    )
}
