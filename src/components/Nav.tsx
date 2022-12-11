import React from "react";
import Image from "next/image";

type Props = {};

const Nav: React.FC<Props> = (props: Props) => {
  return (
    <div className="fixed z-[55] h-16 w-full border-b border-transparent bg-transparent  px-2 transition">
      <div className="relative m-auto mx-auto flex h-full max-w-[100rem] items-center p-5">
        <a className="absolute flex flex-row items-center" href="/">
          <div className="z-30 mr-3 h-8 w-8  rounded-md bg-white">
            <Image
              src="/color.svg"
              alt="Sumbox"
              width={40}
              height={40}
              className="p-1"
            />
          </div>
          <div className="text-xl font-bold text-white">Sumbox</div>
        </a>
      </div>
    </div>
  );
};

export default Nav;
