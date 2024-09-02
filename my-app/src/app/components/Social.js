import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";

export default function Social() {
  return (
    <div className="w-full flex flex-row items-center py-4 space-x-4">
      <a
        className="HoverIcon"
        href="https://github.com/JhongLi91?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={25} />
      </a>
      <a
        className="HoverIcon"
        href="https://www.linkedin.com/in/jian-hong-li-557392291/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoLinkedin size={30} />
      </a>
      <a
        className="HoverIcon"
        href="/Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoDocumentText size={30} />
      </a>
    </div>
  );
}
