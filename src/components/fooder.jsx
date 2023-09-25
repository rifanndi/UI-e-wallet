import {} from "react";
import home from "../assets/home.svg";
import kotak from "../assets/kotak.svg";
import user from "../assets/user.svg";
import walet from "../assets/walet.svg";
import paper from "../assets/paper.svg";
import "../components/css/foter.css";
/*sudah selesai*/
 const Fooodeter = () => {
  return (
    <>
      <section className="WA">
        <div className="h">
          <a href="" className="na">
            <img src={home} className="logo-react" alt="React logo" /> Home  </a>
          <a href="" className="">
            <img src={paper} className="logo-react" alt="React logo" />  Riwayat </a>

          <div className="kode">
            <a href="" className="likaran">
              <img src={kotak} className="logo-react1" alt="React logo" /> Pay </a>
          </div>
          <a href="" className="">
            <img src={walet} className="logo-react" alt="React logo" /> Dompet</a>
          <a href="" className="na">
            <img src={user} className="logo-react" alt="React logo" /> User </a>
        </div>
      </section>
    </>
  );
};
export default Fooodeter;
