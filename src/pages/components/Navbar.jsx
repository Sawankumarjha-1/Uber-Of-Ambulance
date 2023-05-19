import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "../../css/index.scss";
function Navbar() {
  return (
    <div className="navigation">
      <div className="navigation-image">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="navigation-links">
        <Link to="/">Home</Link>
        <Link to="/find_doctor">Find a Doctor</Link>
        <Link to="/pharmacuties">Pharamacuties</Link>
        <Link to="/ambulance_service">Ambulance</Link>
        <Link to="our_blogs">Blogs</Link>
        <Link to="/today_health_news">News</Link>
      </div>
      <div className="navigation-btn">
        <Link id="loginBtn" to="/login">
          Login
        </Link>
        <Link id="signupBtn" to="/signup">
          Signup
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
