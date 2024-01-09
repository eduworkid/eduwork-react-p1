import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarBerita from "./Navbar";

const PortalBerita = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getNews();
  }, [searchTerm]);

  const getNews = async () => {
    const apiKey = "df7de5be60e244ec9a89518cf801c7ba";
    const apiUrl = "https://newsapi.org/v2/top-headlines?sources=bbc-news";

    try {
      const response = await axios.get(apiUrl, {
        params: {
          apiKey,
          q: searchTerm,
        },
      });

      const fetchedArticles = response.data.articles;
      setArticles(fetchedArticles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <NavbarBerita />
      <br />
      <input
        type="text"
        placeholder="Search News"
        value={searchTerm}
        onChange={handleSearch}
      />
      <h4>&nbsp;</h4>
      <div className="row">
        {articles.map((article) => (
          <div key={article.url} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={article.urlToImage}
                className="card-img-top"
                alt={article.title}
              />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortalBerita;
