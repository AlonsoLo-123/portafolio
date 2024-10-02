import CV from '../assets/documents/pdf/Cv-Alonso-Lopez-Olguin.pdf';
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { IoMdDownload } from "react-icons/io";

export const buttomButtons = [
    { text: "GitHub", icon: <FaGithub className='h-full w-full' color='white'/>, url: "https://github.com/AlonsoLo-123", color: "border-black"},
    { text: "Linkedin", icon: <CiLinkedin className='h-full w-full' color='white'/>, url: "https://mx.linkedin.com/in/alonso-lópez-olguín-845094302", color: "border-blue-lime"},
    { text: "Pagina Web", icon: <TbWorldWww className='h-full w-full' color='white'/>, url: "https://alonsolo-123.github.io/portafolio/", color: "border-green-lime"},
    { text: "Curriculum vitae", icon: <IoMdDownload className='h-full w-full' color='white'/>, url: CV, color: "border-red-lime"}
]