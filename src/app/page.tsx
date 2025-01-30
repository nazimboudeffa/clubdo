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
    <>
    <div className="flex flex-col items-center">
      <h1 className="text-4xl">Clique sur le bouton pour écouter le son</h1>
      <button className="text-center rounded-md bg-blue-500 text-white px-4 py-2 mt-4"
        onClick={playAudio}
      >
        Play!
      </button>
      <ul className="mt-4">
        {names.map((name, index) => (
          <li key={index} className="text-xl text-gray-700">{name}</li>
        ))}
      </ul>
    </div>
    <div className="flex flex-col items-center">
      <div className="text-center">
        <Image src={logo} alt="logo" width={200} height={200} />
      </div>
      <div className="text-center">
        <Image src={carte} alt="carte" width={300} height={190} />
      </div>
    </div>
    <div className="flex flex-col items-centerr">
      <p className="text-center text-gray-800">© 2025 - Club Dorothée</p>
      <p className='text-center'>Fait avec des 🥐 sur <Link href="https://github.com/nazimboudeffa/clubdo" className="underline">GitHub</Link></p>
    </div>
    </>
  );
}
