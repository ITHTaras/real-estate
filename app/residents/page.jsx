"use client";
import ReactSlider from "react-slider";
import Map from "../components/Map";
import { AsyncPaginate } from "react-select-async-paginate";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { residents } from "../data";

// API options
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_CITY_API_KEY,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

function Page() {
  // URL Params
  const searchParams = useSearchParams();

  // Filter
  const [search, setSearch] = useState(
    searchParams.get("city") ? searchParams.get("city") : "Berlin"
  );
  const [rooms, setRooms] = useState(
    searchParams.get("rooms") ? parseInt(searchParams.get("rooms")) : 1
  );
  const [range, setRange] = useState([
    searchParams.get("range1") ? searchParams.get("range1") : 5,
    searchParams.get("range2") ? searchParams.get("range1") : 100,
  ]);

  const loadOptions = async (inputValue) => {
    if (inputValue === "")
      return {
        options: [],
        hasMore: false,
      };
    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${inputValue}`;
    let result = [];

    try {
      const response = await fetch(url, options);

      result = await response.json();

      return {
        options: result.data.map((city) => {
          return {
            value: city.id,
            label: `${city.name}, ${city.region}`,
            additional: {
              city: city.name,
              lat: city.latitude,
              long: city.longitude,
            },
          };
        }),
        hasMore: false,
      };
    } catch (error) {
      console.error(error);
    }
  };

  const pattern = /^[a-zA-Z]+$/;
  const handleOnRoomsChange = (el) => {
    if (
      !pattern.test(el.target.value) &&
      el.target.value <= 100 &&
      el.target.value > 0
    ) {
      setRooms(parseInt(el.target.value));
    }
  };

  // Sort Residents
  const sortedResidents = residents.filter((resident) => {
    const earthRadiusKm = 6371;
    const degToRad = 0.017453;

    const dLat = degToRad * (resident.lat - searchParams.get("lat"));
    const dLon = degToRad * (resident.long - searchParams.get("long"));

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) *
        Math.sin(dLon / 2) *
        Math.cos(searchParams.get("lat") * degToRad) *
        Math.cos(resident.lat * degToRad);
    const distance =
      earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    console.log(distance);

    return distance < 30;
  });
  //console.log(sortedResidents);

  return (
    <div className="mt-6">
      <div className="w-full h-[1px] bg-gray-300"></div>
      <div className="ease-in-out duration-500 mx-auto px-6 md:px-10 py-[15px] flex flex-col lg:flex-row justify-center items-center gap-5 xl:gap-16">
        <div className="flex flex-col max-lg:items-center">
          <h4 className="text-xl font-medium">Locations</h4>
          <AsyncPaginate
            className="mt-4 min-w-[170px] max-w-[170px]"
            placeholder={search ? search : "Search for city"}
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
        {/* Reant Range */}
        <div className="flex flex-col max-lg:items-center w-full max-w-sm">
          <div className="w-full flex justify-between">
            <h4 className="text-xl font-medium">Rent Range</h4>
            <h6 className="text-[#1b00ea] ml-14 md:ml-auto font-medium">
              ${range[0] * 10} - ${range[1] * 10}
            </h6>
          </div>
          <div className="flex items-center mt-4 w-full">
            <ReactSlider
              className="relative w-full flex items-center h-6 z-[2]"
              thumbClassName="slider-thumb"
              trackClassName="slider-track"
              defaultValue={[
                searchParams.get("range1") ? searchParams.get("range1") : 5,
                searchParams.get("range2") ? searchParams.get("range2") : 100,
              ]}
              onChange={(state) => {
                setRange([state[0], state[1]]);
              }}
              renderThumb={(props, state) => (
                <div {...props} key={state.index}></div>
              )}
              pearling
              minDistance={10}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-300"></div>
      {/* Residents */}
      <div className="px-6"></div>
    </div>
  );
}

export default Page;
