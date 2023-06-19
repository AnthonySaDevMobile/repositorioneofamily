'use client'
import { db } from "@/services/firebaseConnection";
import { collection, getDocs } from "firebase/firestore";
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { IoChevronBackCircleSharp } from 'react-icons/io5';
import Modal from 'react-modal';
import Contato from '../Contato';
import Footer from '../Footer';

export default function BlogComponent() {
  
  const collectionRef = collection(db, "blog");
  const [blog, setBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [filtered, setFiltered] = useState(blog);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  const [selectedArticleCategoria, setSelectedArticleCategoria] = useState(null);
  const [showSwiper, setShowSwiper] = useState(true);
  const [articleData, setArticleData] = useState([]);
  const [blogArticles, setBlogArticles] = useState([]);
  const [loadingModalIsOpen, setLoadingModalIsOpen] = useState(false);
  const [articlesUpdated, setArticlesUpdated] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const getArticles = async () => {
      const data = await getDocs(collectionRef);
      const blogData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      setBlog(blogData);
    };

    getArticles();
  }, []);

  
  useEffect(() => {

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {

      clearTimeout(timeout);
      setArticlesUpdated(false);
    };
  }, [articlesUpdated]);

  
  useEffect(() => {
    const getArticles = async () => {
      const data = await getDocs(collectionRef);
      const desiredId = selectedArticleId;
      const blogData = data.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .find((item) => item.id === desiredId);
      setArticleData(blogData ? [blogData] : []);
    };

    getArticles();
  }, [selectedArticleId, selectedArticleCategoria]);
  
  useEffect(() => {
    const getArticles = async () => {
      const data = await getDocs(collectionRef);
      const desiredCategory = selectedArticleCategoria;
  
      const blogData = data.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .filter((item) => item.categoria === desiredCategory && item.id !== selectedArticleId);
  
      setBlogArticles(blogData);
    };
  
    getArticles();
  }, [selectedArticleCategoria, selectedArticleId]);


  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [modalIsOpen]);

  function openModal() {
    setModalIsOpen(true);
    setShowSwiper(false);
  }

  function closeModal() {
    setModalIsOpen(false);
    setShowSwiper(true);
  }

  const handleButtonClick = () => {
    closeModal();
    setArticlesUpdated(true);
  };

  function handleArticle(id, categoria) {
    setSelectedArticleId(id);
    console.log(id)
    setSelectedArticleCategoria(categoria);
    setLoadingModalIsOpen(false)
    openModal();
  }

  return (
    <div className='w-full md:mt-20 mt-10'>
      <main className='w-10/12 m-auto '>

        <div className='md:px-20 px-10 text-[#897876] font-bold text-[2rem] md:text-[3rem] '>
          <p>Sobre o que</p>
          <p>estamos falando?</p>
        </div>

        <div className='flex md:flex-row flex-col gap-8'>
          {blog.slice(0, 4).map((item) => (
        <div key={item.id} className="w-full flex pb-5">
          <div className="bg-[#f4f1ea] flex flex-col justify-between rounded-[4rem] text-center">
            <div className="w-full">
              <img src={item.imagem} alt="back" className="w-full rounded-[4rem] h-[200px] object-cover" />
            </div>

            <div className="pt-5 text-[#91817f] flex flex-col px-8 py-10 gap-5 relative">
              <h1 className="text-[#d6b19f]">{item.titulo}</h1>
              <p>{item.resumo}</p>
              <div className='flex  w-full items-center justify-center'>
                <button onClick={() => handleArticle(item.id, item.categoria)} className='text-white bg-[#d6b19f] rounded-3xl w-6/12 text-sm -bottom-4 absolute py-2'>Continuar lendo</button>
              </div>
            </div>

          </div>
        </div>
      ))}
        </div>
        <div className='mt-10 text-center'>
          <Link href='/blog'>
          <button  className='w-fit bg-[#897876] text-[#f3f0e9] rounded-full py-2 px-8'>Ver todos</button>
          </Link>
        </div>
      </main>
      <Modal
        isOpen={modalIsOpen}
        ref={modalRef}
        onRequestClose={closeModal}
        className='h-full w-full z-50'
      >
        {loadingModalIsOpen ? <div className="flex gap-2 items-center justify-center h-full">
          <p>Carregando</p>
          <p className="animate-pulse text-3xl mr-1 mb-3" style={{ animationDelay: '0s' }}>.</p>
          <p className="animate-pulse text-3xl mr-1 mb-3" style={{ animationDelay: '0.5s' }}>.</p>
          <p className="animate-pulse text-3xl mr-1 mb-3" style={{ animationDelay: '1s' }}>.</p>
        </div> : (<div className='bg-[#ece8dd] h-full' style={{ overflowY: 'auto' }}>
          {articleData.map((item) => (
            <div key={item.id}>
              <div className="w-full lg:h-[500px] h-[300px] relative">
                <img src={item.imagem} alt="Imagem" className='h-full object-cover w-full lg:rounded-b-[8rem] rounded-b-3xl brightness-75' />
                <div className='absolute w-full h-[100px] top-1/2 z-20 flex items-center'>
                  <div className='w-10/12 m-auto h-fit text-3xl md:text-[3rem] text-white font-extrabold'>
                    <p>{item.titulo}</p>
                  </div>
                </div>
              </div>
              <div className='w-10/12 mt-10 m-auto flex items-center md:gap-40 gap-10 h-fit'>
                <div className='w-fit px-4 py-2 h-fit rounded-[3rem] bg-[#897876] flex gap-2 items-center'>
                  <IoChevronBackCircleSharp color='#fff' />
                  <button className='text-[#d6b19f]' onClick={() => handleButtonClick()}>Voltar</button>
                </div>

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
              {blogArticles.length < 1 ?
                <div className="flex gap-2 items-center justify-center h-full">
                  <p>Ainda não há artigos relacionados ao assunto</p>
                  <p className="animate-pulse text-3xl mr-1 mb-3" style={{ animationDelay: '0s' }}>.</p>
                  <p className="animate-pulse text-3xl mr-1 mb-3" style={{ animationDelay: '0.5s' }}>.</p>
                  <p className="animate-pulse text-3xl mr-1 mb-3" style={{ animationDelay: '1s' }}>.</p>
                </div>
                : (<div className='flex gap-5 flex-col justify-start items-center md:flex-row md:w-10/12 m-auto'>
                  {blogArticles.slice(0, 3).map((item) => (
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
                              <button onClick={() => {
                                setModalIsOpen(false); // Fechar o modal
                                setIsLoading(true); // Definir o estado de carregamento como true
                                setTimeout(() => {
                                  setShowSwiper(false);
                                  handleArticle(item.id, item.categoria);
                                }, 300); // Atraso de 300ms para permitir que o modal seja fechado antes de chamar handleArticle
                              }} className='text-white bg-[#d6b19f] rounded-3xl w-6/12 text-sm -bottom-4 absolute py-2'>
                                Continuar lendo
                              </button>
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
        </div>)}

      </Modal>
    </div>
  )
}
