import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";

function Footer(){

return(
    <footer className="flex justify-center py-8">
        <div className="flex gap-6">

            <a
            href="https://github.com/Rxn321"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent text-white hover:scale-110 transition">
            <FaGithub size={30} />
            </a>

            <a
            href="https://www.linkedin.com/in/ryantyl/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent text-white hover:scale-110 transition">
            <TiSocialLinkedinCircular size={40} />
            </a>

        </div>

    </footer>
)

}

export default Footer;