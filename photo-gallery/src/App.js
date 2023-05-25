import React from "react";

import { Collection } from "./Collection";
import "./index.scss";

const cats = [
  { name: "All" },
  { name: "Sea" },
  { name: "Mountains" },
  { name: "Architecture" },
  { name: "Cities" },
];

function App() {
  const [collections, setCollections] = React.useState([]);
  const [searchValue, setSerchValue] = React.useState("");
  const [categoryId, setCategoryId] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setIsLoading(true);
    const category = categoryId ? `category=${categoryId}` : "";
    fetch(
      `https://646f4f3e09ff19b12086ff50.mockapi.io/photo_collections?page=${
        page + 1
      }&limit=4&${category}`
    )
      .then((res) => res.json())
      .then((json) => {
        setCollections(json);
      })
      .catch((err) => {
        console.warn(err);
        alert("data retrieval error");
      })
      .finally(() => setIsLoading(false));
  }, [categoryId, page]);
  return (
    <div className="App">
      <h1>My collection of photos</h1>
      <div className="top">
        <ul className="tags">
          {cats.map((obj, index) => (
            <li
              onClick={() => setCategoryId(index)}
              className={categoryId === index ? "active" : ""}
              key={obj.name}
            >
              {obj.name}{" "}
            </li>
          ))}
        </ul>
        <input
          value={searchValue}
          onChange={(e) => setSerchValue(e.target.value)}
          className="search-input"
          placeholder="Search by title"
        />
      </div>
      <div className="content">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          collections
            .filter((obj) =>
              obj.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
            )
            .map((obj, index) => (
              <Collection key={index} name={obj.name} images={obj.photos} />
            ))
        )}
      </div>
      <ul className="pagination">
        {[...Array(4)].map((_, i) => (
          <li onClick={() => setPage(i)} className={page === i ? "active" : ""}>
            {i + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
