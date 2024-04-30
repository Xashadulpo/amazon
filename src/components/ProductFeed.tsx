"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";
const ProductFeed = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const jsonholder = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");

        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    jsonholder();
  }, []);

  return (
    <section className="bg-gray-100 grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-7 md:-mt-32 common-padding">
      {products.slice(0, 4).map((item, i) => {
        const { id, category, price, title, image, description } = item;
        return (
          <Product
            key={i}
            id={id}
            category={category}
            price={price}
            title={title}
            image={image}
            description={description}
          />
        );
      })}
      <img
        src="https://links.papareact.com/dyz"
        alt="byz"
        className="md:col-span-full mx-auto w-full px-8"
      />
      <div className="md:col-span-2">
        {products.slice(4, 5).map((item, i) => {
          const { id, category, price, title, image, description } = item;
          return (
            <Product
              key={i}
              id={id}
              category={category}
              price={price}
              title={title}
              image={image}
              description={description}
            />
          );
        })}
      </div>
      {products.slice(5, products.length).map((item, i) => {
        const { id, category, price, title, image, description } = item;
        return (
          <Product
            key={i}
            id={id}
            category={category}
            price={price}
            title={title}
            image={image}
            description={description}
          />
        );
      })}
    </section>
  );
};

export default ProductFeed;
