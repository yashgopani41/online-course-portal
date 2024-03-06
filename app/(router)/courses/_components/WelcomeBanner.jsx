import React from "react";
import Image from "next/image";

const WelcomeBanner = () => {
  return (
    <div className="flex gap-5 items-center bg-white rounded-xl p-5">
      <Image src="/panda.png" alt="panda" width={100} height={100} />
      <div>
        <h2 className="text-[29px] font-bold">
          Welcome to <span className="text-primary">Panda</span> Academy
        </h2>
        <h2 className="text-gray-500">
          Explore, Learn and Build All Real World Projects
        </h2>
      </div>
    </div>
  );
};

export default WelcomeBanner;
