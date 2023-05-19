import React from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import Testimonial from "./components/Testimonial";
function ProductList() {
  return (
    <div className="product-list page">
      <div className="view-cart-nav">
        <div className="pharmacuties-search-div">
          <input type="text" placeholder="Search by medicine..." />
          <GoSearch className="search-submit-btn" size={40} />
        </div>
        <button>View Cart(0)</button>
      </div>
      <div className="product-list-nav">
        <Link>Family Care </Link>
        <Link>Skin Care</Link>
        <Link>Fitness & Wellness</Link>
        <Link>Hair Care</Link>
        <Link>Lip Care</Link>
        <Link>Baby Care</Link>
      </div>
      <h1 className="heading">Skin Care 540 Products </h1>
      <div className="product-list-div">
        <IndividualProductDiv />
        <IndividualProductDiv />
        <IndividualProductDiv />
        <IndividualProductDiv />
        <IndividualProductDiv />
        <IndividualProductDiv />
        <IndividualProductDiv />
      </div>
      <Testimonial />
    </div>
  );
}
const IndividualProductDiv = () => {
  return (
    <div className="individual-product-list-div">
      <div className="product-list-image-container">
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61Ngc7WyUKL._SL1500_.jpg"
          alt="not found"
        />
      </div>
      <div className="product-list-content-container">
        <h3>Product Name</h3>
        <h2>₹ 185</h2>
        <div className="product-list-btn">
          <button className="add-to-cart">Add To Cart</button>
          <button className="buy-now">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
