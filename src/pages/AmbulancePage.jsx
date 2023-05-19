import React from "react";
import { BsSearch } from "react-icons/bs";
import AmbulanceDetails from "../data/AmbulanceDetails";
import AmbulanceCar from "../assets/ambulance_car.gif";
function AmbulancePage() {
  return (
    <div className="ambulance-page page">
      <div className="ambulance-list">
        <p>Search Result</p>

        {AmbulanceDetails.map((element, index) => {
          return (
            <div
              className="individual-ambulance-container"
              key={"individual-ambulance" + index}
            >
              <div className="ambulance-logo">
                <img src={AmbulanceCar} alt="Not Found" />
              </div>
              <div className="ambulance-individual-content">
                <h3>{element.driverName}</h3>
                <small>
                  <span>Vechicle no : </span>
                  {element.ambulanceNumber}
                </small>
                <small>
                  <span>Location : </span>
                  {element.location}
                </small>
                <small>
                  <span>Phone no : </span>
                  {element.phoneNumber}
                </small>

                <button className="ambulance-book-now-btn">Book Now</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="map">
        <div className="search-pickup-container">
          <div className="pickup-search-container">
            <input
              type="text"
              alt="Not Found"
              placeholder="Seacrh pickup Location"
              name="pickup"
            />
          </div>
          <div className="pickup-search-container">
            <input
              type="text"
              alt="Not Found"
              placeholder="Seacrh Designation Location"
              name="pickup"
            />
            <BsSearch size={40} className="pickup-icon" />
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.391730207977!2d77.40487019857207!3d28.540719047852363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce8c9298b08cd%3A0x42168ba5fab1af2f!2sNagla%20Charan%20Dass%2C%20Block%20A%2C%20Phase-2%2C%20Noida%2C%20Uttar%20Pradesh%20201305!5e0!3m2!1sen!2sin!4v1679649708826!5m2!1sen!2sin"
            width="100%"
            height={600}
            allowfullscreen=""
            style={{ border: "none" }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default AmbulancePage;
