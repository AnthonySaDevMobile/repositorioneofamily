
'use client'
import { useEffect, useRef, useState } from 'react';
import { Box, Pagination as MuiPagination } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import { useSwiper } from 'swiper/react';
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import back from '../../../public/back(1).jpg';
import back2 from '../../../public/back(2).jpg';
import back3 from '../../../public/back(3).jpg';
import back4 from '../../../public/back(4).jpg';
import { motion } from 'framer-motion'
import LoadingArticles from "./loading";

SwiperCore.use([Pagination]);

export default function Articles() {


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {

      clearTimeout(timeout);
    };
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 3; // Defina o número total de slides aqui
  const swiperRef = useRef(null);
  const swiper = useSwiper();

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handlePaginationChange = (event, page) => {
    setActiveIndex(page - 1);
    swiperRef.current.swiper.slideTo(page - 1);
  };


  return (
    <div>
      {
        isLoading ? <LoadingArticles />
          : (
<>
            <Swiper
              ref={swiperRef}
              navigation
              onSlideChange={handleSlideChange}
              className="h-[1100px] w-[800px] md:w-auto lg:w-[1250px]"
            >
              <SwiperSlide >
                <motion.div className="grid grid-cols-3 gap-8"
                  initial={{ y: 500 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2 }}>
                  <div className='bg-[#f4f1ea] rounded-[4rem] text-center '>
                    <div className='w-full'>
                      <Image src={back} alt="back" className='w-full cursor-pointer hover:brightness-50 transition-all ease-in-out delay-100 rounded-[4rem] h-[250px] object-cover' />
                    </div>

                    <div className='pt-5 text-[#91817f] flex flex-col px-8 py-10 gap-5 relative'>
                      <h1 className='text-[#d6b19f]'>Tìtulo</h1>
                      <p>A Neo Family é uma clínica odontológica especializada em cuidar da sua saúde bucal de toda a família. Com uma equipe de profissionais altamente qualificados.</p>
                      <div className='flex  w-full items-center justify-center'>
                        <button className='text-white bg-[#d6b19f] rounded-3xl w-6/12 text-sm -bottom-4 absolute py-2'>Continuar lendo</button>
                      </div>

                    </div>
                  </div>
                  <div className='bg-[#f4f1ea] rounded-[4rem] text-center '>
                    <div className='w-full'>
                      <Image src={back2} alt="back" className='w-full rounded-[4rem] h-[250px] object-cover' />
                    </div>

                    <div className='pt-5 text-[#91817f] flex flex-col px-8 py-10 gap-5 relative'>
                      <h1 className='text-[#d6b19f]'>Tìtulo</h1>
                      <p>A Neo Family é uma clínica odontológica especializada em cuidar da sua saúde bucal de toda a família. Com uma equipe de profissionais altamente qualificados.</p>
                      <div className='flex  w-full items-center justify-center'>
                        <button className='text-white bg-[#d6b19f] rounded-3xl w-6/12 text-sm -bottom-4 absolute py-2'>Continuar lendo</button>
                      </div>

                    </div>
                  </div>
                  <div className='bg-[#f4f1ea] rounded-[4rem] text-center '>
                    <div className='w-full'>
                      <Image src={back3} alt="back" className='w-full rounded-[4rem] h-[250px] object-cover' />
                    </div>

                    <div className='pt-5 text-[#91817f] flex flex-col px-8 py-10 gap-5 relative'>
                      <h1 className='text-[#d6b19f]'>Tìtulo</h1>
                      <p>A Neo Family é uma clínica odontológica especializada em cuidar da sua saúde bucal de toda a família. Com uma equipe de profissionais altamente qualificados.</p>
                      <div className='flex  w-full items-center justify-center'>
                        <button className='text-white bg-[#d6b19f] rounded-3xl w-6/12 text-sm -bottom-4 absolute py-2'>Continuar lendo</button>
                      </div>

                    </div>
                  </div>
                  <div className='bg-[#f4f1ea] rounded-[4rem] text-center '>
                    <div className='w-full'>
                      <Image src={back4} alt="back" className='w-full rounded-[4rem] h-[250px] object-cover' />
                    </div>

                    <div className='pt-5 text-[#91817f] flex flex-col px-8 py-10 gap-5 relative'>
                      <h1 className='text-[#d6b19f]'>Tìtulo</h1>
                      <p>A Neo Family é uma clínica odontológica especializada em cuidar da sua saúde bucal de toda a família. Com uma equipe de profissionais altamente qualificados.</p>
                      <div className='flex  w-full items-center justify-center'>
                        <button className='text-white bg-[#d6b19f] rounded-3xl w-6/12 text-sm -bottom-4 absolute py-2'>Continuar lendo</button>
                      </div>

                    </div>
                  </div>
                  <div className='bg-[#f4f1ea] rounded-[4rem] text-center '>
                    <div className='w-full'>
                      <Image src={back} alt="back" className='w-full rounded-[4rem] h-[250px] object-cover' />
                    </div>

                    <div className='pt-5 text-[#91817f] flex flex-col px-8 py-10 gap-5 relative'>
                      <h1 className='text-[#d6b19f]'>Tìtulo</h1>
                      <p>A Neo Family é uma clínica odontológica especializada em cuidar da sua saúde bucal de toda a família. Com uma equipe de profissionais altamente qualificados.</p>
                      <div className='flex  w-full items-center justify-center'>
                        <button className='text-white bg-[#d6b19f] rounded-3xl w-6/12 text-sm -bottom-4 absolute py-2'>Continuar lendo</button>
                      </div>

                    </div>
                  </div>
                  <div className='bg-[#f4f1ea] rounded-[4rem] text-center '>
                    <div className='w-full'>
                      <Image src={back2} alt="back" className='w-full rounded-[4rem] h-[250px] object-cover' />
                    </div>

                    <div className='pt-5 text-[#91817f] flex flex-col px-8 py-10 gap-5 relative'>
                      <h1 className='text-[#d6b19f]'>Tìtulo</h1>
                      <p>A Neo Family é uma clínica odontológica especializada em cuidar da sua saúde bucal de toda a família. Com uma equipe de profissionais altamente qualificados.</p>
                      <div className='flex  w-full items-center justify-center'>
                        <button className='text-white bg-[#d6b19f] rounded-3xl w-6/12 text-sm -bottom-4 absolute py-2'>Continuar lendo</button>
                      </div>

                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="grid grid-cols-3 gap-8">
                  <div className='bg-[#f4f1ea] rounded-[4rem] text-center '>
                    <div className='w-full'>
                      <Image src={back} alt="back" className='w-full rounded-[4rem] h-[250px] object-cover' />
                    </div>

                    <div className='pt-5 text-[#91817f] flex flex-col px-8 py-10 gap-5 relative'>
                      <h1 className='text-[#d6b19f]'>Tìtulo</h1>
                      <p>A Neo Family é uma clínica odontológica especializada em cuidar da sua saúde bucal de toda a família. Com uma equipe de profissionais altamente qualificados.</p>
                      <div className='flex  w-full items-center justify-center'>
                        <button className='text-white bg-[#d6b19f] rounded-3xl w-6/12 text-sm -bottom-4 absolute py-2'>Continuar lendo</button>
                      </div>

                    </div>
                  </div>
                  <div className='bg-[#f4f1ea] rounded-[4rem] text-center '>
                    <div className='w-full'>
                      <Image src={back2} alt="back" className='w-full rounded-[4rem] h-[250px] object-cover' />
                    </div>

                    <div className='pt-5 text-[#91817f] flex flex-col px-8 py-10 gap-5 relative'>
                      <h1 className='text-[#d6b19f]'>Tìtulo</h1>
                      <p>A Neo Family é uma clínica odontológica especializada em cuidar da sua saúde bucal de toda a família. Com uma equipe de profissionais altamente qualificados.</p>
                      <div className='flex  w-full items-center justify-center'>
                        <button className='text-white bg-[#d6b19f] rounded-3xl w-6/12 text-sm -bottom-4 absolute py-2'>Continuar lendo</button>
                      </div>

                    </div>
                  </div>
                  <div className='bg-[#f4f1ea] rounded-[4rem] text-center '>
                    <div className='w-full'>
                      <Image src={back3} alt="back" className='w-full rounded-[4rem] h-[250px] object-cover' />
                    </div>

                    <div className='pt-5 text-[#91817f] flex flex-col px-8 py-10 gap-5 relative'>
                      <h1 className='text-[#d6b19f]'>Tìtulo</h1>
                      <p>A Neo Family é uma clínica odontológica especializada em cuidar da sua saúde bucal de toda a família. Com uma equipe de profissionais altamente qualificados.</p>
                      <div className='flex  w-full items-center justify-center'>
                        <button className='text-white bg-[#d6b19f] rounded-3xl w-6/12 text-sm -bottom-4 absolute py-2'>Continuar lendo</button>
                      </div>

                    </div>
                  </div>
                  <div className='bg-[#f4f1ea] rounded-[4rem] text-center '>
                    <div className='w-full'>
                      <Image src={back4} alt="back" className='w-full rounded-[4rem] h-[250px] object-cover' />
                    </div>

                    <div className='pt-5 text-[#91817f] flex flex-col px-8 py-10 gap-5 relative'>
                      <h1 className='text-[#d6b19f]'>Tìtulo</h1>
                      <p>A Neo Family é uma clínica odontológica especializada em cuidar da sua saúde bucal de toda a família. Com uma equipe de profissionais altamente qualificados.</p>
                      <div className='flex  w-full items-center justify-center'>
                        <button className='text-white bg-[#d6b19f] rounded-3xl w-6/12 text-sm -bottom-4 absolute py-2'>Continuar lendo</button>
                      </div>

                    </div>
                  </div>
                  <div className='bg-[#f4f1ea] rounded-[4rem] text-center '>
                    <div className='w-full'>
                      <Image src={back} alt="back" className='w-full rounded-[4rem] h-[250px] object-cover' />
                    </div>

                    <div className='pt-5 text-[#91817f] flex flex-col px-8 py-10 gap-5 relative'>
                      <h1 className='text-[#d6b19f]'>Tìtulo</h1>
                      <p>A Neo Family é uma clínica odontológica especializada em cuidar da sua saúde bucal de toda a família. Com uma equipe de profissionais altamente qualificados.</p>
                      <div className='flex  w-full items-center justify-center'>
                        <button className='text-white bg-[#d6b19f] rounded-3xl w-6/12 text-sm -bottom-4 absolute py-2'>Continuar lendo</button>
                      </div>

                    </div>
                  </div>
                  <div className='bg-[#f4f1ea] rounded-[4rem] text-center '>
                    <div className='w-full'>
                      <Image src={back2} alt="back" className='w-full rounded-[4rem] h-[250px] object-cover' />
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
              </SwiperSlide>
              <SwiperSlide >
                <div className="grid grid-cols-3 gap-8">
                  <div className='bg-[#f4f1ea] rounded-[4rem] text-center '>
                    <div className='w-full'>
                      <Image src={back} alt="back" className='w-full rounded-[4rem] h-[250px] object-cover' />
                    </div>

                    <div className='pt-5 text-[#91817f] flex flex-col px-8 py-10 gap-5 relative'>
                      <h1 className='text-[#d6b19f]'>Tìtulo</h1>
                      <p>A Neo Family é uma clínica odontológica especializada em cuidar da sua saúde bucal de toda a família. Com uma equipe de profissionais altamente qualificados.</p>
                      <div className='flex  w-full items-center justify-center'>
                        <button className='text-white bg-[#d6b19f] rounded-3xl w-6/12 text-sm -bottom-4 absolute py-2'>Continuar lendo</button>
                      </div>

                    </div>
                  </div>
                  <div className='bg-[#f4f1ea] rounded-[4rem] text-center '>
                    <div className='w-full'>
                      <Image src={back2} alt="back" className='w-full rounded-[4rem] h-[250px] object-cover' />
                    </div>

                    <div className='pt-5 text-[#91817f] flex flex-col px-8 py-10 gap-5 relative'>
                      <h1 className='text-[#d6b19f]'>Tìtulo</h1>
                      <p>A Neo Family é uma clínica odontológica especializada em cuidar da sua saúde bucal de toda a família. Com uma equipe de profissionais altamente qualificados.</p>
                      <div className='flex  w-full items-center justify-center'>
                        <button className='text-white bg-[#d6b19f] rounded-3xl w-6/12 text-sm -bottom-4 absolute py-2'>Continuar lendo</button>
                      </div>

                    </div>
                  </div>
                  <div className='bg-[#f4f1ea] rounded-[4rem] text-center '>
                    <div className='w-full'>
                      <Image src={back3} alt="back" className='w-full rounded-[4rem] h-[250px] object-cover' />
                    </div>

                    <div className='pt-5 text-[#91817f] flex flex-col px-8 py-10 gap-5 relative'>
                      <h1 className='text-[#d6b19f]'>Tìtulo</h1>
                      <p>A Neo Family é uma clínica odontológica especializada em cuidar da sua saúde bucal de toda a família. Com uma equipe de profissionais altamente qualificados.</p>
                      <div className='flex  w-full items-center justify-center'>
                        <button className='text-white bg-[#d6b19f] rounded-3xl w-6/12 text-sm -bottom-4 absolute py-2'>Continuar lendo</button>
                      </div>

                    </div>
                  </div>
                  <div className='bg-[#f4f1ea] rounded-[4rem] text-center '>
                    <div className='w-full'>
                      <Image src={back4} alt="back" className='w-full rounded-[4rem] h-[250px] object-cover' />
                    </div>

                    <div className='pt-5 text-[#91817f] flex flex-col px-8 py-10 gap-5 relative'>
                      <h1 className='text-[#d6b19f]'>Tìtulo</h1>
                      <p>A Neo Family é uma clínica odontológica especializada em cuidar da sua saúde bucal de toda a família. Com uma equipe de profissionais altamente qualificados.</p>
                      <div className='flex  w-full items-center justify-center'>
                        <button className='text-white bg-[#d6b19f] rounded-3xl w-6/12 text-sm -bottom-4 absolute py-2'>Continuar lendo</button>
                      </div>

                    </div>
                  </div>
                  <div className='bg-[#f4f1ea] rounded-[4rem] text-center '>
                    <div className='w-full'>
                      <Image src={back} alt="back" className='w-full rounded-[4rem] h-[250px] object-cover' />
                    </div>

                    <div className='pt-5 text-[#91817f] flex flex-col px-8 py-10 gap-5 relative'>
                      <h1 className='text-[#d6b19f]'>Tìtulo</h1>
                      <p>A Neo Family é uma clínica odontológica especializada em cuidar da sua saúde bucal de toda a família. Com uma equipe de profissionais altamente qualificados.</p>
                      <div className='flex  w-full items-center justify-center'>
                        <button className='text-white bg-[#d6b19f] rounded-3xl w-6/12 text-sm -bottom-4 absolute py-2'>Continuar lendo</button>
                      </div>

                    </div>
                  </div>
                  <div className='bg-[#f4f1ea] rounded-[4rem] text-center '>
                    <div className='w-full'>
                      <Image src={back2} alt="back" className='w-full rounded-[4rem] h-[250px] object-cover' />
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
              </SwiperSlide>

            </Swiper>
      <div className='bg-[#897876] w-fit m-auto rounded-[2rem]'>
        <Box display="flex" justifyContent="center">
          <MuiPagination
            count={totalSlides}
            page={activeIndex + 1}
            onChange={handlePaginationChange}
          // Define a cor do texto para branco
          />
        </Box>
      </div>
</>
          )}
    </div>
  );
}
