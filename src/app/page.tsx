import Navbar from "@/app/component/Navbar";
import Footer from "@/app/component/footer"

import Image from 'next/image';


export default function HomePage() {
  return (
    <div
    className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white "
    style={{ backgroundImage: "url('/bg.jpg')" }}
  >
      <Navbar />
  
      <main className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 pt-20">
        <Image
          src="/ii.jpg"
          alt="Profile"
          width={160}
          height={160}
          className="rounded-full mb-6 shadow-lg border-4 border-blue-200"
        />

        <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4 leading-tight animate-fade-in bg-opacity-60 p-8 rounded-lg">
          Hi, I'm <span className="text-white">Ariba Rahim</span>
        </h1>
        <p className="text-lg sm:text-xl text-white b-6 max-w-xl">
          I’m a full-stack developer who builds clean and modern web applications.
        </p>
        <a
          href="/projects"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-md"
        >
          View My Projects
        </a>
      </main>

      <Footer/>
      </div>
  );
}




