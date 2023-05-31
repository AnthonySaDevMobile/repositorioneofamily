
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
    handleCategoryChange(selectedCategory); // Passar a categoria selecionada como argumento
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
          <>
            <div className="flex lg:flex-row flex-col gap-10 lg:w-10/12 m-auto lg:mt-32 justify-between mt-10">
              <div className="lg:h-fit lg:w-1/6 lg:border-r-[6px] lg:border-b-[0px] border-b-[6px] border-[#897876] flex flex-col items-start text-left lg:text-xl px-2 py-4 md:pr-3">
                <div className="mt-10 lg:flex lg:flex-col grid grid-cols-3 w-full gap-10 text-left items-start text-[#897876] font-extralight opacity-70">
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
              <div>
                <Swiper
                  ref={swiperRef}
                  navigation
                  onSlideChange={handleSlideChange}
                  className="h-[1100px] w-[800px] md:w-auto lg:w-[1250px]"
                >
                  {filtered.reduce((slides, item, index) => {
                    if (index % 6 === 0) {
                      slides.push(
                        <SwiperSlide key={index}>
                          <motion.div
                            className="grid grid-cols-3 gap-8"
                            initial={{ y: 500 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.2 }}
                          >
                            {filtered.slice(index, index + 6).map((blogItem, subIndex) => (
                              <div
                                key={subIndex}
                                className="bg-[#f4f1ea] rounded-[4rem] text-center"
                              >
                                <div className="w-full">
                                  <img
                                    src={blogItem.imagem}
                                    alt={blogItem.titulo}
                                    className="w-full cursor-pointer hover:brightness-50 transition-all ease-in-out delay-100 rounded-[4rem] h-[250px] object-cover"
                                  />
                                </div>

                                <div className="pt-5 text-[#91817f] flex flex-col px-8 py-10 gap-5 relative">
                                  <h1 className="text-[#d6b19f]">{blogItem.titulo}</h1>
                                  <p>{blogItem.resumo}</p>
                                  <div className="flex w-full items-center justify-center">
                                    <button className="text-white bg-[#d6b19f] rounded-3xl w-6/12 text-sm -bottom-4 absolute py-2">
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
                <div className="bg-[#897876] w-fit m-auto rounded-[2rem]">
                  <Box display="flex" justifyContent="center">
                    <MuiPagination
                      count={totalSlides}
                      page={activeIndex + 1}
                      onChange={handlePaginationChange}
                    // Define a cor do texto para branco
                    />
                  </Box>
                </div>
              </div>
            </div>
          </>
        )
      }
    </div>
  );
}