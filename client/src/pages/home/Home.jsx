import Featured from "../../components/Featured/Featured.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Section from "../../components/Section/Section.jsx";
import "./home.css";
const Home = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <Navbar />
      <Section />
      <Featured />
    </div>
  );
};
export default Home;
