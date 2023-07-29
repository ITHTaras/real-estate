import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-1 max-md:text-center md:grid-cols-2 min-[860px]:grid-cols-3 lg:grid-cols-6 gap-16 mt-36 px-28">
        <div className="lg:col-span-2 lg:self-center">
          <h1 className="text-3xl font-bold lg:mt-3 mb-3">
            Rent<span className="text-[#1B00EA]">Wonder</span>
          </h1>
          <p className="text-base text-customgray">
            RentWonder is the best place to buy and rent your dream home
            throughout Indonesia
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-4 text-xl font-bold">For Beginner</h3>
          <Link className="text-customgray mt-2" href="/about">
            About
          </Link>
          <Link className="text-customgray mt-2" href="/career">
            Career
          </Link>
          <Link className="text-customgray mt-2" href="/promotion">
            Promotion
          </Link>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-4 text-xl font-bold">Overview</h3>
          <Link className="text-customgray mt-2" href="/residents">
            Products
          </Link>
          <Link className="text-customgray mt-2" href="/categories">
            Categories
          </Link>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-4 text-xl font-bold">Explore Us</h3>
          <Link className="text-customgray mt-2" href="/career">
            Our Career
          </Link>
          <Link className="text-customgray mt-2" href="/privacy">
            Privacy
          </Link>
          <Link className="text-customgray mt-2" href="/terms">
            Terms & Conditions
          </Link>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-4 text-xl font-bold">Connect Us</h3>
          <Link
            className="text-customgray mt-2"
            href="mailto:support@rentwonder.com"
          >
            support@rentwonder.com
          </Link>
          <Link className="text-customgray mt-2" href="tel:+380 66 708 3768">
            066 - 708 - 3768
          </Link>
          <h6 className="text-customgray mt-2">Lutsk, Ukraine</h6>
        </div>
      </div>
      <div className="flex justify-center mt-12 text-customgray">
        Copyright 2023 • Made by
        <Link
          className="ml-1 font-medium underline"
          href="https://github.com/ITHTaras"
        >
          ITHTaras
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
