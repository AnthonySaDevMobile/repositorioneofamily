'use client'
import SelectArticle from "@/components/Blog/select";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { useEffect, useState } from "react";
import homeBlog from '../../../public/homeBlog.png';
import Loading from "../loading";
export default function Blog() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => {

            clearTimeout(timeout);
        };
    }, []);

    return (
        <>

            {
                isLoading ? <Loading />
                    : (<div className="bg-[#ece8dd]">
                        <Header />
                        <main >
                            <div className="w-full lg:h-[600px] h-[400px] relative">
                                <Image src={homeBlog} priority="true" alt='home' className="h-full object-cover lg:rounded-b-[8rem] rounded-b-3xl" />
                                <div className='flex  w-full items-center justify-center'>
                                    <button className='text-white bg-[#d6b19f] rounded-[4rem] lg:px-32 px-20 lg:left-32 lg:text-[2rem] text-3xl lg:-bottom-14 left-10 -bottom-10 absolute lg:py-10 py-8'>Blog</button>
                                </div>
                            </div>

                            <div className="flex lg:flex-row flex-col gap-10 lg:w-10/12 m-auto lg:mt-32 justify-between mt-10">
                                <div className="lg:h-fit lg:w-1/6 lg:border-r-[6px] lg:border-b-[0px] border-b-[6px] border-[#897876] flex flex-col items-start text-left lg:text-xl px-2 py-4 md:pr-3">
                                    <div className="mt-10 lg:flex lg:flex-col grid grid-cols-3 w-full gap-10 text-left items-start text-[#897876] font-extralight opacity-70">
                                        <button>Clareamento</button>
                                        <button>Tratamentos</button>
                                        <button>Limpeza</button>
                                        <button>Bruxismo</button>
                                        <button>Aparelho</button>
                                        <button>Outros</button>
                                    </div>
                                </div>
                                <SelectArticle />

                            </div>
                            <Contato />
                        </main>
                        <Footer />
                    </div>)}
        </>
    )
}
