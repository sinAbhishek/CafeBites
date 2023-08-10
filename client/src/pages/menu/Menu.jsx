import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import "./menu.css";
import axios from "axios";
import Result from "../../components/Search result/Search_result";
import useFetch from "../../hooks/useFetch.js";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ScaleLoader from "react-spinners/ScaleLoader";
import Animation from "../../data/image/loading.gif";

const Menu = () => {
  const y = "Hot Coffees";
  const [type, setType] = useState("");
  const [open, setopen] = useState(false);
  const [Loading, setloading] = useState(true);
  const { data } = useFetch(`/Brew?type=${type}`);
  const [items, setitems] = useState("");
  const [categoryDrink, setcategoryDrink] = useState("");
  const [categoryFood, setcategoryFood] = useState("");
  const [beverage, setbeverage] = useState(false);
  const [food, setfood] = useState(false);
  const Url = process.env.REACT_APP_Url;
  var Drinks = [];
  var Food = [];
  var item = "";
  useEffect(() => {
    data && setloading(false);
  }, [data]);
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
  const showDrinks = () => {
    setbeverage(true);
    setfood(false);
  };
  const showFood = () => {
    setbeverage(false);
    setfood(true);
    setType("");
  };
  const showAll = () => {
    setbeverage(false);
    setfood(false);
    setType("");
  };
  return (
    <div className="main relative">
      {Loading && (
        <div className="absolute top-0 left-0 right-0  h-screen">
          <div className="LoadingBg absolute left-0 bottom-0 top-0 right-0 bg-gray-800 bg-cover bg-no-repeat bg z-50 flex items-center justify-center">
            <ScaleLoader
              color={"#03ff46"}
              loading={Loading}
              width={"3px"}
              height={"20px"}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
      )}
      <Navbar />
      <div className="filter">
        <div className="filter-wrapper mt-20">
          <div className=" w-screen  h-20 flex flex-col">
            <div className=" mt-4 flex justify-center">
              <button
                onClick={() => showAll()}
                className={
                  !beverage && !food
                    ? " bg-red-700 text-white w-max px-2 mr-4 py-1 rounded-md  "
                    : " bg-teal-400 text-white w-max px-2 mr-4 py-1 rounded-md  "
                }
              >
                All
              </button>
              <button
                onClick={() => showDrinks()}
                className={
                  beverage
                    ? " bg-red-700 text-white w-max px-2 mr-4 py-1 rounded-md  "
                    : " bg-teal-400 text-white w-max px-2 mr-4 py-1 rounded-md  "
                }
              >
                Drinks
              </button>
              <button
                onClick={() => showFood()}
                className={
                  food
                    ? " bg-red-700 text-white w-max px-2 mr-4 py-1 rounded-md  "
                    : " bg-teal-400 text-white w-max px-2 mr-4 py-1 rounded-md  "
                }
              >
                Food
              </button>
            </div>
            {beverage && (
              <div className=" flex justify-center mt-8">
                <>
                  {categoryDrink[0] &&
                    categoryDrink.map((cr) => (
                      <button
                        className={
                          type === cr
                            ? "subBtn bg-black text-sm text-white w-max px-2 py-1 rounded-md mr-4 "
                            : " subBtn bg-slate-100 font-medium text-sm text-slate-700 w-max px-2 py-2 rounded-md mr-4 border-2 border-blue-500 "
                        }
                        onClick={() => filter(`${cr}`)}
                      >
                        {cr}
                      </button>
                    ))}
                </>
              </div>
            )}
            {food && (
              <div className="flex justify-center mt-8">
                {categoryFood[0] &&
                  categoryFood.map((cr) => (
                    <button
                      className={
                        type === cr
                          ? "subBtn bg-black text-sm text-white w-max px-2 py-1 rounded-md mr-4 "
                          : "subBtn bg-slate-100 font-medium text-sm py-2 text-slate-700 w-max px-2  rounded-md mr-4 border-2 border-blue-500 "
                      }
                      onClick={() => filter(`${cr}`)}
                    >
                      {cr}
                    </button>
                  ))}
              </div>
            )}
          </div>

          <div className="results">
            <Result items={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
