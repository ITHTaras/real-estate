"use client";
import Image from "next/image";
import Link from "next/link";

import menu from "../../public/images/menu.svg";
import xMark from "../../public/images/x-mark.svg";
import loginIcon from "../../public/images/login.svg";
import { useState } from "react";

function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <nav className="px-8 min-[500px]:px-28 mt-10 color-[#191726]">
      <div
        className={`${
          menuOpened ? "" : "hidden"
        } pt-5 bg-slate-50 fixed left-0 top-0 w-screen h-screen z-[51]`}
      >
        <button className="ml-5" onClick={() => setMenuOpened(false)}>
          <Image src={xMark} width={60} height={60} alt="" />
        </button>
        <div className="w-full mt-3 h-[2px] bg-slate-600"></div>
        <div className="flex flex-col ml-9 mt-3">
          <h1
            className="mt-4 text-2xl font-semibold"
            onClick={() => setMenuOpened(false)}
          >
            <Link href="/">Home</Link>
          </h1>
          <h1
            className="mt-4 text-2xl font-semibold"
            onClick={() => setMenuOpened(false)}
          >
            <Link href="/about">About Us</Link>
          </h1>
          <h1
            className="mt-4 text-2xl font-semibold"
            onClick={() => setMenuOpened(false)}
          >
            <Link href="/reviews">Reviews</Link>
          </h1>
          <h1
            className="mt-4 text-2xl font-semibold"
            onClick={() => setMenuOpened(false)}
          >
            <Link href="/residents">Residents</Link>
          </h1>
          <h1
            className="mt-4 text-2xl font-semibold"
            onClick={() => setMenuOpened(false)}
          >
            <Link href="/">Services</Link>
          </h1>
        </div>
        <div className="w-full mt-4 h-[2px] bg-slate-600"></div>
        <div className="mt-4 ml-6 flex">
          <Image
            className="max-h-9"
            src={loginIcon}
            width={36}
            height={36}
            alt=""
          />
          <div className="flex flex-col">
            <h1
              onClick={() => setMenuOpened(false)}
              className="text-2xl font-semibold"
            >
              <Link href="/">Register</Link>
            </h1>
            <h1
              onClick={() => setMenuOpened(false)}
              className="text-2xl font-semibold mt-3"
            >
              <Link href="/">Login</Link>
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center max-w-[100%]">
        <h1 className="text-3xl font-bold">
          Rent<span className="text-customblue">Wonder</span>
        </h1>
        <div className="hidden xl:flex justify-center items-center">
          <Link href="/" className="mr-10">
            Home
          </Link>
          <Link href="/about" className="mr-10">
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
            className="bg-customblue text-white rounded-[4px] px-12 py-3"
          >
            Login
          </Link>
        </div>
        <button
          onClick={() => setMenuOpened(true)}
          className="block xl:hidden min-w-[24px]"
        >
          <Image src={menu} width={24} height={24} alt="" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
