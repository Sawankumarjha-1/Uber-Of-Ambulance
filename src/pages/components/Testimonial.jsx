import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function Testimonial() {
  return (
    <div>
      <h1 className="heading center">
        What our <span>users</span> have to say
      </h1>
      <Carousel
        className="testimonial"
        showArrows={false}
        showStatus={false}
        autoPlay={true}
      >
        <div>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without
          </p>
        </div>
        <div>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without
          </p>
        </div>
        <div>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without
          </p>
        </div>
      </Carousel>
    </div>
  );
}

export default Testimonial;
