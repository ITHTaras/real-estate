import Image from "next/image";
import Link from "next/link";

import menu from "../../public/images/menu.svg";

function Navbar() {
  return (
    <nav className="px-8 min-[500px]:px-28 mt-10 color-[#191726]">
      <div className="flex justify-between items-center max-w-[100%]">
        <h1 className="text-3xl font-bold">
          Rent<span className="text-[#1B00EA]">Wonder</span>
        </h1>
        <div className="hidden xl:flex justify-center items-center">
          <Link href="/" className="mr-10">
            Home
          </Link>
          <Link href="/" className="mr-10">
            About Us
          </Link>
          <Link href="/reviews" className="mr-10">
            Reviews
          </Link>
          <Link href="/residents" className="mr-10">
            Residents
          </Link>
          <Link href="/" className="mr-10">
            Services
          </Link>
        </div>
        <div className="hidden xl:block">
          <Link href="/" className="mr-5">
            Register
          </Link>
          <Link
            href="/"
            className="bg-[#1B00EA] text-white rounded-[4px] px-12 py-3"
          >
            Login
          </Link>
        </div>
        <button className="block xl:hidden min-w-[24px]">
          <Image src={menu} width={24} height={24} alt="" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
