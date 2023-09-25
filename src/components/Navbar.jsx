import {} from "react";
import notifikassi from "../assets/notifikassi.svg";
import "../components/CSS/Navbar.css";

/*navhome*/
const Navbarhome = () => {
  return (
    <>
      {" "}
      <div className="Navhome">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@1,700&display=swap');
        </style>
        <div className="logo">
          <b>PyFast</b>{" "}
        </div>
        <img className="notifikasi-logo" src={notifikassi} alt="" />
      </div>
    </>
  );
};
export default Navbarhome;
/* navhome end*/
