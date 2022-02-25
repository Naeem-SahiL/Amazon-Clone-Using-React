import React from "react";
import BasketItem from "./BasketItem";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://icmrindia.org/blogs/images/banner.jpg"
          alt=""
        />
        <h2 className="checkout_title">Your Shopping Basket</h2>

        {basket.map((item) => (
        <BasketItem
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            rating={item.rating}
          />)
          
        )}
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
