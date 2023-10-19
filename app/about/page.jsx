import Image from "next/image";
import aboutUsImg from "../../public/images/about-us.png";
import { jobs } from "../data";

function About() {
  return (
    <div className="px-28">
      <div className="my-24">
        <h3 className="text-customblue text-base font-semibold">About us</h3>
        <div className="flex mt-3">
          <h2 className="text-5xl font-semibold w-3/5">
            We do things differently...
          </h2>
          <p className="ml-8 mt-3 text-lg font-normal text-[#475467]">
            Learn more about the company and the world-class team behind us.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8">
        <div className="">
          <h1 className="text-6xl font-semibold text-customblue">400+</h1>
          <h2 className="mt-3 text-lg font-semibold">Projects completed</h2>
          <h3 className="text-base font-normal text-[#475467] mt-2">
            We’ve helped build over 400 amazing projects.
          </h3>
        </div>
        <div className="">
          <h1 className="text-6xl font-semibold text-customblue">600%</h1>
          <h2 className="mt-3 text-lg font-semibold">Return on investment</h2>
          <h3 className="text-base font-normal text-[#475467] mt-2">
            Our customers have reported an average of ~600% ROI.
          </h3>
        </div>
        <div className="">
          <h1 className="text-6xl font-semibold text-customblue">10k</h1>
          <h2 className="mt-3 text-lg font-semibold">Global downloads</h2>
          <h3 className="text-base font-normal text-[#475467] mt-2">
            We’ve helped build over 400 amazing projects.
          </h3>
        </div>
        <div className="">
          <h1 className="text-6xl font-semibold text-customblue">700+</h1>
          <h2 className="mt-3 text-lg font-semibold">5-star reviews</h2>
          <h3 className="text-base font-normal text-[#475467] mt-2">
            We’re proud of our 5-star rating with over 200 reviews.
          </h3>
        </div>
      </div>
      <hr className="mt-24 h-[2px] bg-[#e8e9eb95]" />
      {/* Carriers */}
      <div className="mt-24 flex flex-col items-center">
        <h3 className="py-1 px-3 border border-[#E9D7FE] bg-[#F9F5FF] text-[#6941C6] rounded-full">
          Carriers
        </h3>
        <h2 className="text-4xl font-semibold mt-4">
          We’re looking for talented people
        </h2>
        <h4 className="mt-5 text-[#475467] text-xl">
          We’re a 100% remote team spread all across the world. Join us!
        </h4>
        <Image className="mt-16 sm:w-4/5" src={aboutUsImg} alt="" />
        {/* Jobs */}
        {jobs.map((category) => {
          return (
            <div className="mt-16 px-36 w-full" key={category.name}>
              <h1 className="text-xl font-semibold mb-2">{category.name}</h1>
              {category.jobs.map((job) => {
                return (
                  <div
                    key={job.name}
                    className="mt-6 p-6 rounded-2xl border border-[#EAECF0]"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex">
                        <h3 className="text-lg font-semibold">{job.name}</h3>
                        <h4 className="text-sm text-[#344054] font-medium ml-2 border border-[#D0D5DD] rounded-md px-1 pt-0.5">
                          • {category.name}
                        </h4>
                      </div>
                      <h4 className="text-sm text-[#344054] font-medium border border-[#D0D5DD] rounded-md px-1 py-0.5">
                        • {job.location}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;
