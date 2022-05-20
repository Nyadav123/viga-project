import "./../Css/Check.css";
import pic from "./../Images/pic.png";
import tick from "./../Images/tick.png";
import cap from "./../Images/cap.png";
import load from "./../Images/load.png";
import admin from "./../Images/person.png";
import { Link } from "react-router-dom";
const Check = () => {
  return (
    <>
      <div className="c-head"> &#60;&nbsp; Graduate Record Examination</div>
      <div className="c-time">
        17th Dec 2020<p>9:00&nbsp;am&nbsp;-&nbsp;12:00&nbsp;pm</p>
      </div>
      <img className="c-img" src={pic}></img>
      <img className="c-cap" src={cap}></img>
      <div className="testing">
        <img src={tick} />
        &nbsp;&nbsp;&nbsp;Webcam check
        <br />
        <img src={tick} />
        &nbsp;&nbsp;&nbsp;Mic testing
        <br />
        <br />
        &#10060; &nbsp;&nbsp;&nbsp;a Iris sync
        <br />
        <br />
        &#10060; &nbsp;&nbsp;&nbsp;BT / Alien harware detection
        <br />
        <img src={tick} />
        &nbsp;&nbsp;&nbsp;QR / Virtual Machine detection
        <br />
        <br />
        <div className="c-circle"></div>
        <div className="c-name">Browser lock</div>
        <br />
        <div className="c-circle"></div>
        <div className="c-name">Screen capture</div>
        <br />
        <div className="c-circle"></div>
        <div className="c-name">identify authentication</div>
      </div>
      <div className="c-personal">
        Samuel Doe <br />
        <p>I8BIS1241</p>
      </div>
      <div className="c-pic">
        <img src={admin}></img>
      </div>
      <Link to="/exam" className="c-start">
        Start Exam
      </Link>
    </>
  );
};
export default Check;
