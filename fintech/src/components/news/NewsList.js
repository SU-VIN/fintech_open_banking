import React from "react";

const NewsList = ({ newsList }) => {
  return (
    <div>
      {newsList.map((news) => {
        return (
          <p>
            <img src={news.urlToImage} style={{ width: "300px" }} />
            <br />
            {news.publishedAt.slice(0, 10)}: {news.title}
          </p>
        );
      })}
    </div>
  );
};

export default NewsList;
