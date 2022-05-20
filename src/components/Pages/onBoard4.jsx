import { Button } from "react-bootstrap";
import "./../Css/onBoard4.css";
import pic from "./../Images/b4.png"
import pic2 from "./../Images/v4.png";
import {Link} from "react-router-dom";
function onBoard4() {
  return (
    <>
      <div className="board4">
      <img src={pic2} alt="" className="v4" />
        <img src={pic} alt="" className="b4"/>
       
      
        <div className="p4">
          
         Protecting rights repecting privacy
        
        </div>
        <Link className="bt4" to="/home">
          Go to dashboard &#65310;
        </Link>
        <a className="c-4">&nbsp;</a>
        <a className="r1-4">&nbsp;</a>
        <a className="r2-4">&nbsp;</a>
        <a className="r3-4">&nbsp;</a>
      </div>
    </>
  );
}
export default onBoard4;
