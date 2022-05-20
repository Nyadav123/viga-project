import { Button } from "react-bootstrap";
import "./../Css/onBoard1.css";
import pic2 from "./../Images/v1.png";
import pic from "./../Images/b1.png";
import { Link } from "react-router-dom";
function onBoard1() {
  return (
    <>
      <div className="board1">
        <img src={pic2} alt="" className="v1" />
        <img src={pic} alt="" className="b1" />
        <div className="p1">
          {" "}
          We ensure that honesty pays
          <br />
        </div>
        <Link className="bt" to="/onBoard2">
          Continue &#65310;
        </Link>
        <a className="c-1">&nbsp;</a>
        <a className="r1-1">&nbsp;</a>
        <a className="r2-1">&nbsp;</a>
        <a className="r3-1">&nbsp;</a>
      </div>
      <Link className="skip-1" to="/onBoard2">
        Skip
      </Link>
    </>
  );
}

export default onBoard1;
