import "./searchResult.css";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Card = ({ item }) => {
  const domref = useRef();
  const [array, setarray] = useState([]);
  useEffect(() => {
    if (!domref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(domref.current);
  }, [item]);

  return (
    <div
      ref={domref}
      className="key w-1/4 mx-4 my-12 h-80 p-2 rounded-xl flex flex-col  bg-white"
      key={item.id}
    >
      <div className=" w-full h-max flex justify-center mt-8">
        <img className="image w-32 h-32 rounded-full" src={item.image} alt="" />
      </div>
      <div className=" w-full h-max mt-8  flex flex-col">
        <h2 className=" text-sm">{item.name}</h2>
        <h2 className=" font-bold text-slate-600 text-lg mt-4">
          <span className=" text-green-400">$</span>
          {item.price}
        </h2>
        <div className=" w-full flex justify-center mt-2">
          <NavLink className=" w-max" to={`/Brew/${item._id}`}>
            <button className=" w-max px-4 py-1 bg-black text-slate-100 text-base rounded-lg">
              View
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
const Result = (props) => {
  return props.items.map((item) => <Card item={item} />);
};
export default Result;
