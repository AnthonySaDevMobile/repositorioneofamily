'use client'
import { auth } from '@/services/firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [text, setText] = useState('Entrar');
  
    const handleLogin = async (e) => {
      e.preventDefault();
      setText('Entrando...');
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('correto');
        router.push('/write'); // Redirecionar para a página "/write" após o login bem-sucedido
      } catch (error) {
        setText('Dados incorretos!');
        // Tratar erro de login
      }
    };
  
    return (
      <div className="flex bg-[#897876] flex-col items-center justify-center h-screen">
        <h2 className="text-lg font-extrabold text-white">Login para Painel de Edições</h2>
        <div className="mt-10">
          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              className="p-3 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="bg-blue-600 text-white rounded p-4 font-bold">
              {text}
            </button>
          </form>
        </div>
      </div>
    );
  }