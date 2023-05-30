'use client'
import { Box, Pagination as MuiPagination } from '@mui/material';
import { motion } from 'framer-motion';
import Image from "next/image";
import { useEffect, useRef, useState } from 'react';
import SwiperCore, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import back from '../../../public/back(1).jpg';
import back2 from '../../../public/back(2).jpg';
import LoadingArticles from "../Articles/loading";


SwiperCore.use([Pagination]);

export default function ArticlesMobile() {

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
  const totalSlides = 10; // Defina o número total de slides aqui
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
    <div className="relative md:hidden">
      {isLoading ?
        <LoadingArticles />
        : (
          <>
            <Swiper
              ref={swiperRef}
              navigation
              onSlideChange={handleSlideChange}
              className="h-fit"

            >
              <SwiperSlide className="flex items-center justify-center mb-20 h-screen">
                <motion.div
                  initial={{ y: 500 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2 }}
                  className='bg-[#f4f1ea] rounded-[4rem] text-center '>
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
                </motion.div>
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center mb-20 h-screen">
                <motion.div
                  initial={{ y: 500 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2 }}
                  className='bg-[#f4f1ea] rounded-[4rem] text-center '>
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
                </motion.div>
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center mb-20 h-screen">
                <motion.div
                  initial={{ y: 500 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2 }}
                  className='bg-[#f4f1ea] rounded-[4rem] text-center '>
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
                </motion.div>
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center mb-20 h-screen">
                <motion.div
                  initial={{ y: 500 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2 }}
                  className='bg-[#f4f1ea] rounded-[4rem] text-center '>
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
                </motion.div>
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center mb-20 h-screen">
                <motion.div
                  initial={{ y: 500 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2 }}
                  className='bg-[#f4f1ea] rounded-[4rem] text-center '>
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
                </motion.div>
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center mb-20 h-screen">
                <motion.div
                  initial={{ y: 500 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2 }}
                  className='bg-[#f4f1ea] rounded-[4rem] text-center '>
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
                </motion.div>
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center mb-20 h-screen">
                <motion.div
                  initial={{ y: 500 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2 }}
                  className='bg-[#f4f1ea] rounded-[4rem] text-center '>
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
                </motion.div>
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center mb-20 h-screen">
                <motion.div
                  initial={{ y: 500 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2 }}
                  className='bg-[#f4f1ea] rounded-[4rem] text-center '>
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
                </motion.div>
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center mb-20 h-screen">
                <motion.div
                  initial={{ y: 500 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2 }}
                  className='bg-[#f4f1ea] rounded-[4rem] text-center '>
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
                </motion.div>
              </SwiperSlide>
              <SwiperSlide className="flex items-center justify-center mb-20 h-screen">
                <motion.div
                  initial={{ y: 500 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2 }}
                  className='bg-[#f4f1ea] rounded-[4rem] text-center '>
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
                </motion.div>
              </SwiperSlide>
            </Swiper>
            <div className='bg-[#897876] w-fit  m-auto rounded-[2rem]'>
              <Box display="flex" justifyContent="center" mt={2}>
                <MuiPagination
                  count={totalSlides}
                  page={activeIndex + 1}
                  onChange={handlePaginationChange}
                  boundaryCount={0} 
                />
              </Box>
            </div>
          </>
        )}

    </div>
  );
}


