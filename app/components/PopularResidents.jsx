import Image from "next/image";
import arrowRight from "../../public/images/arrow-right.svg";
import starIcon from "../../public/images/star.svg";
import Link from "next/link";
import { residents } from "../data";

function PopularResidents() {
  return (
    <section className="px-9 md:px-28 mt-32 lg:mt-80">
      <div className="flex max-md:flex-col justify-between">
        <h2 className="text-3xl md:text-5xl font-medium">Popular Residents</h2>
        <Link
          href="/residents"
          className="flex items-center max-md:mt-4 max-md:ml-auto"
        >
          <h6 className="text-customgray mr-[10px]">See all</h6>
          <Image src={arrowRight} alt="" width={24} height={24} />
        </Link>
      </div>
      <div className="grid grid-cols-1 min-[820px]:grid-cols-2 lg:grid-cols-3 gap-x-[60px] gap-y-[50px] mt-8">
        {residents.slice(0, 6).map((resident) => {
          return (
            <Link
              href={`/residents/${resident.id}`}
              key={resident.id}
              className="bg-white p-5 rounded-lg shadow-[0_24px_34px_0_rgba(80,79,89,0.14)]"
            >
              <div className="relative w-full aspect-square">
                <img style={{ height: "100%" }} src={"/1.png"} alt="" />
              </div>
              <h3 className="text-xl font-semibold mt-8">{resident.name}</h3>
              <div className="mt-4">
                <div className="flex items-center">
                  <Image src={starIcon} alt="" width={15} height={14} />
                  <h6 className="text-customgray text-base ml-[6px]">
                    {resident.rating}
                  </h6>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default PopularResidents;
