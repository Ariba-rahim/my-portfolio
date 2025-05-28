
import Navbar from "@/app/component/Navbar";
import Footer from "@/app/component/footer"

import Image from 'next/image';


export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="p-8 bg-white min-h-screen pt-20 px-6 md:px-12">
        <h2 className="text-4xl font-bold text-blue-800 mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
          <div className="bg-blue-50 rounded-xl shadow-md p-4 hover:shadow-lg transition">
            <Image
              src="/images/project1.jpg"
              alt="Project 1"
              width={400}
              height={250}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-900">Project One</h3>
            <p className="text-blue-800 mt-2">A brief description of this amazing project.</p>
          </div>

       
        </div>
    
      </main>
      < Footer/>
    </>
  );
}

