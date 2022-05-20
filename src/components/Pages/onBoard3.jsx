import { Button } from "react-bootstrap";
import "./../Css/onBoard3.css";
import pic from "./../Images/b3.png";
import pic2 from "./../Images/v3.png";
import { Link } from "react-router-dom";
function onBoard3() {
  return (
    <>
      <div className="board3">
        <img src={pic} alt="" className="v3" />
        <img src={pic2} alt="" className="b3" />
        <div className="p3">
          {" "}
          Say no to false reports
          <br />
        </div>
        <Link className="bt3" to="/onBoard4">
          Continue &#65310;
        </Link>
        <a className="c-3">&nbsp;</a>
        <a className="r1-3">&nbsp;</a>
        <a className="r2-3">&nbsp;</a>
        <a className="r3-3">&nbsp;</a>
      </div>
      <Link className="skip3" to="/onBoard4">
        Skip
      </Link>
    </>
  );
}
export default onBoard3;
