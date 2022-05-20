import pic from "./../Images/logo.png";
import "./../Css/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login">
        <img src={pic} alt="" className="logo" />
        <div className="user">Username</div>
        <div className="blank"></div>
        <div className="user">Password</div>
        <div className="blank"></div>
        <br />
        <Link className="reset">
          Reset Password From Default/
          <br />
          <p>Forget Password</p>
        </Link>
        <br />
        <br /> <br />
        <Link className="log" to="/onBoard1">
          Log In
        </Link>
      </div>
    </>
  );
};

export default Login;
