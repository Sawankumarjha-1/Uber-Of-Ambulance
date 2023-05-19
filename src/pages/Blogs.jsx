import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Blogs() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=101f8ed65d054da898d5a531bb835797",
      { timeout: 8000 }
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json.articles);

        setLoading(false);
      });
  }, []);
  return (
    <div className="blog-page page">
      <div className="blog-hero-container">
        <h1>
          Do You Sleep Well? Diabetes, Heart Disease, Depression Among Likely
          Consequences If You Don't - ABP Live
        </h1>
        <small>
          <span>Published at: </span>
          2023-03-17T08:12:41Z | <span>Author: </span>
          ABP News Bureau | <span>Source : </span>
          Abplive.com
        </small>
        <p>
          Poor sleep can negatively impact physical and mental health. Learn
          about the recommended amount and quality of sleep for different age
          groups and the consequences of ignoring sleep health.
        </p>
        <Link
          to={
            "https://news.abplive.com/health/world-sleep-day-2023-do-you-sleep-well-diabetes-heart-disease-depression-among-likely-consequences-if-you-don-t-1589039"
          }
          target="_blank"
        >
          Read More
        </Link>
      </div>
      <div className="blog-section">
        <div className="blog-area">
          {loading === false ? (
            <div>
              {data.length !== 0 ? (
                data.map((element, index) => {
                  return (
                    element.urlToImage !== null && (
                      <div
                        className="individual-blogs"
                        key={"blogs_individual_blogs" + index}
                      >
                        <div className="blogs_image">
                          <img src={element.urlToImage} alt="not found" />
                        </div>
                        <div className="blogs-content">
                          <h4>{element.title}</h4>
                          <small>
                            <span>Published at: </span>
                            {element.publishedAt} | <span>Author: </span>
                            {element.author} | <span>Source : </span>
                            {element.source.name}
                          </small>
                          <p>{element.description}</p>
                          <Link to={element.url} target="_blank">
                            Read More
                          </Link>
                        </div>
                      </div>
                    )
                  );
                })
              ) : (
                <h2>Data Not Found !</h2>
              )}
            </div>
          ) : (
            <p>Loading....</p>
          )}
        </div>
        <div className="category-area">
          <h4>Blog Category :</h4>
          <p>Nutrition and Diet</p>
          <p>Fitness</p>
          <p>Weight control</p>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
