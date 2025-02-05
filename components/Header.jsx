import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./nav"; // Import the Nav component

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Gil<span className="text-accent">.</span>
          </h1>
        </Link>


        {/* Desktop Nav and hire me btn */}
        <div className="hidden xl:flex">
        <Nav />
        <>
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </>
        </div>
      </div>
    </header>
  );
};

export default Header;