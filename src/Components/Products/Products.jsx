import { useState, useEffect } from "react";
import Post from "../Post/Post";
import "./Products.css";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
function Products() {
  const [searchVal, setSearchVal] = useState("");
  const [category, setCategory] = useState(false);
  const [rating, setRating] = useState(false);
  const [filters, setFilters] = useState({
    electronics: false,
    jewellery: false,
    five: false,
    one: false,
    two: false,
    three: false,
    four: false,
  });
  const handleInput = (e) => {
    setSearchVal(e.target.value);
  };

  const url = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const fetchData = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((e) => {
        setData(e);
        setProducts(e);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setProducts(data.filter((el) => FilterItems(el)));
  }, [filters]);
  function FilterItems(val) {
    if (filters.electronics || filters.jewellery) {
      if (filters.electronics && filters.jewellery) {
        return val.category === "electronics" || val.category === "jewelery";
      } else if (filters.electronics) {
        return val.category === "electronics";
      }
      return val.category === "jewelery";
    }
    return true;
  }

  return (
    <>
      <div className="product-container">
        <Link className="button" to="/">
          Go Back
        </Link>
        <div className="product-left">
          <div className="product-search-results">
            <h2>Search Results</h2>
            <div className="filter-category">
              <div className="filter-head">
                <p>CATEGORY</p>
                {category ? (
                  <p
                    onClick={() => setCategory(!category)}
                    className="toggle-icon"
                  >
                    <BiSolidDownArrow />
                  </p>
                ) : (
                  <p
                    onClick={() => setCategory(!category)}
                    className="toggle-icon"
                  >
                    <BiSolidUpArrow />
                  </p>
                )}
              </div>
              {!category ? (
                <ul>
                  <div className="filter-options">
                    <input
                      type="checkbox"
                      onChange={() => {
                        setFilters({
                          ...filters,
                          electronics: !filters.electronics,
                        });
                        console.log(filters.electronics);
                      }}
                    />
                    <p>Electronics</p>
                  </div>
                  <div className="filter-options">
                    <input
                      type="checkbox"
                      onChange={() => {
                        setFilters({
                          ...filters,
                          jewellery: !filters.jewellery,
                        });
                      }}
                    />
                    <p>Jewelery</p>
                  </div>
                </ul>
              ) : (
                <></>
              )}
            </div>
            <div className="filter-category">
              <div className="filter-head">
                <p>RATINGS</p>
                {rating ? (
                  <p onClick={() => setRating(!rating)} className="toggle-icon">
                    <BiSolidDownArrow />
                  </p>
                ) : (
                  <p onClick={() => setRating(!rating)} className="toggle-icon">
                    <BiSolidUpArrow />
                  </p>
                )}
              </div>
              {!rating ? (
                <ul>
                  <div className="filter-options">
                    <input
                      type="checkbox"
                      onChange={() => {
                        setFilters({
                          ...filters,
                          five: !filters.five,
                        });
                      }}
                    />
                    <Rating
                      style={{
                        paddingLeft: "0.5rem",
                      }}
                      emptySymbol={
                        <AiOutlineStar
                          style={{ color: "rgb(234, 212, 106)" }}
                        />
                      }
                      fullSymbol={
                        <AiFillStar style={{ color: "rgb(234, 212, 106)" }} />
                      }
                      initialRating={5}
                      readonly={true}
                    />
                  </div>
                  <div className="filter-options">
                    <input
                      type="checkbox"
                      onChange={() => {
                        setFilters({
                          ...filters,
                          four: !filters.four,
                        });
                      }}
                    />
                    <Rating
                      style={{
                        paddingLeft: "0.5rem",
                      }}
                      emptySymbol={
                        <AiOutlineStar
                          style={{ color: "rgb(234, 212, 106)" }}
                        />
                      }
                      fullSymbol={
                        <AiFillStar style={{ color: "rgb(234, 212, 106)" }} />
                      }
                      initialRating={4}
                      readonly={true}
                    />
                  </div>
                  <div className="filter-options">
                    <input
                      type="checkbox"
                      onChange={() => {
                        setFilters({
                          ...filters,
                          three: !filters.three,
                        });
                      }}
                    />
                    <Rating
                      style={{
                        paddingLeft: "0.5rem",
                      }}
                      emptySymbol={
                        <AiOutlineStar
                          style={{ color: "rgb(234, 212, 106)" }}
                        />
                      }
                      fullSymbol={
                        <AiFillStar style={{ color: "rgb(234, 212, 106)" }} />
                      }
                      initialRating={3}
                      readonly={true}
                    />
                  </div>
                  <div className="filter-options">
                    <input
                      type="checkbox"
                      onChange={() => {
                        setFilters({
                          ...filters,
                          three: !filters.three,
                        });
                      }}
                    />
                    <Rating
                      style={{
                        paddingLeft: "0.5rem",
                      }}
                      emptySymbol={
                        <AiOutlineStar
                          style={{ color: "rgb(234, 212, 106)" }}
                        />
                      }
                      fullSymbol={
                        <AiFillStar style={{ color: "rgb(234, 212, 106)" }} />
                      }
                      initialRating={2}
                      readonly={true}
                    />
                  </div>
                  <div className="filter-options">
                    <input
                      type="checkbox"
                      onChange={() => {
                        setFilters({
                          ...filters,
                          one: !filters.one,
                        });
                      }}
                    />
                    <Rating
                      style={{
                        paddingLeft: "0.5rem",
                      }}
                      emptySymbol={
                        <AiOutlineStar
                          style={{ color: "rgb(234, 212, 106)" }}
                        />
                      }
                      fullSymbol={
                        <AiFillStar style={{ color: "rgb(234, 212, 106)" }} />
                      }
                      initialRating={1}
                      readonly={true}
                    />
                  </div>
                </ul>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className="product-right">
          <div className="product-input-wrap">
            <input
              onChange={handleInput}
              value={searchVal}
              type="text"
              name="product-search"
              id="product-search1"
              placeholder="Search"
            />
          </div>
          <div className="product-trends-wrap">
            <div className="product-trends-posts">
              {products.length > 0 ? (
                products.map((e) => <Post key={e.id} data={e} place="home" />)
              ) : (
                <h1>"Please reload the page fposts to load"</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
