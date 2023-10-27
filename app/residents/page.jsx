"use client";
import ReactSlider from "react-slider";
import { AsyncPaginate } from "react-select-async-paginate";
import { useSearchParams } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { residents } from "../data";
import Image from "next/image";
import starIcon from "../../public/images/star.svg";
import sofaImg from "../../public/images/sofa.svg";
import Link from "next/link";
import { loadOptions } from "../api/api";

import "../products.css";
import Map from "../components/Map";

let mapPos;

function Page() {
  // URL Params
  const searchParams = useSearchParams();

  // Map fixing
  const mapRef = useRef();
  const pageRef = useRef();

  const [mapFixed, setMapFixed] = useState(false);
  const [freezeMap, setFreezeMap] = useState(false);

  useEffect(() => {
    if (typeof window == undefined) return;
    if (window.innerWidth < 768) return;

    mapPos =
      mapRef.current.getBoundingClientRect().top -
      document.body.getBoundingClientRect().top;

    window.addEventListener("scroll", () => {
      if (typeof window === undefined) return;
      if (!pageRef.current) return;

      if (mapPos + document.body.getBoundingClientRect().top <= 0) {
        setMapFixed(true);

        const hasHitBottom =
          pageRef.current.getBoundingClientRect().bottom - window.innerHeight;

        // if the bottom of the screen reached the bottom of an element
        if (hasHitBottom <= 0) {
          setFreezeMap(pageRef.current.offsetHeight - window.innerHeight);
        } else {
          setFreezeMap(false);
        }
      } else {
        setMapFixed(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  // Filter
  const [search, setSearch] = useState({
    lat: searchParams.get("lat") ? searchParams.get("lat") : 52.520078,
    long: searchParams.get("long") ? searchParams.get("long") : 13.404902,
    name: searchParams.get("city") ? searchParams.get("city") : "Berlin",
  });
  const [rooms, setRooms] = useState(
    searchParams.get("rooms") ? parseInt(searchParams.get("rooms")) : 1
  );
  const [maxArea, setMaxArea] = useState(30);
  const [range, setRange] = useState([
    searchParams.get("range1") ? searchParams.get("range1") : 100,
    searchParams.get("range2") ? searchParams.get("range2") : 10000,
  ]);

  // Handlers
  const handleOnRoomsChange = (el) => {
    if (
      !Number.isNaN(el.target.value) &&
      el.target.value <= 100 &&
      el.target.value > 0
    ) {
      setRooms(parseInt(el.target.value));
    }
  };
  const handleOnMaxAreaChange = (el) => {
    if (el.target.value === "") setMaxArea(1);
    else if (
      Number.isInteger(+el.target.value) &&
      +el.target.value > 0 &&
      +el.target.value <= 100
    ) {
      setMaxArea(el.target.value);
    } else if (+el.target.value === 0) {
      setMaxArea(1);
    }
  };
  const handleProductClick = (lat, long) => {
    window.scrollTo({
      top: mapRef.current.offsetTop,
      behavior: "smooth",
    });
    setSearch({
      ...search,
      lat,
      long,
    });
  };

  // Sort Residents
  const sortedResidents = residents.filter((resident) => {
    const earthRadiusKm = 6371;
    const degToRad = 0.017453;

    const dLat = degToRad * (resident.lat - search.lat);
    const dLon = degToRad * (resident.long - search.long);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) *
        Math.sin(dLon / 2) *
        Math.cos(search.lat * degToRad) *
        Math.cos(resident.lat * degToRad);
    const distance =
      earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return (
      distance < maxArea &&
      resident.price >= range[0] &&
      resident.price <= range[1] &&
      resident.rooms === rooms
    );
  });

  return (
    <div className="mt-6">
      <div className="w-full h-[1px] bg-gray-300"></div>
      {/* Filters */}
      <div className="ease-in-out duration-500 mx-auto px-6 md:px-10 py-[15px] flex flex-col lg:flex-row justify-center items-center gap-5 xl:gap-16">
        {/* City search */}
        <div className="flex flex-col max-lg:items-center">
          <h4 className="text-xl font-medium">Locations</h4>
          <AsyncPaginate
            className="mt-2 min-w-[170px] max-w-[170px]"
            placeholder={search ? search.name : "Search for city"}
            debounceTimeout={1000}
            value={search.name}
            onChange={(searchData) =>
              setSearch({
                lat: searchData.additional.lat,
                long: searchData.additional.long,
                name: searchData.label,
              })
            }
            loadOptions={loadOptions}
            styles={{
              control: () => ({
                display: "flex",
              }),
            }}
          />
        </div>
        <div className="select-line w-0.5 lg:w-[1.5px] rotate-90 lg:rotate-0"></div>
        {/* Rooms */}
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
              className="outline-none max-w-[2.5rem] text-center text-xl text-customblue font-medium"
              value={rooms}
              onChange={handleOnRoomsChange}
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
        {/* Rent Range */}
        <div className="flex flex-col max-lg:items-center w-full max-w-sm">
          <div className="w-full flex justify-between">
            <h4 className="text-xl font-medium">Rent Range</h4>
            <h6 className="text-customblue ml-14 md:ml-auto font-medium">
              ${range[0]} - ${range[1]}
            </h6>
          </div>
          {/* Slider */}
          <div className="flex items-center mt-4 w-full">
            <ReactSlider
              className="relative w-full flex items-center h-6 z-[2]"
              thumbClassName="slider-thumb"
              trackClassName="slider-track"
              defaultValue={[
                searchParams.get("range1")
                  ? parseInt(searchParams.get("range1") / 100)
                  : 1,
                searchParams.get("range2")
                  ? parseInt(searchParams.get("range2") / 100)
                  : 100,
              ]}
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
        <div className="select-line w-0.5 lg:w-[1.5px] rotate-90 lg:rotate-0"></div>
        {/* Area Range */}
        <div className="flex flex-col max-lg:items-center">
          <h4 className="text-xl font-medium">Area (Km)</h4>
          <div className="mt-3 w-full flex justify-center bg-white rooms-input">
            <input
              className="outline-none max-w-[2.5rem] text-center text-xl text-customblue font-medium"
              value={maxArea}
              onChange={handleOnMaxAreaChange}
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-300"></div>
      <div ref={pageRef} className="grid md:grid-cols-3">
        {/* Residents */}
        <div className="md:col-span-2 mt-5 px-8">
          <h2 className="text-lg font-medium">
            {sortedResidents.length} Resident
            {sortedResidents.length > 1 || sortedResidents.length === 0
              ? "s"
              : ""}{" "}
            in{" "}
            {search.name.indexOf(",") > -1
              ? search.name.slice(0, search.name.indexOf(","))
              : search.name}
          </h2>
          <div className="grid sm:grid-cols-2 min-[1148px]:grid-cols-3 gap-7 mt-5">
            {sortedResidents.map((resident) => {
              return (
                <div key={resident.id}>
                  <div
                    onClick={() =>
                      handleProductClick(resident.lat, resident.long)
                    }
                    className="relative h-auto aspect-square product-image-block"
                  >
                    <Image
                      className="rounded-lg object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1536px) 33vw"
                      src={resident.img}
                      alt=""
                    />
                  </div>
                  {/* Description */}
                  <Link href={`/residents/${resident.id}`}>
                    <div className="flex justify-between mt-3">
                      <h3 className="text-base font-semibold">
                        {resident.name.length < 25
                          ? resident.name
                          : resident.name.slice(0, 25) + "..."}
                      </h3>
                      <div className="flex items-center">
                        <Image src={starIcon} alt="" width={15} height={14} />
                        <h6 className="text-customgray text-base ml-[6px]">
                          {resident.rating}
                        </h6>
                      </div>
                    </div>
                    <div className="flex mt-1">
                      <Image src={sofaImg} alt="" width={20} height={20} />
                      <h6 className="text-customgray text-base ml-2 mr-2">
                        {resident.rooms}+1
                      </h6>
                    </div>
                    <h3 className="mt-3">
                      <span className="font-semibold">{resident.price} $</span>{" "}
                      Month
                    </h3>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        {/* Map */}
        <div
          style={{ top: freezeMap }}
          ref={mapRef}
          className="relative h-[80vh] md:h-screen max-md:mt-6"
        >
          <div
            className={`${
              mapFixed
                ? freezeMap !== false
                  ? "absolute"
                  : "fixed top-0 max-w-[33.333%]"
                : "absolute"
            } right-0 w-full h-full`}
            style={{ zIndex: 50 }}
          >
            <Map
              center={[search.lat, search.long]}
              residents={sortedResidents}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
