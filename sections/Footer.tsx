import logo from "@/public/logosaas.png";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <section className="bg-black">
      <div className="container mx-auto w-full">
        <Image src={logo} alt="logo" height={40} />
        <nav>
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
      </div>
    </section>
  );
};
