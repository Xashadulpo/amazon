import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import CheckoutItem from "@/components/CheckoutItem";
import Image from "next/image";

const Checkout = () => {
  //  REDUX
  const { item } = useSelector((state: RootState) => state.basket);
  const total = useSelector((state: RootState) =>
    state.basket.item.reduce((total, item) => total + item.price, 0)
  );

  return (
    <section className="lg:flex max-w-screen-2xl mx-auto bg-gray-100">
      {/* left */}
      <div className="flex-grow m-5 shadow-md">
        <Image
          src="https://links.papareact.com/ikj"
          alt="checBanner"
          width={1120}
          height={250}
          objectFit="contain"
        />
        <div className="flex flex-col p-5 space-y-10 bg-white">
          <h1 className="text-3xl border-v pb-4">
            {item.length === 0
              ? "Your Amazon Basket is empty"
              : "your shopping basket"}
          </h1>
          {item.map((item, i) => (
            <CheckoutItem
              key={i}
              id={item.id}
              title={item.title}
              category={item.category}
              description={item.description}
              price={item.price}
              image={item.image}
              rating={item.rating}
              hasPrime={item.hasPrime}
            />
          ))}
        </div>
      </div>
      {/* right */}
      {item.length > 0 && (
        <div className="w-full md:w-1/2 xl:w-2/6 mr-4 shadow-md mt-5 pr-20 bg-white pt-2 ">
          <h2 className="w-full text-center">
            subtotal ({item.length} items)
            <span className="font-bold"> $ {total} </span>
          </h2>
          <button className="product_button">Preocesed to checkout</button>
        </div>
      )}
    </section>
  );
};

export default Checkout;
