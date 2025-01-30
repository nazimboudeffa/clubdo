"use client";

import Image from 'next/image';
import logo from '@/assets/logo.png';
import carte from '@/assets/carte-300x190.jpg';
import { names } from '@/lib/liste-name';

export default function Home() {
  
  const playAudio = () => {
    const audio = new Audio("/assets/sound.mp3");
    audio.play();
  };

  return (
    <>
    <div className="bg-sky-200 min-h-screen flex items-center justify-center px-16">
      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
    </div>
    <div className="absolute top-0 text-center">
      <h1 className="text-4xl font-bold text-gray-800">Clique sur le logo !</h1>
      <ul className="mt-4">
        {names.map((name, index) => (
          <li key={index} className="text-xl text-gray-700">{name}</li>
        ))}
      </ul>
    </div>
    <button className="absolute bottom-10 left-0"
      onClick={playAudio}
    >
      <Image src={logo} alt="logo" width={200} height={200} />
    </button>
    <div className="absolute bottom-10 right-0">
      <Image src={carte} alt="carte" width={300} height={190} />
    </div>
    </>
  );
}
