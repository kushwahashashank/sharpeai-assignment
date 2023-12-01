import { useState, useEffect } from "react";
import "./Data.css";
function Products() {
  // declaring url
  const url = "https:/jsonplaceholder.typicode.com/posts";
  // data array to store data from API
  const [data, setData] = useState([]);
  // Function for fetching data from API
  const fetchData = () => {
    return fetch(url)
      .then((e) => e.json())
      .then((res) => {
        // Filtering the data we get for userId to be only 1
        setData(res.filter((e) => e.userId === 1));
      });
  };

  // using useeffect to execute fetchData function everytime the windeow is reloaded
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="data-container">
        <div className="heading">
          <p style={{ fontWeight: "bold" }}>Id</p>
          <p style={{ fontWeight: "bold" }}>Title</p>
          <p style={{ fontWeight: "bold" }}>Body</p>
        </div>
        <div className="content">
          {/* Mapping through the data */}
          {data.length > 0 ? (
            data.map((e, index) => (
              <div key={index} className="heading">
                <p>{e.id}</p>
                <p>{e.title}</p>
                <p>{e.body}</p>
              </div>
            ))
          ) : (
            <h2>"Please wait..."</h2>
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
