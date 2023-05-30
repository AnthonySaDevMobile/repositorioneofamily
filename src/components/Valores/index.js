import Image from 'next/image'
import React from 'react'
import valores from '../../../public/valores.jpg'
import dentePlus from '../../../public/dentePlus.png'
import denteCalendar from '../../../public/denteCalendar.png'
import escova from '../../../public/escova.png'
import perfuracao from '../../../public/perfuracao.png'
export default function Valores() {
  return (
    <div className='md:mt-96 mt-16 w-full'>

      <main className='w-10/12 m-auto bg-[#d6b19f] rounded-[4rem]'>
        <div className='flex gap-2 m-auto items-end justify-around w-full relative'>
          <div className='bg-[#897876] md:w-1/4 md:rounded-[4rem] rounded-t-[2rem] z-20 md:-mt-80'>
            <p className='px-10 md:py-16 py-4 md:text-[2rem] font-semibold text-[#ece8dd]'>É assim  que cuidamos de você e da sua família</p>
          </div>
          <div className='w-1/3 hidden md:flex h-[500px] rounded-[4rem] z-20 -mt-80'>
            <Image src={valores} alt="valores" className='object-cover w-full h-full rounded-[4rem]' />
          </div>
        </div>

        <div className='grid md:grid-cols-4 grid-cols-2 gap-4 grid-rows-2 md:py-20 py-10 text-[#897876] font-bold md:text-lg text-center'>

          <div className='flex items-center flex-col gap-2'>
            <Image src={escova} alt='dente' className='w-[60px] h-[60px] white-image' />
            <p>Serviço 01</p>
            <p>Colocar texto pequeno aqui</p>
          </div>
          <div className='flex items-center flex-col gap-2'>

            <Image src={perfuracao} alt='dente' className='w-[60px] h-[60px] white-image' />
            <p>Serviço 01</p>
            <p>Colocar texto pequeno aqui</p>
          </div>
          <div className='flex items-center flex-col gap-2'>

            <Image src={dentePlus} alt='dente' className='w-[60px] h-[60px] white-image' />
            <p>Serviço 01</p>
            <p>Colocar texto pequeno aqui</p>
          </div>
          <div className='flex items-center flex-col gap-2'>

            <Image src={denteCalendar} alt='dente' className='w-[60px] h-[60px] white-image' />
            <p>Serviço 01</p>
            <p>Colocar texto pequeno aqui</p>
          </div>
          <div className='flex items-center flex-col gap-2'>

            <Image src={dentePlus} alt='dente' className='w-[60px] h-[60px] white-image' />
            <p>Serviço 01</p>
            <p>Colocar texto pequeno aqui</p>
          </div>
          <div className='flex items-center flex-col gap-2'>

            <Image src={dentePlus} alt='dente' className='w-[60px] h-[60px] white-image' />
            <p>Serviço 01</p>
            <p>Colocar texto pequeno aqui</p>
          </div>
          <div className='flex items-center flex-col gap-2'>

            <Image src={dentePlus} alt='dente' className='w-[60px] h-[60px] white-image' />
            <p>Serviço 01</p>
            <p>Colocar texto pequeno aqui</p>
          </div>
          <div className='flex items-center flex-col gap-2'>

            <Image src={dentePlus} alt='dente' className='w-[60px] h-[60px] white-image' />
            <p>Serviço 01</p>
            <p>Colocar texto pequeno aqui</p>
          </div>
        </div>
      </main>
    </div>
  )
}
