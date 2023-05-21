import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const { item_count } = useContext(CartContext);
  const handleclick = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="Navbar">
      <div className="Container">
        <div className="left">
          <span className="logo">Cafe</span>
        </div>
        <div className="menu-logo">
          <Link className="home" to="/">
            Home{" "}
          </Link>
          <Link className="menu" to="/menu">
            Discover
          </Link>
        </div>

        <div className="navItems">
          <Link to="/Brew/order">
            <div className="cart-icon">
              <FontAwesomeIcon
                className="icon fa-2x"
                icon={faMugHot}
              ></FontAwesomeIcon>
              {item_count ? (
                <div className="cart-count">{item_count}</div>
              ) : null}
            </div>
          </Link>
          <div className="buttons">
            {user ? (
              <div className="userlogin">
                <p className="username">{`${user.username}`}</p>
                <button className="logout" onClick={handleclick}>
                  <FontAwesomeIcon className="icon-logout" icon={faPowerOff} />
                </button>
              </div>
            ) : (
              <>
                <button className="navButton">
                  <a className="btn-log" href="/Login">
                    Login
                  </a>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
