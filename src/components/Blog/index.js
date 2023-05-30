import React from 'react'
import Image from 'next/image'
import back from '../../../public/back(1).jpg'
import back2 from '../../../public/back(2).jpg'
import back3 from '../../../public/back(3).jpg'
import back4 from '../../../public/back(4).jpg'
import Link from 'next/link'
export default function BlogComponent() {
  return (
    <div className='w-full md:mt-20 mt-10'>
      <main className='w-10/12 m-auto '>

        <div className='md:px-20 px-10 text-[#897876] font-bold text-[2rem] md:text-[3rem] '>
          <p>Sobre o que</p>
          <p>estamos falando?</p>
        </div>

        <div className='flex md:flex-row flex-col gap-8'>
          <div className='bg-[#f4f1ea] rounded-[4rem] text-center md:w-1/4'>
            <div className='w-full'>
              <Image src={back} alt="back" className='w-full rounded-[4rem] h-[200px] object-cover' />
            </div>

            <div className='pt-5 text-[#91817f] flex flex-col px-8 py-10 gap-5 relative'>
              <h1 className='text-[#d6b19f]'>Tìtulo</h1>
              <p>A Neo Family é uma clínica odontológica especializada em cuidar da sua saúde bucal de toda a família. Com uma equipe de profissionais altamente qualificados.</p>
              <div className='flex  w-full items-center justify-center'>
                <button className='text-white bg-[#d6b19f] rounded-3xl w-6/12 text-sm -bottom-4 absolute py-2'>Continuar lendo</button>
              </div>

            </div>
          </div>
          <div className='bg-[#f4f1ea] rounded-[4rem] text-center md:w-1/4'>
            <div className='w-full'>
              <Image src={back2} alt="back" className='w-full rounded-[4rem] h-[200px]  object-cover' />
            </div>

            <div className='pt-5 text-[#91817f] flex flex-col px-8 py-10 gap-5 relative'>
              <h1 className='text-[#d6b19f]'>Tìtulo</h1>
              <p>A Neo Family é uma clínica odontológica especializada em cuidar da sua saúde bucal de toda a família. Com uma equipe de profissionais altamente qualificados.</p>
              <div className='flex  w-full items-center justify-center'>
                <button className='text-white bg-[#d6b19f] rounded-3xl w-6/12 text-sm -bottom-4 absolute py-2'>Continuar lendo</button>
              </div>

            </div>
          </div>
          <div className='bg-[#f4f1ea] rounded-[4rem] text-center md:w-1/4'>
            <div className='w-full'>
              <Image src={back3} alt="back" className='w-full rounded-[4rem] h-[200px]  object-cover' />
            </div>

            <div className='pt-5 text-[#91817f] flex flex-col px-8 py-10 gap-5 relative'>
              <h1 className='text-[#d6b19f]'>Tìtulo</h1>
              <p>A Neo Family é uma clínica odontológica especializada em cuidar da sua saúde bucal de toda a família. Com uma equipe de profissionais altamente qualificados.</p>
              <div className='flex  w-full items-center justify-center'>
                <button className='text-white bg-[#d6b19f] rounded-3xl w-6/12 text-sm -bottom-4 absolute py-2'>Continuar lendo</button>
              </div>

            </div>
          </div>
          <div className='bg-[#f4f1ea] rounded-[4rem] text-center md:w-1/4'>
            <div className='w-full'>
              <Image src={back4} alt="back" className='w-full rounded-[4rem] h-[200px]  object-cover' />
            </div>

            <div className='pt-5 text-[#91817f] flex flex-col px-8 py-10 gap-5 relative'>
              <h1 className='text-[#d6b19f]'>Tìtulo</h1>
              <p>A Neo Family é uma clínica odontológica especializada em cuidar da sua saúde bucal de toda a família. Com uma equipe de profissionais altamente qualificados.</p>
              <div className='flex  w-full items-center justify-center'>
                <button className='text-white bg-[#d6b19f] rounded-3xl w-6/12 text-sm -bottom-4 absolute py-2'>Continuar lendo</button>
              </div>

            </div>
          </div>
        </div>
        <div className='mt-10 text-center'>
          <Link href='/blog'>
          <button className='w-fit bg-[#897876] text-[#f3f0e9] rounded-full py-2 px-8'>Ver todos</button>
          </Link>
        </div>
      </main>
    </div>
  )
}
