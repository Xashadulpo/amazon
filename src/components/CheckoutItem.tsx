import { Itemsobject } from "@/types";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToBasket,removeFromBasket } from "@/slices/basketslice";

const CheckoutItem = ({ id, title, description, price, image, rating, hasPrime}: Itemsobject) => {
    const dispatch= useDispatch();

const addToBasketBtn = ()=>{
    const product = {
        id, title, description, price, image, rating, hasPrime
    }
    dispatch(addToBasket(product))
}
const removeFromBasketBtn = ()=>{
    dispatch(removeFromBasket({id}))
}

  return (
    <>
      <div className="grid grid-cols-5 items-center ">
        <Image src={image} alt="img" width={200} height={200} objectFit="contain" />
        {/* para  */}
        <div className="col-span-3 px-2">
          <h2>{title}</h2>
          <div className="relative flex">
            {Array(rating)
              .fill(undefined)
              .map((_, i) => (
                <FaStar key={i} className="text-yellow-600 text-lg" />
              ))}
          </div>
          <p className="text-xs my-2 line-clamp-3">{description}</p>
          <p>$ {price}</p>
          <div className="relative flex fex-col h-8  gap-4">
            {hasPrime && (
              <>
                <Image
                  src="https://imgs.search.brave.com/F2mJO_FUe7RijQZ1wkbPYKV8PXnJrVTrs51onh6OyHM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL0EvYW1hem9u/LXByaW1lLWxvZ28t/NEU0NjFDRENGNi1z/ZWVrbG9nby5jb20u/cG5n"
                  alt="prime logo"
                  width={40}
                  height={20}
                />
                <p className="font-medium text-sm">FREE Next-Day Delivary</p>
              </>
            )}
          </div>
        </div>
        {/* use redux to add/delet   */}
        <div className="flex flex-col gap-2" >
          <button type="button" className="checkout_button" onClick={addToBasketBtn}>
            add to basket
          </button>
          <button type="button" className="checkout_button" onClick={removeFromBasketBtn}>
            remove from basket
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckoutItem;
