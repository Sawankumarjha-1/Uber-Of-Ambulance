import React from "react";
import homeBg from "../assets/homebg.gif";
import { BsSearch } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import Doctor from "../assets/doctor.gif";
import Delivery from "../assets/delivery.png";
import Ambulance from "../assets/ambulance_car.gif";
import Testimonial from "./components/Testimonial";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home page">
      {/**Hero Section***/}
      <HeroSection />
      {/**Search Div */}
      <SearchContainer />
      {/**Navigating Section */}
      <NavigatingDiv />

      {/*Home Blog Section */}
      <HomeBlog />
      {/*******Testimonial*******/}
      <Testimonial />
    </div>
  );
}
const HomeBlog = () => {
  return (
    <div className="home-blog-section">
      <div className="home-blog-left">
        <h1>Read Top articles from health experts</h1>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate
        </p>
        <button type="button">See all articles</button>
      </div>
      <div className="home-blog-right">
        <Link
          to="https://www.punjabnewsexpress.com/health/news/kenya-heightens-surveillance-after-outbreak-of-marburg-in-tanzania-203724"
          target={"_blank"}
        >
          <div className="individual-home-blog">
            <img
              src="https://www.punjabnewsexpress.com/images/article/article203724.jpg"
              alt="Not Found"
            />
            <h3>
              Kenya heightens surveillance after outbreak of Marburg in Tanzania
              - Punjab News Express
            </h3>
          </div>
        </Link>
        <Link
          target="_blank"
          to="https://www.news-medical.net/news/20230323/E-cigarette-flavors-are-associated-with-lower-odds-of-quitting.aspx"
        >
          <div className="individual-home-blog">
            <img
              src="https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_742691_16795467285188434.jpg"
              alt="Not Found"
            />
            <h3>
              E-cigarette flavors are associated with lower odds of quitting -
              News-Medical.Net
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};
const NavigatingDiv = () => {
  return (
    <div className="pointing-container">
      <div className="pointing-individual-div">
        <img src={Doctor} alt="Not Found" />
        <h3>Find Doctor Near Me</h3>
        <p>Confirmed Appointment</p>
      </div>
      <div className="pointing-individual-div">
        <img src={Delivery} alt="Not Found" />
        <h3>Find Doctor Near Me</h3>
        <p>Confirmed Appointment</p>
      </div>
      <div className="pointing-individual-div">
        <img src={Ambulance} alt="Not Found" />
        <h3>Find Doctor Near Me</h3>
        <p>Confirmed Appointment</p>
      </div>
    </div>
  );
};
const SearchContainer = () => {
  return (
    <div>
      <h1 className="main-heading">
        Feel <span>Better</span> about finding <span>Ambulance</span>
      </h1>
      <div className="search-container">
        <div className="individual-search">
          <CiLocationOn size={40} className="location-icon" />
          <input type="text" placeholder="Search Location...." name="" />
          <BsSearch size={40} className="search-btn" />
        </div>
      </div>
    </div>
  );
};
const HeroSection = () => {
  return (
    <div className="home-hero-section">
      <img src={homeBg} alt="Not Found" />
      <div className="asking-div asking-div1">
        <h2>
          Are you thinking about <span>Ambulance ?</span>
        </h2>
      </div>
      <div className="asking-div asking-div2">
        <h2>
          Are you thinking about <span>Medicine ?</span>
        </h2>
      </div>
      <div className="asking-div asking-div3">
        <h2>
          Are you thinking about <span>Doctor ?</span>
        </h2>
      </div>
      <div className="asking-div asking-div4">
        <h2>
          Don't Worry we are here to provide one step solution for all the
          <span> Healthcare Problem</span>
        </h2>
      </div>
    </div>
  );
};
export default Home;
