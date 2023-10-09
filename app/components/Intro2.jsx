import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import introImg from "../../public/images/2intro.png";
import introImg2 from "../../public/images/2intro2.png";

function Intro2() {
  const [canCount, setCanCount] = useState(false);
  const benefitRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      try {
        if (window.scrollY + 300 > benefitRef.current.offsetTop)
          setCanCount(true);
      } catch (err) {}
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={benefitRef}
      className="flex justify-center mt-[36rem] lg:mt-48 px-7 min-[530px]:px-28 "
    >
      <div className="min-[940px]:w-1/2 flex flex-col items-center min-[940px]:block max-[940px]:text-center">
        <h2 className="mt-20 text-5xl font-semibold max-w-[480px]">
          Discover your dream home with us
        </h2>
        <p className="mt-8 text-customgray font-normal text-lg max-w-[570px]">
          We are pleased to offer house listing services and provide various
          options and package to assist you in finding your dream home.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 md:gap-x-0 gap-y-8 mt-14">
          <div>
            <h4 className="text-[#1B00EA] text-[32px] font-medium">
              {canCount ? <CountUp end={3} /> : 0}K+
            </h4>
            <p className="text-customgray font-normal text-lg max-w-[160px]">
              Happy costumers with our service
            </p>
          </div>
          <div>
            <h4 className="text-[#1B00EA] text-[32px] font-medium">
              {canCount ? <CountUp end={225} /> : 0}K+
            </h4>
            <p className="text-customgray font-normal text-lg max-w-[160px]">
              The best property we provide
            </p>
          </div>
          <div>
            <h4 className="text-[#1B00EA] text-[32px] font-medium">
              {canCount ? <CountUp end={316} /> : 0}+
            </h4>
            <p className="text-customgray font-normal text-lg max-w-[160px]">
              Companies affiliated with us
            </p>
          </div>
          <div>
            <h4 className="text-[#1B00EA] text-[32px] font-medium">
              {canCount ? <CountUp end={749} /> : 0}+
            </h4>
            <p className="text-customgray font-normal text-lg max-w-[160px]">
              Projects completed
            </p>
          </div>
        </div>
      </div>
      <div className="hidden min-[940px]:block lg:w-1/3 ml-auto relative">
        <Image
          className="pos-unset object-contain"
          sizes="(max-width: 940px) 0vw, (max-width: 1536px) 35vw"
          src={introImg2}
          fill
          alt=""
        />
        <Image
          className="hidden lg:block absolute top-1/2 right-[60%]"
          src={introImg}
          width={354}
          height={531}
          alt=""
        />
      </div>
    </section>
  );
}

export default Intro2;
