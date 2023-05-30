import Image from 'next/image'
import footer from '../../../public/logoFooter.png'
export default function Footer() {
  return (
    <div className='bg-[#897876] w-full h-fit flex mt-10 items-center justify-center md:py-10 py-6 rounded-tl-[6.5rem]'>
       <div className='md:w-[500px] md:h-[200px] w-[200px] h-[100px]'>
       <Image src={footer} alt='logo footer' className='md:w-[500px] md:h-[200px] w-[200px] h-[100px] object-cover brightness-200'/>
       </div>
    </div>
  )
}
