import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Doctor from "../../assets/doctor.gif";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
};
function BlogCarousel() {
  return (
    <div>
      <h1 className="heading center">
        Read top articles from <span>health</span> experts
      </h1>
      <Carousel
        responsive={responsive}
        className="doctor-listing-blog-carousel"
        autoPlay={true}
      >
        <div>
          <img src={Doctor} alt="blog" />
          <h4>
            Headings must have content and the content must be accessible by a
            screen reader
          </h4>
        </div>
        <div>
          <img src={Doctor} alt="blog" />
          <h4>
            Headings must have content and the content must be accessible by a
            screen reader
          </h4>
        </div>
        <div>
          <img src={Doctor} alt="blog" />
          <h4>
            Headings must have content and the content must be accessible by a
            screen reader
          </h4>
        </div>
        <div>
          <img src={Doctor} alt="blog" />
          <h4>
            Headings must have content and the content must be accessible by a
            screen reader
          </h4>
        </div>
      </Carousel>
    </div>
  );
}

export default BlogCarousel;
