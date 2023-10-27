import Link from "next/link";

function Register() {
  return (
    <div className="flex flex-col items-center hscreen-navbar justify-center">
      <div className="sm:min-w-[50%] lg:min-w-[40%] min-[1160px]:min-w-[30%]">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Rent<span className="text-customblue">Wonder</span>
          </h1>
          <h2 className="mt-5 text-[26px] font-semibold text-[#101828]">
            Create an account
          </h2>
          <h3 className="mt-3 text-base text-[#475467]">
            Start your journey with us.
          </h3>
        </div>
        <div className="mt-8">
          <h6 className="text-sm font-medium">Email</h6>
          <input
            className="outline-none mt-[6px] py-[10px] px-4 border border-[#D0D5DD] rounded-lg w-full"
            type="email"
            placeholder="Enter your email"
          />
          <h6 className="text-sm font-medium mt-5">Password</h6>
          <input
            className="outline-none mt-[6px] py-[10px] px-4 border border-[#D0D5DD] rounded-lg w-full"
            type="password"
            placeholder="Enter your password"
          />
          <div className="flex mt-6">
            <input type="checkbox" />
            <h6 className="ml-2 text-sm font-medium text-[#344054]">
              Remember for 30 days
            </h6>
            <h6 className="text-sm font-semibold text-customblue ml-auto">
              Forgot password
            </h6>
          </div>
          <h1 className="w-full py-3 bg-customblue rounded-lg mt-6 text-white text-base font-semibold text-center">
            <Link href="/">Get started</Link>
          </h1>
        </div>
        <div className="w-full mt-8 flex justify-center items-center">
          <h6 className="text-sm text-[#475467] ">Already have an account?</h6>
          <Link href="/login" className="ml-1 font-semibold text-customblue">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
