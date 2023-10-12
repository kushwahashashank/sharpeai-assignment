import { useState, useRef, useEffect } from "react";
import "./Home.css";
import Post from "../Post/Post";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function Home() {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    console.log("isFocused: ", isFocused);
  }, [isFocused]);
  const [searchVal, setSearchVal] = useState("");
  const url = "https://fakestoreapi.com/products?limit=5";
  const url1 = "https://fakestoreapi.com/products/categories";

  const [data, setData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const fetchData = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((e) => {
        setData(e);
      });
  };
  const fetchData1 = () => {
    return fetch(url1)
      .then((res) => res.json())
      .then((e) => {
        setSuggestions(e);
      });
  };

  useEffect(() => {
    fetchData();
    fetchData1();
  }, []);

  const handleInput = (e) => {
    setSearchVal(e.target.value);
  };

  return (
    <div className="container">
      <Link className="button" to="/products">
        Next Page
      </Link>

      <div className="input-wrap">
        <input
          ref={ref}
          onChange={handleInput}
          value={searchVal}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          type="text"
          name="product-search"
          id="product-search"
          placeholder="Search Products"
        />
        <CiSearch className="search-icon" />
      </div>
      {isFocused ? (
        <div className="trends-wrap">
          <div className="latest-trends">
            <h2 className="heading">Latest Trends</h2>
            <div className="trends-posts">
              {data.map((e) => (
                <Post key={e.id} data={e} place="main" />
              ))}
            </div>
          </div>
          <div className="suggestions">
            <h2 className="heading">Popular suggestions</h2>
            <div className="suggestion-list">
              {suggestions.map((item) => (
                <p className="suggestion-content">{item}</p>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
