import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-left">
          <img src={Logo} alt="logo" />
          <p>
            We are one of the topmost company who provide the fastest delivery
            of medicine as well as we also provide Ambulance Service with 15 -
            25 min and our aim is to provide best treatment or service to the
            client.
          </p>

          <h3>Address :</h3>
          <p> ALifeSaver Pvt.Ltd , Noida Sec - 82 , Uttarpradesh</p>
          <h3>Support Email :</h3>
          <p>support@alifesaver.com</p>
        </div>
        <div className="footer-right">
          <div className="footer-navlinks">
            <h3>Navlinks : </h3>
            <Link>Find a Doctor</Link>
            <Link>Pharamacuties</Link>
            <Link>Ambulance</Link>
            <Link>Blogs</Link>
          </div>
          <div className="footer-social">
            <h3>Social Icons : </h3>
            <Link>
              <BsFacebook size={30} className="footer-icons" />
            </Link>
            <Link>
              <BsInstagram size={30} className="footer-icons" />
            </Link>
            <Link>
              <BsLinkedin size={30} className="footer-icons" />
            </Link>
            <Link>
              <BsTwitter size={30} className="footer-icons" />
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright ©️ {new Date().getFullYear()} ALifeSaver, All right reserved
          @Design by Sawan Kumar Jha
        </p>
      </div>
    </div>
  );
}

export default Footer;
