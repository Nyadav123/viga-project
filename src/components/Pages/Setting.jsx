import { FaAngleDown } from "react-icons/fa";
import "./../Css/Setting.css";
import edit from "./../Images/edit.png";
import persn from "./../Images/person.png";
const Setting = () => {
  return (
    <>
      <div className="arw">&#60;</div>
      <img src={persn} className="prsn-pic" />
      <div className="s-head">
        {" "}
        Samuel Doe &nbsp;&nbsp;<p>18BIS1241</p>
      </div>
      <div className="s-setting">
        <img src={edit} />
        &nbsp;&nbsp;Edit Profile Picture
      </div>
      <div className="s-General1">General Settings</div>
      <div className="s-box">
        <div className="stng-1">
          Settings 1<FaAngleDown className="s-sign1" />{" "}
        </div>
        <div className="s-line1"></div>
        <div className="stng-2">
          Settings 2
          <div className="s-toggle1">
            <div className="s-circle1"></div>{" "}
          </div>
          <div className="s-line2"></div>
        </div>
        <div className="stng-3">
          Settings 3
          <div className="s-toggle2">
            <div className="s-circle2"></div>{" "}
          </div>{" "}
        </div>
      </div>
      <div className="s-General2">General Settings</div>
      <div className="s-box2">
        <div className="stng2-2">
          Settings 1<div className="s-view">View More</div>{" "}
        </div>
        <div className="s2-line2"></div>

        <div className="stng2-3">
          Settings 2
          <div className="s2-toggle">
            <div className="s2-circle"></div>{" "}
          </div>{" "}
        </div>
      </div>
    </>
  );
};
export default Setting;
