'use client'
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { db } from '@/services/firebaseConnection';
import { collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoChevronBackCircleSharp } from 'react-icons/io5';


export default function PageArtigos({id,categoria}) {
    const collectionRef = collection(db, 'blog');
    const [articleData, setArticleData] = useState([]);
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const data = await getDocs(collectionRef);
            const desiredId = id;
            const blogData = data.docs
                .map((doc) => ({ ...doc.data(), id: doc.id }))
                .find((item) => item.id === desiredId);
            setArticleData(blogData ? [blogData] : []);
        };

        getArticles();
    }, [id, categoria]);

    useEffect(() => {
        const getArticles = async () => {
            const data = await getDocs(collectionRef);
            const desiredCategory = categoria;  

            const blogData = data.docs
                .map((doc) => ({ ...doc.data(), id: doc.id }))
                .filter((item) => item.categoria === desiredCategory);

            setBlog(blogData);
        };

        getArticles();
    }, [id, categoria]);


    return (
        <div className='bg-[#ece8dd] h-full'>
            {articleData.map((item) => (
                <div key={item.id}>
                    <Header />
                    <div className="w-full lg:h-[500px] h-[300px] relative">
                        <img src={item.imagem} alt="Imagem" className='h-full object-cover w-full lg:rounded-b-[8rem] rounded-b-3xl brightness-75' />
                        <div className='absolute w-full h-[100px] top-1/2 z-20 flex items-center'>
                            <div className='w-10/12 m-auto h-fit text-3xl md:text-[3rem] text-white font-extrabold'>
                                <p>{item.titulo}</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-10/12 mt-10 m-auto flex items-center md:gap-40 gap-10 h-fit'>
                       <Link href='/blog'>
                        <div className='w-fit px-4 py-2 h-fit rounded-[3rem] bg-[#897876] flex gap-2 items-center'>
                            <IoChevronBackCircleSharp color='#fff' />
                            <button className='text-[#d6b19f]'>Voltar</button>
                        </div>
                       </Link>
                        <div className='flex items-center gap-2'>
                            <div className='rounded-full border-8 border-[#d6b19f]'>
                                <img src={item.avatar} className='w-[100px] h-[100px] object-cover rounded-full' />
                            </div>
                            <div className="flex flex-col font-extrabold">
                                <p className='text-[#897876]'>{item.nome_do_profissional}</p>
                                <p className='text-[#d7b3a1]'>{item.formacao}</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-[#897876]'>{item.criado_em}</p>
                        </div>
                    </div>
                    <div className='md:w-10/12 m-auto px-16 mt-10 font-extralight flex flex-col gap-10 text-[#8b7a78]'>
                        <p className='opacity-60 w-9/12 whitespace-pre-line'>{item.texto_inicial}</p>
                        <span className='text-[#897876] text-2xl'>{item.subtitulo}</span>
                        <p className='opacity-60 w-9/12 whitespace-pre-line'>{item.texto_final}</p>
                    </div>
                    <div className='md:w-10/12 my-10 m-auto'>
                        <div className='border-t-4 border-[#675e5b] w-1/4 mb-10'>
                        </div>
                        <p className='text-[#d6b19f] text-3xl'>Artigos Relacionados</p>
                    </div>


                    {blog.length < 1 ?
                        <div className="flex gap-2 items-center justify-center h-full">
                            <p>Ainda não há artigos relacionados ao assunto</p>
                            <p className="animate-pulse text-3xl mr-1 mb-3" style={{ animationDelay: '0s' }}>.</p>
                            <p className="animate-pulse text-3xl mr-1 mb-3" style={{ animationDelay: '0.5s' }}>.</p>
                            <p className="animate-pulse text-3xl mr-1 mb-3" style={{ animationDelay: '1s' }}>.</p>
                        </div>
                        : (<div className='flex gap-5 flex-col justify-start items-center md:flex-row md:w-10/12 m-auto'>
                            {blog.slice(0, 3).map((item) => (
                                <div key={item.id} className='w-[400px]'>
                                    <div className="pb-5">
                                        <div className="bg-[#f4f1ea] justify-between rounded-[4rem] text-center">
                                            <div className="w-full">
                                                <img src={item.imagem} alt="back" className="w-full rounded-[4rem] h-[200px] object-cover" />
                                            </div>

                                            <div className="pt-5 text-[#91817f] flex flex-col px-8 py-10 gap-5 relative">
                                                <h1 className="text-[#d6b19f]">{item.titulo}</h1>
                                                <p>{item.resumo}</p>
                                                <div className='flex  w-full items-center justify-center'>
                                                    <button onClick={() => console.log(blog)} className='text-white bg-[#d6b19f] rounded-3xl w-6/12 text-sm -bottom-4 absolute py-2'>Continuar lendo</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>)}

                </div>
            ))}

            
            <Contato />
            <Footer />

        </div>
    );
}
