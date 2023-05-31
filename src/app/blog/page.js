'use client'
import SelectArticle from "@/components/Blog/select";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { useEffect, useState } from "react";
import homeBlog from '../../../public/homeBlog.jpg';
import Loading from "../loading";
import Articles from "@/components/Articles/articles";
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

                  
                                <SelectArticle />
                         
                            <Contato />
                        </main>
                        <Footer />
                    </div>)}
        </>
    )
}
