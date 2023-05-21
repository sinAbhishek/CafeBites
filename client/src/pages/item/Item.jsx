import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import post from "../../instance";
import "./item.css";
import { useContext } from "react";
const Item = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [item, setItems] = useState();
  const id = location.pathname.split("/")[2];
  const { data, loading } = useFetch(`/Brew/${id}`);
  const { user } = useContext(AuthContext);
  const { dispatch, total, products, addtocart, item_count } =
    useContext(CartContext);
  const [quantity, setquantity] = useState(1);

  const [chk, setchk] = useState(true);
  const sub_quantity = () => {
    if (quantity == 1) {
      console.log("its 1");
    } else {
      setquantity(quantity - 1);
    }
  };
  const add_quantity = () => {
    setquantity(quantity + 1);
  };

  const check = () => {
    if (chk) {
      addtocart(data, quantity);
      setchk(false);
    } else {
      console.log("item already exist");
    }
  };

  return loading ? (
    "loading"
  ) : (
    <>
      <Navbar />
      <div className="main-itm-container">
        <div className="item-container">
          <div className="itm-desc">
            <h1 className="itm-h1">{data.name}</h1>
            <div className="img-containerAlt">
              <img className="img-itm" src={data.image} alt="" />
            </div>
            <p className="itm-p1">{data.description}</p>
          </div>
          <div className="img-container">
            <img className="img-itm" src={data.image} alt="" />
          </div>

          <div className="item-price">
            <div className="quantity">
              <p className="qty">QUANTITY</p>

              <button className="qty-bttn" onClick={sub_quantity}>
                -
              </button>
              <p className="btn-qty">{quantity}</p>
              <button className="qty-bttn" onClick={add_quantity}>
                +
              </button>
            </div>
            <div className="total">
              <p className="price-itm2">PRICE:</p>
              <p>{data.price * quantity}</p>
            </div>

            <button className="checkout" onClick={() => check()}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Item;
