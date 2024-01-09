import React, { Component } from "react";
import axios from "axios";
import NavbarBerita from "./Navbar";
class PortalBerita extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    this.getNews();
  }

  getNews = async () => {
    const { searchTerm } = this.state;
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
      this.setState({ articles: fetchedArticles });
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value }, () => {
      this.getNews();
    });
  };

  render() {
    const { articles, searchTerm } = this.state;

    return (
      <div>
        <NavbarBerita />
        <br />
        <input
          type="text"
          placeholder="Search News"
          value={searchTerm}
          onChange={this.handleSearch}
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
  }
}

export default PortalBerita;
