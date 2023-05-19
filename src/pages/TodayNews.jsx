import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
function TodayNews() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [filterData, setFilterData] = useState();
  const [displayOption, setDisplayOptions] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [originalData, setOriginalData] = useState();
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=101f8ed65d054da898d5a531bb835797",
      { timeout: 8000 }
    )
      .then((response) => response.json())
      .then((json) => {
        setOriginalData(json.articles);
        setData(json.articles);
        setFilterData(json.articles);
        setLoading(false);
      });
  }, []);
  // on input data change
  function onSearchChange(event) {
    setSearchItem(event.target.value);
    const result = data.filter((item, index) => {
      return item.title.toLowerCase().includes(searchItem.toLocaleLowerCase());
    });
    if (result.length == -0) {
      setFilterData(originalData);
    } else {
      setFilterData(result);
    }
  }
  // After Submit
  function onSearchSubmit() {
    if (searchItem.length !== 0) {
      const result = originalData.filter((item, index) => {
        return item.title
          .toLowerCase()
          .includes(searchItem.toLocaleLowerCase());
      });

      setData(result);
      setSearchItem("");
      setDisplayOptions(false);
    } else {
      setData(originalData);
      setDisplayOptions(false);
    }
  }
  return (
    <div className="today-health-news page">
      {loading === false ? (
        <div>
          <div className="search-field-container">
            <input
              type="text"
              placeholder="Search by title"
              name="search-field"
              className="search-field"
              value={searchItem}
              autoComplete="off"
              onChange={onSearchChange}
              onFocus={() => {
                setDisplayOptions(true);
              }}
              onKeyDown={() => {
                setDisplayOptions(true);
              }}
            />
            <GoSearch
              size={40}
              className="search-submit-news-btn"
              onClick={() => {
                onSearchSubmit();
              }}
            />
            <div
              className="search-news-options"
              style={{ display: displayOption === true ? "block" : "none" }}
              onMouseLeave={() => {
                setDisplayOptions(false);
              }}
            >
              {filterData ? (
                filterData.map((element, index) => {
                  return (
                    <p
                      key={"news_search" + index}
                      onClick={() => {
                        setSearchItem(element.title);
                      }}
                    >
                      {element.title}
                    </p>
                  );
                })
              ) : (
                <p>Not Found !</p>
              )}
            </div>
          </div>

          {data.length !== 0 ? (
            data.map((element, index) => {
              return (
                element.urlToImage != null && (
                  <div
                    className="individual-news"
                    key={"today_new_individual_news" + index}
                  >
                    <div className="today_news_image">
                      <img src={element.urlToImage} alt="not found" />
                    </div>
                    <div className="todays-news-content">
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
  );
}

export default TodayNews;
