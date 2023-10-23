import FeatureHoverButton from "@/components/buttons/FeatureHoverButton";
import Link from "next/link";
import React from "react";

const LacosteBandier = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-10 md:gap-20 lg:gap-28 xl:gap-32 mt-8">

    {/* left side  flex overflow-x-hidden xl:flex-none xl:mx-0 */ }
    <div className="flex items-center justify-center overflow-x-hidden xl:flex-none h-full md:w-[55%]">

      <img
        className="h-[500px] md:h-[450px] xl:h-full min-w-fit md:min-w-full"
        src="/images/homePage/BigImages/LacostexBandier.png"
        alt=""
        />
    </div>

    {/* right side */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
            <p className="text-xs text-slate-500 font-bold">NEW STYLES HAVE LANDED</p>
            <h1 className="text-2xl font-bold text-[#292929]">Lacoste x Bandier</h1>
            <p className="text-sm text-slate-500 ">Paris Meets New York.</p>
        </div>
        <div className="flex flex-col gap-2">
            <Link href="/sale">
                <button
                    className={`bg-[#292929] text-sm px-7 py-3 rounded-full text-white border border-transparent hover:bg-white hover:text-black hover:border-gray-300 duration-300`}
                    >
                    Shop Now
                </button>
            </Link>
            <Link href="/sale">
                <button
                    className={`bg-[#292929] text-sm px-7 py-3 rounded-full text-white border border-transparent hover:bg-white hover:text-black hover:border-gray-300 duration-300`}
                    >
                    Explore the Collaboration
                </button>
            </Link>
        </div>
      </div>

    </div>
  );
};

export default LacosteBandier;
