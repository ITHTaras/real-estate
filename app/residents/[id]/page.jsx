"use client";
import { residents } from "@/app/data";
import Image from "next/image";
import starIcon from "../../../public/images/star.svg";
import sofaImg from "../../../public/images/sofa.svg";

import dynamic from "next/dynamic";

const MyMap = dynamic(() => import("@/app/components/Map"), { ssr: false });

function Resident({ params }) {
  const currentResident = residents.find((resident) => {
    return resident.id == params.id;
  });

  return (
    <div className="px-12 min-[880px]:px-32 grid grid-cols-5 mt-10 mb-[700px] md:mb-96">
      <div className="col-span-5 lg:col-span-4">
        <div className="md:grid md:grid-cols-3 md:gap-5 mb-8">
          <div className="flex justify-center w-full md:w-full">
            <div className="w-3/4 md:w-full relative aspect-square">
              <Image
                className="object-cover"
                fill
                src={currentResident.img}
                alt=""
                sizes="(max-width: 768px) 80vw, (max-width: 1536px) 20vw "
              />
            </div>
          </div>
          <div className="md:col-span-2 px-5 py-1 mt-5 md:mt-0">
            <div className="sm:flex sm:justify-between mb-2">
              <h1 className="text-2xl">{currentResident.name}</h1>
              <h2 className="text-2xl max-sm:mt-2 font-semibold">
                {currentResident.price} € / Month
              </h2>
            </div>
            <hr />
            <div className="flex justify-between items-center mt-3 mb-2">
              <h5 className="text-xl">Rating: </h5>
              <div className="flex items-center">
                <Image src={starIcon} alt="" width={15} height={14} />
                <h6 className="text-customgray text-base ml-[6px]">
                  {currentResident.rating}
                </h6>
              </div>
            </div>
            <hr />
            <div className="flex justify-between items-center mt-3 mb-2">
              <h5 className="text-xl">Rooms: </h5>
              <div className="flex">
                <Image src={sofaImg} alt="" width={20} height={20} />
                <h6 className="text-customgray text-base ml-2 mr-2">
                  {currentResident.rooms}+1
                </h6>
              </div>
            </div>
            <hr />
            <div className="flex justify-between items-center mt-3">
              <h5 className="text-xl">Kitchen: </h5>
              <h6 className="text-base font-semibold">Yes</h6>
            </div>
          </div>
        </div>
        <MyMap
          center={[currentResident.lat, currentResident.long]}
          residents={[currentResident]}
        />
      </div>
    </div>
  );
}

export default Resident;
