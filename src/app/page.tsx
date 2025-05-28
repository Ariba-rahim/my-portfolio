import Navbar from "@/app/component/Navbar";
import Footer from "@/app/component/footer"

import Image from 'next/image';


export default function HomePage() {
  return (
        
    <div
    className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col text-white h-screen"
    style={{ backgroundImage: "url('/bg.jpg')" }}
  >
    <Navbar />
  
      <main className="flex flex-col lg:flex-row items-start justify-start flex-grow pt-36 pl-40">
        <Image
          src="/pp.png"
          alt="Profile"
          width={300}
          height={400}
          className="border-4 border-blue-500 shadow-lg"
        />
<div className="text-white  pl-14 leading-relaxed max-w-4xl">
        <h1 className="text-5xl font-extrabold leading-tight drop-shadow-black mb-6 text-shadow-black">
          Hi, I'm <span className="text-white">Ariba Rahim</span>
        </h1>
        <p className=" leading-relaxed mb-6 text-white/90 text-3xl shadow-black max-w-4xl font-bold">
          I’m a full-stack developer who builds clean and modern web applications.
        </p>
        <a
          href="/projects"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition duration-300 shadow-md justify-center"
        >
          View My Projects
        </a>
        </div>
      </main>
  <Footer/>
      </div>
    
      
  );
}




