import React from "react";
import { GoSearch } from "react-icons/go";
import MedicineBg from "../assets/medicinebg.png";
import SkinCare from "../assets/skin.webp";
import Weight from "../assets/weight.webp";
import Heart from "../assets/heart.webp";
import Cough from "../assets/cough.webp";
import Diabetes from "../assets/diabetes.webp";
import Pain from "../assets/pain_relief.webp";
import BabyCare from "../assets/babycare.webp";
import Fitness from "../assets/fitness.webp";
import FamilyCare from "../assets/familycare.webp";
import AlternateMedicine from "../assets/alternatemedicine.webp";
import WomenCare from "../assets/womencare.webp";
import HealthCondition from "../assets/healthcondition.webp";
import PersonalCare from "../assets/personalcare.webp";
import Device from "../assets/device.webp";

import Testimonial from "./components/Testimonial";
import { Link } from "react-router-dom";

function PharmacutiesPage() {
  return (
    <div className="pharmacuties-page page">
      <div className="view-cart-nav">
        <div className="pharmacuties-search-div">
          <input type="text" placeholder="Search by medicine..." />
          <GoSearch className="search-submit-btn" size={40} />
        </div>
        <button>View Cart(0)</button>
      </div>
      <div className="pharmacuties-hero-section">
        <div className="pharmacuties-hero-section-content">
          <h1>
            We Provide <span>fast</span> and <span>reliable</span> delivery
          </h1>
        </div>
        <div className="pharmacuties-hero-section-image">
          <img src={MedicineBg} alt="Not Found" />
        </div>
      </div>
      <h1 className="heading">Browse medicines & health products</h1>
      <h2 className="heading">Health Condition</h2>
      <HealthConditionSection />
      <h2 className="heading">Categories</h2>
      <Categories />
      <Testimonial />
    </div>
  );
}
const HealthConditionSection = () => {
  return (
    <div className="medicine-by-category">
      <div className="individual-medicine-by-category">
        <Link to="/medicne_category">
          <img src={SkinCare} alt="Not found" />
        </Link>
      </div>
      <div className="individual-medicine-by-category">
        <Link to="/medicne_category">
          <img src={Weight} alt="Not found" />
        </Link>
      </div>
      <div className="individual-medicine-by-category">
        <Link to="/medicne_category">
          <img src={Pain} alt="Not found" />
        </Link>
      </div>
      <div className="individual-medicine-by-category">
        <Link to="/medicne_category">
          <img src={Heart} alt="Not found" />
        </Link>
      </div>
      <div className="individual-medicine-by-category">
        <Link to="/medicne_category">
          <img src={Cough} alt="Not found" />
        </Link>
      </div>
      <div className="individual-medicine-by-category">
        <Link to="/medicne_category">
          <img src={Diabetes} alt="Not found" />
        </Link>
      </div>
    </div>
  );
};
const Categories = () => {
  return (
    <div className="medicine-by-category">
      <div className="individual-medicine-by-category">
        <Link to="/medicne_category">
          <img src={BabyCare} alt="Not found" />
        </Link>
      </div>
      <div className="individual-medicine-by-category">
        <Link to="/medicne_category">
          <img src={Fitness} alt="Not found" />
        </Link>
      </div>
      <div className="individual-medicine-by-category">
        <Link to="/medicne_category">
          <img src={FamilyCare} alt="Not found" />
        </Link>
      </div>
      <div className="individual-medicine-by-category">
        <Link to="/medicne_category">
          <img src={AlternateMedicine} alt="Not found" />
        </Link>
      </div>
      <div className="individual-medicine-by-category">
        <Link to="/medicne_category">
          <img src={WomenCare} alt="Not found" />
        </Link>
      </div>
      <div className="individual-medicine-by-category">
        <Link to="/medicne_category">
          <img src={HealthCondition} alt="Not found" />
        </Link>
      </div>
      <div className="individual-medicine-by-category">
        <Link to="/medicne_category">
          <img src={PersonalCare} alt="Not found" />
        </Link>
      </div>
      <div className="individual-medicine-by-category">
        <Link to="/medicne_category">
          <img src={Device} alt="Not found" />
        </Link>
      </div>
    </div>
  );
};
export default PharmacutiesPage;
