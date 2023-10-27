"use client";
import Image from "next/image";
import Link from "next/link";

import menu from "../../public/images/menu.svg";
import xMark from "../../public/images/x-mark.svg";
import { useState } from "react";

function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <nav className="px-8 min-[500px]:px-28 mt-10 color-[#191726]">
      {/* Mobile */}
      <div
        className={`${
          menuOpened ? "" : "hidden"
        } pt-5 bg-slate-50 fixed left-0 top-0 w-screen h-screen z-[51]`}
      >
        <button className="ml-5" onClick={() => setMenuOpened(false)}>
          <Image src={xMark} width={60} height={60} alt="" />
        </button>
        <div className="w-full mt-3 h-[2px] bg-[#d2d3d495]"></div>
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
            <Link href="/residents">Residents</Link>
          </h1>
          <h1
            className="mt-4 text-2xl font-semibold"
            onClick={() => setMenuOpened(false)}
          >
            <Link href="/">Services</Link>
          </h1>
        </div>
        <div className="w-full my-4 h-[2px] bg-[#d2d3d495]"></div>
        <div className="px-4">
          <h1
            onClick={() => setMenuOpened(false)}
            className="text-center py-3 rounded-lg bg-customblue text-base font-semibold text-white"
          >
            <Link href="/register">Register</Link>
          </h1>
          <h1
            onClick={() => setMenuOpened(false)}
            className="py-3 rounded-lg mt-3 text-[#344054] text-base font-semibold border border-[#D0D5DD] text-center"
          >
            <Link href="/login">Login</Link>
          </h1>
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
          <Link href="/residents" className="mr-10">
            Residents
          </Link>
          <Link href="/" className="mr-10">
            Services
          </Link>
        </div>
        <div className="hidden xl:block">
          <Link href="/register" className="mr-5">
            Register
          </Link>
          <Link
            href="/login"
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
