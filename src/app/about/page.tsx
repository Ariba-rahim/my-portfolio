import Footer from "../component/footer";
import Navbar from "../component/Navbar";

export default function AboutPage() {
  return (
    <main className="pt-20 min-h-screen bg-blue-200 text-gray-800 px-9 md:px-12 w-full  ">
      <Navbar/>
      <section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
      
        <div className="w-full md:w-1/2">
          <img
            src="/about.jpg" 
            alt="Profile"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>

 
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">About Me</h1>
          <p className="text-lg leading-relaxed text-gray-600 ">
            I'm a passionate web developer with a love for crafting responsive,
            user-friendly websites using modern technologies like Next.js,
            React, and Tailwind CSS.
          </p>
          <p className="text-lg leading-relaxed text-gray-600 mt-4">
            I enjoy building beautiful, functional websites and applications,
            and I'm always learning new tools and techniques to improve my craft. 
            I am a student an governer sindh IT Initative.
          </p>
        </div>
      </section>
      <Footer/>
    </main>
  
  );
}


