"use client";

import Image from 'next/image';
import logo from '@/assets/logo.png';
import carte from '@/assets/carte-300x190.jpg';
import { names } from '@/lib/liste-name';
import Link from 'next/link';

export default function Home() {
  
  const playAudio = () => {
    const audio = new Audio("/assets/sound.mp3");
    audio.play();
  };

  return (
    <div className="bg-sky-500 min-h-screen flex flex-col items-center justify-center px-16">
      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-center">
          <Image src={logo} alt="logo" width={200} height={200} />
        </div>
        <h1 className="text-4xl">Joyeux anniversaire !</h1>
        <button className="text-center rounded-md bg-blue-500 text-white px-4 py-2 mt-4"
          onClick={playAudio}
        >
          Play!
        </button>
        <ul className="text-center mt-4">
          {names.map((name, index) => (
            <li key={index} className="text-xl text-gray-700">{name}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between items-center p-5">
        <div className="text-center">
          <Image src={carte} alt="carte" width={300} height={190} />
        </div>
      </div>
      <div className="flex flex-col items-center mb-5">
        <p className="text-center text-gray-800">© 2025 - Je sais pas qui mais après avoir regardé MERCI DOROTHEE</p>
        <p className='text-center'>Fait avec des 🥐 sur <Link href="https://github.com/nazimboudeffa/clubdo" className="underline">GitHub</Link></p>
      </div>
    </div>
  );
}
