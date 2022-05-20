// import { Button } from "react-bootstrap";
import pic from "./../Images/proc.png";
import "./../Css/Spash.css";
import { Link } from "react-router-dom";
function Spash() {
  return (
    <>
      <div className="spash">
        <img src={pic} alt="" className="c-logo" />
        <div className="text">
          Welcome aboard <br />
          to the future in the making
          <br />
          you've just become a part of it
        </div>
        <br />
        <br />
        <Link className="button" to="/login">
          Continue &#65310;
        </Link>
      </div>
    </>
  );
}

export default Spash;
