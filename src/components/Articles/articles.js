
'use client'
import { db } from "@/services/firebaseConnection";
import { Box, Pagination as MuiPagination } from '@mui/material';
import { collection, getDocs } from "firebase/firestore";
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import SwiperCore, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import LoadingArticles from "./loading";

SwiperCore.use([Pagination]);

export default function Articles() {

  const collectionRef = collection(db, "blog");
  const [blog, setBlog] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [filtered, setFiltered] = useState(blog);

  useEffect(() => {
    const getArticles = async () => {
      const data = await getDocs(collectionRef);
      const blogData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      setBlog(blogData);
      setFiltered(blogData);
    };

    getArticles();
    handleCategoryChange("Todos")
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {

      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    handleCategoryChange(selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const artigosFiltrados =
      category === "Todos"
        ? blog
        : blog.filter((item) => {
          if (category === "Outros") {
            return ![
              "Clareamento",
              "Tratamentos",
              "Limpeza",
              "Bruxismo",
              "Aparelho",
            ].includes(item.categoria);
          } else {
            return item.categoria === category;
          }
        });

    setFiltered(artigosFiltrados);
  };

  const totalSlides = Math.ceil(filtered.length / 6);
  const [activeIndex, setActiveIndex] = useState(0);

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
        isLoading ? <LoadingArticles /> : (
          <div className="w-10/12 m-auto h-fit flex justify-between">
          
            <div className="border-r-[6px] mt-32 border-b-[0px] border-[#897876] flex flex-col items-start text-left px-4 py-4 pr-5 h-fit">
              <div className="my-10 lg:flex lg:flex-col grid grid-cols-3  gap-10 text-left items-start text-[#897876] font-extralight opacity-70">
                <button
                  className={`${selectedCategory === "Clareamento" ? "text-[#554b4a] font-extrabold" : "text-[#b6aba5] font-extralight"
                    }`}
                  onClick={() => handleCategoryChange("Clareamento")}
                >
                  Clareamento
                </button>
                <button
                  className={`${selectedCategory === "Tratamentos" ? "text-[#554b4a] font-extrabold" : "text-[#b6aba5] font-extralight"
                    }`}
                  onClick={() => handleCategoryChange("Tratamentos")}
                >
                  Tratamentos
                </button>
                <button
                  className={`${selectedCategory === "Limpeza" ? "text-[#554b4a] font-extrabold" : "text-[#b6aba5] font-extralight"
                    }`}
                  onClick={() => handleCategoryChange("Limpeza")}
                >
                  Limpeza
                </button>
                <button
                  className={`${selectedCategory === "Bruxismo" ? "text-[#554b4a] font-extrabold" : "text-[#b6aba5] font-extralight"
                    }`}
                  onClick={() => handleCategoryChange("Bruxismo")}
                >
                  Bruxismo
                </button>
                <button
                  className={`${selectedCategory === "Aparelho" ? "text-[#554b4a] font-extrabold" : "text-[#b6aba5] font-extralight"
                    }`}
                  onClick={() => handleCategoryChange("Aparelho")}
                >
                  Aparelho
                </button>
                <button
                  className={`${selectedCategory === "Outros" ? "text-[#554b4a] font-extrabold" : "text-[#b6aba5] font-extralight"
                    }`}
                  onClick={() => handleCategoryChange("Outros")}
                >
                  Outros
                </button>
              </div>
            </div>


            <div className="flex flex-col ml-16 w-10/12 m-auto mt-32">

              <div>
                <Swiper
                  ref={swiperRef}
                  navigation
                  onSlideChange={handleSlideChange}
                  className="h-fit flex items-end justify-end"
                >
                  {filtered.reduce((slides, item, index) => {
                    if (index % 6 === 0) {
                      slides.push(
                        <SwiperSlide key={index}>
                          <motion.div
                            className="grid grid-cols-3 gap-4"
                            initial={{ y: 500 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.2 }}
                          >
                            {filtered.slice(index, index + 6).map((blogItem, subIndex) => (
                              <div
                                key={subIndex}
                                className="bg-[#f4f1ea] rounded-[4rem] pb-5 text-center flex flex-col justify-between"
                              >
                                <div className="">
                                  <img
                                    src={blogItem.imagem}
                                    alt={blogItem.titulo}
                                    className=" cursor-pointer hover:brightness-50 transition-all ease-in-out delay-100 rounded-[4rem] h-[250px] object-cover"
                                  />
                                </div>

                                <div className="pt-5 text-[#91817f] flex flex-col px-8 gap-5 relative">
                                  <h1 className="text-[#d6b19f]">{blogItem.titulo}</h1>
                                  <p>{blogItem.resumo}</p>
                                  <div className="flex  items-center justify-center">
                                    <button className="text-white bg-[#d6b19f] rounded-3xl w-6/12 text-sm mt-3 py-2">
                                      Continuar lendo
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        </SwiperSlide>
                      );
                    }
                    return slides;
                  }, [])}
                </Swiper>
                {filtered.length < 1 ?
                  (<div className="flex gap-2 items-center justify-center h-full">
                    <p>Ainda não há artigos sobre o assunto</p>
                    <p className="animate-pulse text-3xl mr-1 mb-3" style={{ animationDelay: '0s' }}>.</p>
                    <p className="animate-pulse text-3xl mr-1 mb-3" style={{ animationDelay: '0.5s' }}>.</p>
                    <p className="animate-pulse text-3xl mr-1 mb-3" style={{ animationDelay: '1s' }}>.</p>
                  </div>)
                  :
                  (<div className="bg-[#897876] w-fit m-auto mt-10 rounded-[2rem]">
                    <Box display="flex" justifyContent="center">
                      <MuiPagination
                        count={totalSlides}
                        page={activeIndex + 1}
                        onChange={handlePaginationChange}
                      />
                    </Box>
                  </div>)}

              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}