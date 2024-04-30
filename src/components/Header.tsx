"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { AmazonLogo } from "@/utils";
import { IoSearch } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { DownNav } from "@/constant";
import { IoMenu } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { signIn, signOut, useSession } from "next-auth/react";


const Header = () => {
  const router = useRouter();
  const { item } = useSelector((state: RootState) => state.basket);

  const { status, data: session } = useSession();

  return (
    <div className="w-full flex flex-col bg-black py-3">
      {/* top nav */}
      <div className="w-full flex item-center  sm:justify-around">
        <Image
          src={AmazonLogo}
          width={100}
          height={80}
          alt="logo"
          onClick={() => {
            console.log("hi");
            router.push("/");
          }}
          // className="pointer-events-none"
        />
        <div className="hidden sm:flex items-center h-10  w-[40%] xl:w-[65%] flex-grow">
          <input
            type="text"
            placeholder="type something..."
            className="w-5/6 h-full rounded-tl-sm rounded-bl-sm pl-9 flex-shrink outline-none text-gray-400 font-semibold"
          />
          <div className="p-[0.65rem] bg-yellow-200 rounded-tr-sm rounded-br-sm ">
            <IoSearch className="text-[20px] text-black " />
          </div>
        </div>

        <div className="flex gap-6 text-white flex-center  flex-grow pr-2">
          {/* if log in show name other wish log in first  */}
          {status === "authenticated" ? (
            <div
              className="flex flex-col items-center cursor-default"
              onClick={() => signOut()}
            >
              <p className="text-xs font-serif md:font-sans md:font-light font-light  ">
               hey {session.user?.name}
              </p>
              <h3 className="font-bold capitalize">account & lists</h3>
            </div>
          ) : (
            <div
              className="flex flex-col items-center cursor-default"
              onClick={() => signIn("google")}
            >
              <p className="text-xs font-serif md:font-sans md:font-light font-light  ">
                log in
              </p>
              <h3 className="font-bold capitalize">account & lists</h3>
            </div>
          )}
         
          <div className="flex flex-col items-center">
            <p className="text-xs font-serif font-light">Returns</p>
            <h3>& orders</h3>
          </div>
          <div className="flex gap-3 justify-center items-center mb-3">
            <div className="relative" onClick={() => router.push("/checkout")}>
              <HiOutlineShoppingCart className="bg-black text-white text-3xl  hover:text-[#ababab] text-[30px] font-extrabold" />
              <span className="absolute px-1 -py-1 rounded-full text-base bg-red-700 text-white -top-2 -right-3">
                {item.length}
              </span>
            </div>

            <p className="text-xs font-serif font-light">Basket</p>
          </div>
        </div>
      </div>
      {/* down nav  */}
      <div className="flex bg-gray-700 gap-2 lg:gap-4 py-1 px-2 sm:px-4 items-center justify-start">
        <IoMenu className="text-white text-2xl " />
        {DownNav.map((item, i) => (
          <h3
            key={i}
            className={`text-white text-xs sm:text-sm font-extrabold capitalize ${
              i > 4 ? "hidden lg:block" : ""
            }`}
          >
            {item}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default Header;
