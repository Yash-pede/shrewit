import ArrowRight from "@/public/arrow-right.svg";
import Logo from "@/public/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/public/menu.svg";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 z-[100] backdrop-blur-sm">
      <div className="flex justify-center items-center py-3 gap-3 bg-black text-white text-sm">
        <div className="inline-flex gap-1 items-center">
          <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity</p>
          <p>Get Started for Free</p>
          <ArrowRight className="size-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="p-5 ">
        <div className="">
          <div className="flex justify-between items-center">
            <Image src={Logo} alt="logo" height={40} width={40} />
            <MenuIcon className="size-5 md:hidden" />
            <nav className="hidden md:inline-flex items-center justify-center gap-6 text-black">
              <Link className="opacity-60" href="#">About</Link>
              <Link className="opacity-60" href="#">Features</Link>
              <Link className="opacity-60" href="#">Customers</Link>
              <Link className="opacity-60" href="#">Help</Link>

              <button className="inline-flex h-10 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors">
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
