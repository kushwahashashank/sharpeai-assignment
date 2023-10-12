import React from "react";
import "./Post.css";
import { useState } from "react";
import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsHeart, BsHeartFill } from "react-icons/bs";
export default function Post({ data, place }) {
  const [wishlist, setWishlist] = useState(false);
  return (
    <>
      <div className="post-wrap">
        {place === "home" ? (
          wishlist ? (
            <BsHeartFill
              style={{ color: "red" }}
              onClick={() => setWishlist(!wishlist)}
              className="heartfill"
            />
          ) : (
            <BsHeart
              onClick={() => setWishlist(!wishlist)}
              className="heartfill"
            />
          )
        ) : (
          <></>
        )}

        <div className="image">
          <img src={data.image} alt="" />
          {place === "home" ? (
            <div className="show-product">View Product</div>
          ) : (
            <></>
          )}
        </div>
        {place === "main" ? (
          <p className="style-name">{data.category}</p>
        ) : (
          <></>
        )}

        {place === "home" ? (
          <>
            <p className="title">{data.title}</p>
            <div className="price">
              <p className="prev-price">Rs. 700</p>
              <p>Rs. {data.price}</p>
            </div>
            <div className="rating">
              <Rating
                emptySymbol={
                  <AiOutlineStar style={{ color: "rgb(234, 212, 106)" }} />
                }
                fullSymbol={
                  <AiFillStar style={{ color: "rgb(234, 212, 106)" }} />
                }
                initialRating={data.rating.rate}
              />
              <p style={{ fontSize: "1rem", paddingLeft: "0.2rem" }}>
                {" "}
                ({data.rating.count})
              </p>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
