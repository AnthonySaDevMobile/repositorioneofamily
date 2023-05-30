'use client'
import BlogComponent from '@/components/Blog';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HomeComponent from '@/components/Home';
import Sobre from '@/components/Sobre';
import Valores from '@/components/Valores';
import { useEffect, useState } from 'react';
import Loading from './loading';
import Head from 'next/head';
export default function Home() {
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
    <div className="bg-[#ece8dd] w-full h-fit">
      {isLoading ? (
        <Loading />
      ) : (
        <>
         <Head>
        <title>NeoFamily</title> 
        <link rel="apple-touch-icon" tamanhos="180x180" href="/apple-touch-icon.png"/> 
        <link rel="icon" type="image/png" tamanhos="32x32 " href="/favicon-32x32.png"/> <link rel="icon" type="image/png" tamanhos="16x16" href="/favicon-16x16.png"/> <link rel="manifest" href ="/site.webmanifest"/> <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/> <meta name="msapplication-TileColor" content="#da532c "/> <meta name="theme-color" content="#ffffff"/>
      </Head>
          <Header />
          <main>
            <HomeComponent />
            <Sobre />
            <Valores />
            <BlogComponent />
            <Contato />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
