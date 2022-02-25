import React from "react";
import "./BasketItem.css";
import { useStateValue } from "./StateProvider";

function BasketItem({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //dispatch the item ionto the dat layout
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        rating: rating,
        price: price,
      },
    });
  };
  return (
    <div className="basket_product">
      <img src={image} alt="" />

      <div className="basket_product_info">
        <p className="title">
          <strong>{title}</strong>
        </p>
        <p className="basket_product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="basket_product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}> Remove from Basket </button>
      </div>
    </div>
  );
}

export default BasketItem;
