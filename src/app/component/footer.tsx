import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="  text-center mt-12  px-4 w-full bg-blue-100 text-blue-900 py-6">
      <div className="flex justify-center space-x-10 ">
        <a href="https://github.com/Ariba-rahim" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-blue-700 transition" />
          <span>Ariba-rahim</span>
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-blue-700 transition" />
          <span></span>
        </a>
        <a href="mailto:ariba.rahimkhn@gmail.com">
          <FaEnvelope className="text-2xl hover:text-blue-700 transition" />
          <span>ariba.rahimkhan@gmail.com</span>
        </a>
      </div>
      <p className="text-sm mt-2">© {new Date().getFullYear()} Ariba Rahim</p>
    </footer>
  );
}
