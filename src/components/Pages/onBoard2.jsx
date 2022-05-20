import { Button } from "react-bootstrap";
import "./../Css/onBoard2.css";
import pic from "./../Images/b2.png";
import pic2 from "./../Images/v2.png";
import { Link } from "react-router-dom";
function onBoard2() {
  return (
    <>
      <div className="board2">
        <img src={pic2} alt="" className="v2" />
        <img src={pic} alt="" className="b2" />
        <div className="p2">
          {" "}
          Customise your assessment and proctoring needs
          <br />
        </div>
        <Link className="bt2" to="/onBoard3">
          Continue &#65310;
        </Link>
        <a className="r1-2">&nbsp;</a>
        <a className="c-2">&nbsp;</a>
        <a className="r2-2">&nbsp;</a>
        <a className="r3-2">&nbsp;</a>
      </div>
      <Link className="skip2" to="/onBoard3">
        Skip
      </Link>
    </>
  );
}

export default onBoard2;
