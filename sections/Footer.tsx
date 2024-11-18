import logo from "@/public/logosaas.png";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faPinterest,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";


const socialICons =[faInstagram,
  faLinkedin,
  faXTwitter,
  faYoutube]

export const Footer = () => {
  return (
    <section className="bg-black py-4">
      <div className="container mx-auto w-full flex flex-col items-center justify-center gap-8">
        <Image src={logo} alt="logo" height={40} />
        <nav className="text-white flex flex-col gap-2 text-center md:flex-row md:gap-10">
          <Link className="opacity-60" href="#">
            About
          </Link>
          <Link className="opacity-60" href="#">
            Features
          </Link>
          <Link className="opacity-60" href="#">
            Customers
          </Link>
          <Link className="opacity-60" href="#">
            Help
          </Link>
        </nav>
        <div className="icons text-gray-300 flex gap-5">
          {socialICons.map((item,index)=> <FontAwesomeIcon icon={item} key={index} className="h-7 w-7"/>)}
        </div>
        <span className="text-white text-sm">&copy; 2024 Shrewit Inc, All right reserved.</span>
      </div>
    </section>
  );
};
