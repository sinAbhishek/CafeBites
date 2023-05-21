import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import "./menu.css";
import axios from "axios";
import Result from "../../components/Search result/Search_result";
import useFetch from "../../hooks/useFetch.js";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Menu = () => {
  const y = "Hot Coffees";
  const [type, setType] = useState("");
  const [open, setopen] = useState(false);
  const { data, loading } = useFetch(`/Brew?type=${type}`);
  const [items, setitems] = useState("");
  const [categoryDrink, setcategoryDrink] = useState("");
  const [categoryFood, setcategoryFood] = useState("");
  const Url = process.env.REACT_APP_Url;
  var Drinks = [];
  var Food = [];
  var item = "";
  useEffect(() => {
    const call = async () => {
      const res = await axios.get(`${Url}/Brew`);
      setitems(res.data);
    };
    call();
  }, []);

  useEffect(() => {
    const call = () => {
      items.map((cr) => cr.Category === "Drinks" && Drinks.push(cr.type));
      items.map((cr) => cr.Category === "Food" && Food.push(cr.type));
    };
    items[0] && call();
  }, [items]);
  useEffect(() => {
    const call = () => {
      setcategoryDrink(
        Drinks.filter((cr, i, ar) => {
          return i == ar.indexOf(cr);
        })
      );
    };
    Drinks[0] && call();
  }, [Drinks]);
  useEffect(() => {
    const call = () => {
      setcategoryFood(
        Food.filter((cr, i, ar) => {
          return i == ar.indexOf(cr);
        })
      );
    };
    Food[0] && call();
  }, [Food]);

  const call = () => {
    console.log(categoryDrink);
    console.log(Food);
  };

  const filter = (target) => {
    setType(target);
    setopen(!open);
    console.log(target);
  };

  return (
    <div className="main">
      <Navbar />
      <div className="filter">
        <button className="cat-btn" onClick={() => setopen(!open)}>
          Categories
          <ArrowDropDownIcon />
        </button>
        <div className="filter-wrapper">
          <h2 className="type-heading">{type}</h2>
          {/* <div className={open?"hide":"category"}>
            <div className="cat-container">
            <h1 className="heading-type">Drinks</h1>
            {categoryDrink[0]&&categoryDrink.map((cr)=><span className="btn" onClick={()=>filter(`${cr}`)}>{cr}</span>)}
            <h1 className="heading-type">Food</h1>
            {categoryFood[0]&&categoryFood.map((cr)=><span className="btn" onClick={()=>filter(`${cr}`)}>{cr}</span>)}
       
            </div>

            </div> */}
          <div className={open ? "nonDesktop" : "hide"}>
            <div className="cat-container">
              <h1 className="heading-type">Drinks</h1>
              {categoryDrink[0] &&
                categoryDrink.map((cr) => (
                  <span className="btn" onClick={() => filter(`${cr}`)}>
                    {cr}
                  </span>
                ))}
              <h1 className="heading-type">Food</h1>
              {categoryFood[0] &&
                categoryFood.map((cr) => (
                  <span className="btn" onClick={() => filter(`${cr}`)}>
                    {cr}
                  </span>
                ))}
            </div>
          </div>
          <div className="results">
            {loading ? "loading" : <Result items={data} />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
