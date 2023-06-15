import React from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import "./cart.css";

const Cart = ({ prop }) => {
  const { item_count, Increaseqty, Decreaseqty, products, total, DeleteItem } =
    useContext(CartContext);
  const test = () => {
    Increaseqty(prop._id);
  };
  const checkquantity = () => {
    if (prop.quantity == 1) {
      console.log("Item quantity 1");
    } else {
      Decreaseqty(prop._id);
    }
  };
  const deleteitm = () => {
    DeleteItem(prop._id);
  };
  return item_count ? (
    <>
      <div className="order" key={prop.id}>
        <div className="img-crt flex flex-col">
          <img className="cart-img" src={prop.image} alt="" />
          <h2 className="name-cart">{prop.name}</h2>
        </div>
        <div className="price-itm">
          <p>{prop.price * prop.quantity + prop.size}$</p>
        </div>
        <div className="crt-qty">
          <button className="qty-btn2" onClick={() => checkquantity()}>
            -
          </button>
          <p>{prop.quantity}</p>
          <button className="qty-btn2" onClick={() => test()}>
            +
          </button>
        </div>

        <div onClick={() => deleteitm()} className="delete">
          Delete
        </div>
      </div>
      <div className="line-crt">
        <hr className="hr-target3" />
      </div>
    </>
  ) : (
    "Your cart is empty"
  );
};

export default Cart;
