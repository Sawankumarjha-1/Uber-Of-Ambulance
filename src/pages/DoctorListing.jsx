import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import Doctor from "../assets/doctor.gif";
import BlogCarousel from "../pages/components/BlogCarousel";
import Testimonial from "./components/Testimonial";

function DoctorListing() {
  return (
    <div className="doctor-listing page">
      <HeroSection />
      <DoctorMainListing />
      <BlogCarousel />
      <Testimonial />
    </div>
  );
}
const HeroSection = () => {
  const [locationSearchDisplay, setLocationSearchDisplay] = useState(false);
  const [doctorSearchDisplay, setDoctorSearchDisplay] = useState(false);
  return (
    <div className="doctor-listing-hero">
      <h1>Find best doctor for your treatment</h1>
      <div className="search-doctor">
        <input
          type="text"
          placeholder="Search Location"
          name="location"
          className="location-search"
          onFocus={() => {
            setLocationSearchDisplay(true);
          }}
          onKeyDown={() => {
            setLocationSearchDisplay(true);
          }}
          autoComplete="off"
        />
        <input
          type="text"
          placeholder="Search Categrory of Doctor"
          name="catehory-doctor"
          className="doctor-search"
          autoComplete="off"
          onFocus={() => {
            setDoctorSearchDisplay(true);
          }}
          onKeyDown={() => {
            setDoctorSearchDisplay(false);
          }}
        />
        <GoSearch size={40} className="submit-doctor-btn" />
        <div
          className="location-search-options"
          style={{ display: locationSearchDisplay == true ? "block" : "none" }}
          onMouseLeave={() => {
            setLocationSearchDisplay(false);
          }}
        >
          <p>Hello World</p>
          <p>Hello World</p>
          <p>Hello World</p>
          <p>Hello World</p>
          <p>Hello World</p> <p>Hello World</p>
          <p>Hello World</p>
          <p>Hello World</p>
          <p>Hello World</p>
          <p>Hello World</p>
        </div>
        <div
          className="doctor-search-options"
          style={{ display: doctorSearchDisplay == true ? "block" : "none" }}
          onMouseLeave={() => {
            setDoctorSearchDisplay(false);
          }}
        >
          <p>Hello World</p>
          <p>Hello World</p>
          <p>Hello World</p>
          <p>Hello World</p>
          <p>Hello World</p>
        </div>
      </div>
      <p>Popular Search : Dentist | Pediatrician | Gynecologist/Obstetrician</p>
    </div>
  );
};
const DoctorMainListing = () => {
  return (
    <div className="doctor-main-listing-container">
      <div className="individual-doctor-container">
        <div className="image-div">
          <img src={Doctor} alt="" />
        </div>
        <div className="content-div">
          <h4>Dr. Sreenath S Manikanti</h4>
          <small>Dentist</small>
          <p>Koramangala,Bangalore,</p>
          <p>Growing Up Children's Clinic </p>
        </div>
        <div className="price-div">
          <h2>₹ 700 /-</h2>
          <p>Clinic appointment fee</p>
          <button>Book Now</button>
        </div>
      </div>
      <div className="individual-doctor-container">
        <div className="image-div">
          <img src={Doctor} alt="" />
        </div>
        <div className="content-div">
          <h4>Dr. Sreenath S Manikanti</h4>
          <small>Dentist</small>
          <p>Koramangala,Bangalore,</p>
          <p>Growing Up Children's Clinic </p>
        </div>
        <div className="price-div">
          <h2>₹ 700 /-</h2>
          <p>Clinic appointment fee</p>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorListing;
