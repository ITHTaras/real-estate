"use state";

import { useState } from "react";

function Callback() {
  const [valid, setValid] = useState(false);
  const [email, setEmail] = useState("");

  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleOnChange = (event) => {
    if (re.test(event.target.value)) {
      setValid(true);
    } else setValid(false);

    setEmail(event.target.value);
  };
  return (
    <section className="w-full flex flex-col justify-center items-center mt-24 px-7 md:px-12 lg:px-48 py-44 callback">
      <h1 className="text-white text-center text-3xl lg:text-6xl font-semibold">
        Get our special prices & latest info
      </h1>
      <div className="sm:w-4/5 flex items-center mt-20 rounded-lg bg-white px-[30px] py-[18px]">
        <input
          className="w-3/4 focus:outline-none callback-input text-customgray"
          value={email}
          onChange={handleOnChange}
          type="email"
          placeholder="Drop your email address here.."
        />
        <div className="callback-line ml-auto"></div>
        <button
          disabled={!valid}
          className={`${
            valid ? "bg-[#1B00EA] text-white" : "bg-neutral-300 text-gray-400"
          } text-base px-[30px] py-3 rounded-lg sm:ml-7`}
        >
          Subscribe
        </button>
      </div>
    </section>
  );
}

export default Callback;
