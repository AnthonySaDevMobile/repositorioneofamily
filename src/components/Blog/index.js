'use client'
import React,{useState, useEffect} from 'react'
import Link from 'next/link'
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/services/firebaseConnection";

export default function BlogComponent() {
  
  const collectionRef = collection(db, "blog");
  const [blog, setBlog] = useState([]);
  
  useEffect(() => {
    const getArticles = async () => {
      const data = await getDocs(collectionRef);
      const blogData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      setBlog(blogData);
    };

    getArticles();
  }, []);

  return (
    <div className='w-full md:mt-20 mt-10'>
      <main className='w-10/12 m-auto '>

        <div className='md:px-20 px-10 text-[#897876] font-bold text-[2rem] md:text-[3rem] '>
          <p>Sobre o que</p>
          <p>estamos falando?</p>
        </div>

        <div className='flex md:flex-row flex-col gap-8'>
          {blog.map((item) => (
        <div key={item.id} className="w-full flex pb-5">
          <div className="bg-[#f4f1ea] flex flex-col justify-between rounded-[4rem] text-center">
            <div className="w-full">
              <img src={item.imagem} alt="back" className="w-full rounded-[4rem] h-[200px] object-cover" />
            </div>

            <div className="pt-5 text-[#91817f] flex flex-col px-8 py-10 gap-5 relative">
              <h1 className="text-[#d6b19f]">{item.titulo}</h1>
              <p>{item.resumo}</p>
              <div className='flex  w-full items-center justify-center'>
                <button className='text-white bg-[#d6b19f] rounded-3xl w-6/12 text-sm -bottom-4 absolute py-2'>Continuar lendo</button>
              </div>
            </div>

          </div>
        </div>
      ))}
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
