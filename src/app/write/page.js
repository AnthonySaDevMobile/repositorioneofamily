'use client'
import {
    collection,
    getDocs,
    addDoc,
    doc,
    deleteDoc,
    query
} from "firebase/firestore";
import { db, storage } from "@/services/firebaseConnection";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { FaUpload, FaTrash } from "react-icons/fa";
import Logo from '../../../public/logoHeader.png';


export default function Write() {

    const collectionRef = collection(db, "blog");
    const mapRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [edit, setEdit] = useState(false);
    const [blog, setBlog] = useState([]);
    const [avatarUrl, setAvatarUrl] = useState("");
    const [avatar, setAvatar] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const [image, setImage] = useState(null);
    const [categoria, setCategoria] = useState("");
    const [formacao, setFormacao] = useState("");
    const [nome_do_profissional, setNome_do_profissional] = useState("");
    const [resumo, setResumo] = useState("");
    const [titulo, setTitulo] = useState("");
    const [subtitulo, setSubtitulo] = useState("");
    const [texto_inicial, setTexto_inicial] = useState("");
    const [texto_final, setTexto_final] = useState("");
    const [textButton, setTextButton] = useState("Enviar Artigo!");
    const [textEdit, setTextEdit] = useState("Editar Artigos");


    useEffect(() => {
        const getBlog = async () => {
            const data = await getDocs(collectionRef);
            const blogData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setBlog(blogData);
        };
        getBlog();
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    async function sendArticle(e) {
        e.preventDefault();
        setTextButton("Enviando...")
        const imageUrlFirebase = await handleUpload();
        const avatarUrlFirebase = await handleUploadAvatar();
        const blogData = {
            nome_do_profissional: nome_do_profissional,
            formacao: formacao,
            categoria: categoria,
            titulo: titulo,
            resumo: resumo,
            texto_inicial: texto_inicial,
            subtitulo: subtitulo,
            texto_final: texto_final,
            imagem: imageUrlFirebase,
            avatar: avatarUrlFirebase,
        };

        await addDoc(collection(db, "blog"), blogData);
        const blogQuery = query(collection(db, "blog"));
        const blogSnapshot = await getDocs(blogQuery);
        const updatedBlog = blogSnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        setBlog(updatedBlog);
        setImage(null);
        setImageUrl("");
        setAvatar(null);
        setAvatarUrl("");
        setTextButton("Enviado!");
    }

    async function handleUpload() {
        if (imageUrl !== null) {
            const imagesRef = ref(storage, `imagesArticles/${image.name}`);
            const uploadTask = uploadBytesResumable(imagesRef, image);

            await new Promise((resolve, reject) => {
                uploadTask.on(
                    "state_changed",
                    (snapshot) => { },
                    (error) => {
                        reject(error);
                    },
                    () => {
                        resolve();
                    }
                );
            });
            const urlAvatar = await getDownloadURL(imagesRef);
            return urlAvatar;
        }
        return null;
    }
    async function handleUploadAvatar() {
        if (avatarUrl !== null) {
            const imagesRef = ref(storage, `imagesAvatar/${avatar.name}`);
            const uploadTask = uploadBytesResumable(imagesRef, avatar);

            await new Promise((resolve, reject) => {
                uploadTask.on(
                    "state_changed",
                    (snapshot) => { },
                    (error) => {
                        reject(error);
                    },
                    () => {
                        resolve();
                    }
                );
            });

            const urlAvatar = await getDownloadURL(imagesRef);
            return urlAvatar;
        }
        return null;

    }

    async function deleteItem(id) {
      
        try {
            const itemRef = doc(db, "blog", id);
            await deleteDoc(itemRef);

            setBlog((prevBlog) => prevBlog.filter((item) => item.id !== id));
        } catch (error) {

        }
    }

    function handleFileAvatar(e) {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            if (image.type === "image/jpeg" || image.type === "image/png") {
                setAvatar(image);
                setAvatarUrl(URL.createObjectURL(e.target.files[0]));
            } else {
                alert("Envie uma imagem do tipo PNG ou JPEG");
                setAvatar(null);
                return null;
            }
        }
    }

    const handleClick = () => {
        setEdit(!edit);
        if (mapRef.current) {
            mapRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    function handleFileImage(e) {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            if (image.type === "image/jpeg" || image.type === "image/png") {
                setImage(image);
                setImageUrl(URL.createObjectURL(e.target.files[0]));
            } else {
                alert("Envie uma imagem do tipo PNG ou JPEG");
                setImage(null);
                return null;
            }
        }
    }

    return (
        <div className="h-screen w-full">
            <main className="bg-[#ece8dd] flex flex-col items-center w-full h-fit">
                <div className="text-white bg-[#897876] w-full text-center h-fit pb-8">
                    <div className="flex flex-col items-center justify-center">

                        <h1 className="my-4 text-[4rem]">BLOG</h1>

                        <div className="flex justify-center">
                            <Image src={Logo} alt="logo" className="w-5/12 md:w-1/12 h-1/2 mb-2 object-cover" />
                        </div>
                    </div>

                    <p>Escreva seu artigo e compartilhe seu conhecimento com a comunidade:</p>
                </div>

                <form className="md:w-9/12 bg-[#f4f1ea] m-auto h-fit text-center flex flex-col gap-3 pb-20 pt-10 px-5 border-4 border-t-0 border-[#897876]" onSubmit={sendArticle}>

                    <div>
                        <h1>Imagem do Atigo</h1>
                        <label className="md:w-9/12 m-auto h-[300px] z-10 bg-[#d6b19f] rounded flex items-center justify-center cursor-pointer">
                            <span className="absolute opacity-20">
                                <FaUpload size={30} />
                            </span>
                            <input
                                required
                                className="hidden"
                                type="file"
                                onChange={handleFileImage}
                            />
                            {
                                imageUrl == '' ? <></> :
                                    <img
                                        src={imageUrl}
                                        className="w-full h-full object-cover"
                                        alt="Foto do Artigo"
                                    />
                            }
                        </label>
                    </div>
                    <div>
                        <h1>Foto de Perfil:</h1>
                        <label className="md:w-3/12 w-9/12 m-auto h-[200px] z-10 bg-[#d6b19f] rounded flex items-center justify-center cursor-pointer">
                            <span className="absolute opacity-20">
                                <FaUpload size={30} />
                            </span>
                            <input
                                required
                                className="hidden"
                                type="file"
                                onChange={handleFileAvatar}
                            />
                            {
                                avatarUrl == '' ? <></> :
                                    <img
                                        src={avatarUrl}
                                        className="w-full h-full object-cover"
                                        alt="Foto de Perfil"
                                    />
                            }
                        </label>
                    </div>
                    <div className="md:w-6/12 m-auto flex flex-col gap-5">
                        <div className="flex justify-between gap-2 w-full">
                            <input type="text" className="p-2 border-2 w-1/2 rounded-lg border-gray-400" placeholder="Nome:" onChange={(e) => setNome_do_profissional(e.target.value)} />
                            <input type="text" className="p-2 border-2 w-1/2 rounded-lg border-gray-400" placeholder="Formação:" onChange={(e) => setFormacao(e.target.value)} />
                        </div>
                        <input type="text" required className="p-2 border-2 rounded-lg border-gray-400" placeholder="Categoria:" onChange={(e) => setCategoria(e.target.value)} />
                        <input type="text" required className="p-2 border-2 rounded-lg border-gray-400" placeholder="Título:" onChange={(e) => setTitulo(e.target.value)} />
                        <textarea type="text" required className="p-2 resize-none border-2 rounded-lg h-[200px] border-gray-400" placeholder="Resumo:" onChange={(e) => setResumo(e.target.value)} />
                        <textarea type="text" required className="p-2 resize-none border-2 rounded-lg h-[400px] border-gray-400" placeholder="Texto Inicial:" onChange={(e) => setTexto_inicial(e.target.value)} />
                        <input type="text" className="p-2 border-2 rounded-lg border-gray-400" placeholder="SubTítulo:" onChange={(e) => setSubtitulo(e.target.value)} />
                        <textarea type="text" className="p-2 resize-none border-2 rounded-lg h-[400px] border-gray-400" placeholder="Texto Final:" onChange={(e) => setTexto_final(e.target.value)} />
                    </div>
                    <div className="mt-2 w-full ">
                        <button className="bg-[#897876] rounded text-white p-4">{textButton}</button>
                    </div>
                </form>
                <button onClick={handleClick} className="bg-[#897876] mt-20 rounded text-white p-4">{textEdit}</button>

       {edit ? (
  loading ? (
    <div className="w-full h-fit flex items-center md:absolute md:left-1/2 gap-3 py-10 justify-start">
      <p>Buscando Posts</p>
      <div className="flex">
        <div className="animate-pulse text-3xl mr-1" style={{ animationDelay: '0s' }}>.</div>
        <div className="animate-pulse text-3xl mr-1" style={{ animationDelay: '0.5s' }}>.</div>
        <div className="animate-pulse text-3xl mr-1" style={{ animationDelay: '1s' }}>.</div>
      </div>
    </div>
  ) : (
    <div className="flex flex-wrap justify-center md:grid md:grid-cols-2 gap-4 md:w-6/12 m-auto mt-20">
      {blog.map((item) => (
        <div key={item.id} className="w-full flex pb-5">
          <div className="bg-[#f4f1ea] flex flex-col justify-between rounded-[4rem] text-center">
            <div className="w-full">
              <img src={item.imagem} alt="back" className="w-full rounded-[4rem] h-[200px] object-cover" />
            </div>

            <div className="pt-5 text-[#91817f] flex flex-col px-8 py-10 gap-5 relative">
              <h1 className="text-[#d6b19f]">{item.titulo}</h1>
              <p>{item.resumo}</p>
 
            </div>

            <span className="flex mt-10 flex-col items-center gap-4">
              <FaTrash color="red" />
              <p>Deletar</p>
            </span>
          </div>
        </div>
      ))}
    </div>
  )
) : (
  <></>
)}
            </main>
        </div>
    )
}
