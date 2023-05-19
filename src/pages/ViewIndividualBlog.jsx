import React from "react";

import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineSend,
  AiOutlineHeart,
} from "react-icons/ai";
function ViewIndividualBlog() {
  return (
    <div className="view-individual-blogs page">
      <div className="read-blogs-content">
        <img
          src="https://static.toiimg.com/thumb/98756860.cms?width=680&height=512&imgsize=973351"
          alt="Not Found"
        />
        <h3>Here’s what your urine colour is telling you about your health</h3>
        <small>
          <span>Published at: </span> 19-03-2023 | <span>Author: </span>
          ALifeSaver <span>Source: </span>ALifeSaver
        </small>
        <p>
          As a means of eliminating waste and excess water that the body does
          not require, urine serves a crucial purpose in the body. Urine passes
          via the urinary system, a pathway that contains kidneys that filter
          waste from the blood, before leaving your body. It can be used to
          diagnose a variety of illnesses. In fact, the hue of your urine may
          reveal important information about your internal health. Dehydration
          is typically indicated by dark yellow urine, while reddish urine may
          be cancerous. There are many other causes of pink, brown, purple, or
          milky urine, including the foods you eat, the medications you take,
          and certain medical disorders.Many disorders can be diagnosed through
          the colour of the urine As a means of eliminating waste and excess
          water that the body does not require, urine serves a crucial purpose
          in the body. Urine passes via the urinary system, a pathway that
          contains kidneys that filter waste from the blood, before leaving your
          body. It can be used to diagnose a variety of illnesses. In fact, the
          hue of your urine may reveal important information about your internal
          health. Dehydration is typically indicated by dark yellow urine, while
          reddish urine may be cancerous. There are many other causes of pink,
          brown, purple, or milky urine, including the foods you eat, the
          medications you take, and certain medical disorders.Many disorders can
          be diagnosed through the colour of the urine
        </p>

        <div className="write-comments">
          <input type="text" placeholder="Write Comments" />
          <button>
            <AiOutlineSend size={20} />
          </button>
          <AiOutlineHeart size={30} className="heart-icon" />
        </div>
        <div className="listed-comments">
          <div className="individual-listed-comments">
            <h4>Rohan Kumar Sharma</h4>
            <p>
              Note that the development build is not optimized. To create a
              production build
            </p>
          </div>
          <div className="individual-listed-comments">
            <h4>Rohan Kumar Sharma</h4>
            <p>
              Note that the development build is not optimized. To create a
              production build
            </p>
          </div>
        </div>
      </div>
      <div className="category-and-social-media">
        <div className="categroy">
          <h3>Category </h3>
          <p>Nutrition and Diet</p>
          <p>Fitness</p>
          <p>Weight control</p>
        </div>
        <div className="total-comments">
          <p>255 Comments and 220 likes</p>
        </div>
        <div className="social-media">
          <h3>Share on</h3>
          <AiFillFacebook size="40" className="viewblog-icons" />
          <AiFillInstagram size="40" className="viewblog-icons" />
          <AiFillTwitterCircle size="40" className="viewblog-icons" />
          <AiFillLinkedin size="40" className="viewblog-icons" />
        </div>
        <div className="latest-blogs">
          <h3>Latest Blogs</h3>
          <div className="latest-individual">
            <img
              src="https://static.toiimg.com/thumb/98756860.cms?width=680&height=512&imgsize=973351"
              alt="Not Found"
            />
            <h5>
              Headings must have content and the content must be accessible by a
              screen reader
            </h5>
          </div>
        </div>
        <div className="Subscribe-to-news-letter">
          <h3>Subscribe to our newsletter</h3>
          <div className="newsletter">
            <input type="text" placeholder="Enter Email" />
            <button>
              <AiOutlineSend size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewIndividualBlog;
