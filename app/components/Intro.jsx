"use client";
import Image from "next/image";
import introImg from "../../public/images/intro.png";
import airbnb from "../../public/images/airbnb.svg";
import pegi from "../../public/images/pegi.svg";
import traveloka from "../../public/images/traveloka.svg";
import searchImg from "../../public/images/search.svg";

// HeadlessUI
import ReactSlider from "react-slider";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AsyncPaginate } from "react-select-async-paginate";
import { loadOptions } from "../api/api";

let filterPos;

function Intro() {
  // Filter
  const [search, setSearch] = useState(null);
  const [rooms, setRooms] = useState(1);
  const [range, setRange] = useState([100, 10000]);

  const filterRef = useRef();

  const [filterTop, setFilterTop] = useState(false);

  // Set filterPos
  useEffect(() => {
    filterPos = parseInt(
      filterRef.current.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top
    );
  }, []);

  // Fix Filters
  useEffect(() => {
    if (window.innerWidth < 1024) return;

    window.addEventListener(
      "scroll",
      () => {
        if (filterPos + document.body.getBoundingClientRect().top < 0)
          setFilterTop(true);
        else setFilterTop(false);
      },
      { passive: true }
    );

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  const pattern = /^[a-zA-Z]+$/;
  const handleOnChange = (el) => {
    if (
      !pattern.test(el.target.value) &&
      el.target.value <= 100 &&
      el.target.value > 0
    ) {
      setRooms(parseInt(el.target.value));
    }
  };

  return (
    <section className="px-10 lg:px-28 lg:flex relative mt-24">
      <div className="flex flex-col max-lg:items-center lg:w-2/5 lg:mr-11 mt-20 max-lg:text-center">
        <h2 className="font-semibold text-5xl lg:text-7xl">
          Let’s start the search for your dream home!
        </h2>
        <p className="text-customgray md:w-3/5 lg:w-4/5 text-lg mt-8">
          Your dream home awaits! This stunning property features all the
          amenities and comfort you desire.
        </p>
        <div className="mt-10 lg:mt-20">
          <h3 className="text-2xl font-bold">Our Partnership</h3>
          <div className="flex mb-10 flex-col sm:flex-row justify-center items-center gap-3 sm:gap-10 mt-5">
            <Image src={airbnb} width={110} height={34} alt="" />
            <Image src={traveloka} width={109} height={34} alt="" />
            <Image src={pegi} width={100} height={20} alt="" />
          </div>
          {/* Filter */}
          <div
            ref={filterRef}
            className={`${
              filterTop
                ? "fixed top-0 w-full bg-sky-50"
                : "absolute md:w-4/5 lg:w-[90%]"
            } ease-in-out duration-500 z-50 left-0 right-0 mx-auto bg-white px-6 md:px-10 py-[30px] flex flex-col lg:flex-row items-center gap-5 xl:gap-14 select-box`}
          >
            <div className="flex flex-col max-lg:items-center relative">
              <h4 className="text-xl font-medium">Locations</h4>
              <AsyncPaginate
                className="mt-4 min-w-[170px] max-w-[170px]"
                placeholder='Type in "Berlin"'
                debounceTimeout={1000}
                value={search}
                onChange={(searchData) => setSearch(searchData)}
                loadOptions={loadOptions}
                styles={{
                  control: () => ({
                    display: "flex",
                  }),
                }}
              />
            </div>
            <div className="select-line w-0.5 lg:w-[1.5px] rotate-90 lg:rotate-0"></div>
            <div className="flex flex-col max-lg:items-center">
              <h4 className="text-xl font-medium">Rooms</h4>
              <div className="flex items-center justify-between bg-white rooms-input">
                <button
                  className="room-b-1 w-10 h-10 bg-contain"
                  onClick={() => {
                    if (rooms < 100) setRooms((prevRooms) => prevRooms + 1);
                  }}
                ></button>
                <input
                  className="outline-none max-w-[2.5rem] text-center text-xl text-[#1b00ea] font-medium"
                  value={rooms}
                  onChange={handleOnChange}
                  type="text"
                />
                <button
                  className="room-b-2 w-10 h-10 bg-contain"
                  onClick={() => {
                    if (rooms > 1) setRooms((prevRooms) => prevRooms - 1);
                  }}
                ></button>
              </div>
            </div>
            <div className="select-line w-0.5 lg:w-[1.5px] rotate-90 lg:rotate-0"></div>
            <div className="flex flex-col max-lg:items-center w-full max-w-sm">
              <div className="w-full flex justify-between">
                <h4 className="text-xl font-medium">Rent Range</h4>
                <h6 className="text-[#1b00ea] ml-14 md:ml-auto font-medium">
                  ${range[0]} - ${range[1]}
                </h6>
              </div>
              <div className="flex items-center mt-4 w-full">
                <ReactSlider
                  className="relative w-full flex items-center h-6 z-[2]"
                  thumbClassName="slider-thumb"
                  trackClassName="slider-track"
                  defaultValue={[1, 100]}
                  onChange={(state) => {
                    setRange([state[0] * 100, state[1] * 100]);
                  }}
                  renderThumb={(props, state) => (
                    <div {...props} key={state.index}></div>
                  )}
                  pearling
                  minDistance={10}
                />
              </div>
            </div>
            {/* ToResidents Link */}
            <Link
              href={{
                pathname: "/residents",
                query: search
                  ? {
                      city: search.additional.city,
                      lat: search.additional.lat,
                      long: search.additional.long,
                      rooms,
                      range1: range[0],
                      range2: range[1],
                    }
                  : {},
              }}
              aria-disabled={!search}
              className={`${
                search
                  ? "bg-[#1B00EA] text-white"
                  : "bg-neutral-300 text-gray-400"
              } flex justify-center items-center mt-4 lg:mt-0 lg:ml-auto px-12 py-5 rounded-[4px]`}
            >
              <h3 className="text-xl font-medium mr-4">Search</h3>
              <Image src={searchImg} width={19} height={19} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2">
        <Image
          className="pos-unset object-contain"
          src={introImg}
          fill
          alt=""
        />
      </div>
    </section>
  );
}

export default Intro;
