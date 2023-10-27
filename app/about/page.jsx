import Image from "next/image";
import aboutUsImg from "../../public/images/about-us.png";
import clockImg from "../../public/images/clock.svg";
import workerImg from "../../public/images/person1.png";
import { jobs } from "../data";
import WorldMap from "../components/WorldMap";

function About() {
  return (
    <div className="min-[670px]:px-16 md:px-24">
      <div className="max-[340px]:px-4 max-[670px]:px-6 my-24">
        <h3 className="text-customblue text-base font-semibold">About us</h3>
        <div className="md:flex mt-3">
          <h2 className="max-[670px]:w-full text-4xl md:text-5xl font-semibold w-3/5">
            We do things differently...
          </h2>
          <p className="md:ml-8 mt-3 text-lg font-normal text-[#475467]">
            Learn more about the company and the world-class team behind us.
          </p>
        </div>
      </div>
      <div className="max-[340px]:px-1 max-[670px]:px-3 grid min-[670px]:grid-cols-2 lg:grid-cols-4 gap-8 max-[670px]:text-center">
        <div className="">
          <h1 className="text-6xl font-semibold text-customblue">400+</h1>
          <h2 className="mt-3 text-lg font-semibold">Projects completed</h2>
          <h3 className="text-base font-normal text-[#475467] mt-2 max-[670px]:hidden">
            We’ve helped build over 400 amazing projects.
          </h3>
        </div>
        <div className="">
          <h1 className="text-6xl font-semibold text-customblue">600%</h1>
          <h2 className="mt-3 text-lg font-semibold">Return on investment</h2>
          <h3 className="text-base font-normal text-[#475467] mt-2 max-[670px]:hidden">
            Our customers have reported an average of ~600% ROI.
          </h3>
        </div>
        <div className="">
          <h1 className="text-6xl font-semibold text-customblue">10k</h1>
          <h2 className="mt-3 text-lg font-semibold">Global downloads</h2>
          <h3 className="text-base font-normal text-[#475467] mt-2 max-[670px]:hidden">
            We’ve helped build over 400 amazing projects.
          </h3>
        </div>
        <div className="">
          <h1 className="text-6xl font-semibold text-customblue">700+</h1>
          <h2 className="mt-3 text-lg font-semibold">5-star reviews</h2>
          <h3 className="text-base font-normal text-[#475467] mt-2 max-[670px]:hidden">
            We’re proud of our 5-star rating with over 200 reviews.
          </h3>
        </div>
      </div>
      <hr className="mt-24 h-[2px] bg-[#e8e9eb95]" />
      {/* Carriers */}
      <div
        id="career"
        className="max-[340px]:px-1 max-[670px]:px-3 w-full mt-24 flex flex-col items-center"
      >
        <h3 className="py-1 px-3 border border-[#E9D7FE] bg-[#F9F5FF] text-[#6941C6] rounded-full">
          Carriers
        </h3>
        <h2 className="text-4xl font-semibold mt-4 max-[670px]:text-center">
          We’re looking for talented people
        </h2>
        <h4 className="mt-5 text-[#475467] text-xl max-[670px]:text-center">
          We’re a 100% remote team spread all across the world. Join us!
        </h4>
        <Image className="mt-16 sm:w-4/5" src={aboutUsImg} alt="" />
        {/* Jobs */}
        {jobs.map((category, i) => {
          return (
            <div className="mt-16 px-4 w-full" key={category.name}>
              <h1 className="text-xl font-semibold mb-2">{category.name}</h1>
              {category.jobs.map((job) => {
                return (
                  <div
                    key={job.name}
                    className="mt-6 p-6 rounded-2xl border border-[#EAECF0]"
                  >
                    <div className="flex max-[670px]:flex-col min-[670px]:justify-between min-[670px]:items-center">
                      <div className="flex">
                        <h3 className="text-lg font-semibold">{job.name}</h3>
                        <h4 className="max-lg:hidden text-sm text-[#344054] font-medium ml-2 border border-[#D0D5DD] rounded-md px-2 pt-0.5">
                          {i % 2 == 0 ? (
                            <span className="text-[#2E90FA]">•</span>
                          ) : (
                            <span className="text-[#EE46BC]">•</span>
                          )}{" "}
                          {category.name.split(" ")[0]}
                        </h4>
                      </div>
                      <div className="max-[670px]:w-fit max-[670px]:mt-3 flex items-center text-sm text-[#344054] font-medium border border-[#D0D5DD] rounded-md px-2 py-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2"
                          width={16}
                          height={16}
                          fill="#2E90FA"
                          viewBox="0 0 512 512"
                        >
                          <path d="M266.3 48.3L232.5 73.6c-5.4 4-8.5 10.4-8.5 17.1v9.1c0 6.8 5.5 12.3 12.3 12.3c2.4 0 4.8-.7 6.8-2.1l41.8-27.9c2-1.3 4.4-2.1 6.8-2.1h1c6.2 0 11.3 5.1 11.3 11.3c0 3-1.2 5.9-3.3 8l-19.9 19.9c-5.8 5.8-12.9 10.2-20.7 12.8l-26.5 8.8c-5.8 1.9-9.6 7.3-9.6 13.4c0 3.7-1.5 7.3-4.1 10l-17.9 17.9c-6.4 6.4-9.9 15-9.9 24v4.3c0 16.4 13.6 29.7 29.9 29.7c11 0 21.2-6.2 26.1-16l4-8.1c2.4-4.8 7.4-7.9 12.8-7.9c4.5 0 8.7 2.1 11.4 5.7l16.3 21.7c2.1 2.9 5.5 4.5 9.1 4.5c8.4 0 13.9-8.9 10.1-16.4l-1.1-2.3c-3.5-7 0-15.5 7.5-18l21.2-7.1c7.6-2.5 12.7-9.6 12.7-17.6c0-10.3 8.3-18.6 18.6-18.6H400c8.8 0 16 7.2 16 16s-7.2 16-16 16H379.3c-7.2 0-14.2 2.9-19.3 8l-4.7 4.7c-2.1 2.1-3.3 5-3.3 8c0 6.2 5.1 11.3 11.3 11.3h11.3c6 0 11.8 2.4 16 6.6l6.5 6.5c1.8 1.8 2.8 4.3 2.8 6.8s-1 5-2.8 6.8l-7.5 7.5C386 262 384 266.9 384 272s2 10 5.7 13.7L408 304c10.2 10.2 24.1 16 38.6 16H454c6.5-20.2 10-41.7 10-64c0-111.4-87.6-202.4-197.7-207.7zm172 307.9c-3.7-2.6-8.2-4.1-13-4.1c-6 0-11.8-2.4-16-6.6L396 332c-7.7-7.7-18-12-28.9-12c-9.7 0-19.2-3.5-26.6-9.8L314 287.4c-11.6-9.9-26.4-15.4-41.7-15.4H251.4c-12.6 0-25 3.7-35.5 10.7L188.5 301c-17.8 11.9-28.5 31.9-28.5 53.3v3.2c0 17 6.7 33.3 18.7 45.3l16 16c8.5 8.5 20 13.3 32 13.3H248c13.3 0 24 10.7 24 24c0 2.5 .4 5 1.1 7.3c71.3-5.8 132.5-47.6 165.2-107.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM187.3 100.7c-6.2-6.2-16.4-6.2-22.6 0l-32 32c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l32-32c6.2-6.2 6.2-16.4 0-22.6z" />
                        </svg>{" "}
                        <h6>{job.location}</h6>
                      </div>
                    </div>
                    <p className="mt-2 text-base font-normal text-[#475467]">
                      We’re looking for an experienced {job.name} to join our
                      team.
                    </p>
                    <div className="flex items-center mt-8">
                      <Image src={clockImg} width={16} height={16} alt="" />
                      <h3 className="ml-2 mr-5 text-base font-medium text-[#475467]">
                        Full-time
                      </h3>
                      <svg
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V6.31673C14.3804 6.60867 15.75 7.83361 15.75 9.5C15.75 9.91421 15.4142 10.25 15 10.25C14.5858 10.25 14.25 9.91421 14.25 9.5C14.25 8.65573 13.3765 7.75 12 7.75C10.6235 7.75 9.75 8.65573 9.75 9.5C9.75 10.3443 10.6235 11.25 12 11.25C13.9372 11.25 15.75 12.5828 15.75 14.5C15.75 16.1664 14.3804 17.3913 12.75 17.6833V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V17.6833C9.61957 17.3913 8.25 16.1664 8.25 14.5C8.25 14.0858 8.58579 13.75 9 13.75C9.41421 13.75 9.75 14.0858 9.75 14.5C9.75 15.3443 10.6235 16.25 12 16.25C13.3765 16.25 14.25 15.3443 14.25 14.5C14.25 13.6557 13.3765 12.75 12 12.75C10.0628 12.75 8.25 11.4172 8.25 9.5C8.25 7.83361 9.61957 6.60867 11.25 6.31673V6C11.25 5.58579 11.5858 5.25 12 5.25Z"
                            fill="#98A2B3"
                          ></path>{" "}
                        </g>
                      </svg>
                      <h3 className="ml-2 text-base font-medium text-[#475467]">
                        {job.salary}k - {job.salary + 20}k
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="mt-48 flex flex-col items-center">
        <div className="flex flex-col items-center max-[340px]:px-1 max-[670px]:px-3 text-center">
          <h3 className="w-fit py-1 px-3 border border-[#E9D7FE] bg-[#F9F5FF] text-[#6941C6] rounded-full">
            Stores
          </h3>
          <h2 className="text-4xl font-semibold mt-4">
            We’re a distributed team
          </h2>
          <h4 className="mt-5 text-[#475467] text-xl">
            We have offices and teams all around the world.
          </h4>
        </div>
        <WorldMap className="mt-16 min-[540px]:px-3 min-[670px]:px-28" />
        <div className="max-[340px]:px-1 max-[670px]:px-3 p-16 flex flex-col items-center rounded-2xl bg-[#F9FAFB] text-center">
          <h3 className="text-sm font-semibold text-[#6941C6]">
            From our team
          </h3>
          <h2 className="mt-3 text-2xl min-[500px]:text-4xl font-medium">
            Untitled truly values work-life balance. We work hard and deliver,
            but at the end of the day you can switch off.
          </h2>
          <Image
            className="mt-8 rounded-full border border-[#E0E0E0]"
            width={56}
            height={56}
            src={workerImg}
            alt=""
          />
          <h4 className="mt-4 text-base font-semibold">Jane Cooper</h4>
          <h5 className="mt-1 text-sm">Marketing Coordinator</h5>
        </div>
      </div>
    </div>
  );
}

export default About;
