"use client";
import { ProductType } from "@/types";
import React, { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToBasket } from "@/slices/basketslice";

const Product = ({
  id,
  title,
  category,
  description,
  price,
  image,
}: ProductType) => {
  const mathRandom = Math.floor(Math.random() * 6);
  const [rating] = useState(mathRandom === 0 ? mathRandom + 3 : mathRandom);
  const [hasPrime] = useState(mathRandom > 3);
  const dispatch = useDispatch();

  const send = () => {
    const product = {
      id,
      title,
      category,
      description,
      price,
      image,
      rating,
      hasPrime
    };
    dispatch(addToBasket(product));
  };

  return (
    <div
      key={id}
      className="relative z-10 flex gap-2 m-5 flex-col p-10 bg-white"
    >
      <p className="absolute top-2 right-2">{category}</p>
      <div className=" relative w-[60%] mx-auto h-0 pb-[70%]">
        <Image
          src={image}
          alt="image"
          layout="fill"
          className="pointer-events-none"
          priority
        />
      </div>
      <h4 className="w-full line-clamp-2 h-[3.5rem] font-extrabold text-xl">
        {title}
      </h4>
      <div className="relative flex">
        {Array(rating)
          .fill(undefined)
          .map((_, i) => (
            <FaStar key={i} className="text-yellow-600 text-lg" />
          ))}
      </div>
      <p className="line-clamp-2 my-3 font-thin text-sm capitalize">
        {description}
      </p>
      <p className="font-extrabold text-xl ">$ {price}</p>
      <div className="relative flex fex-col h-8  gap-4">
        {hasPrime && (
          <>
            <Image
              src="https://imgs.search.brave.com/F2mJO_FUe7RijQZ1wkbPYKV8PXnJrVTrs51onh6OyHM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0EvYW1hem9u/LXByaW1lLWxvZ28t/NEU0NjFDRENGNi1z/ZWVrbG9nby5jb20u/cG5n"
              alt="prime logo"
              width={20}
              height={20}
              className="pointer-events-none"
            />
            <p className="font-medium text-xs mt-1">FREE Next-Day Delivary</p>
          </>
        )}
      </div>

      <button type="button" className="product_button" onClick={send}>
        add to cart
      </button>
    </div>
  );
};

export default Product;
