import React, { useState } from "react";
import "./glow_productpage.css";
import axios from "axios";
import Dropdown from "./Dropdowm";
// import Button from "./Button";
// import Dropdown from "./Dropdown";

const APIURL = "https://clone-glow.herokuapp.com/";
function Products() {
  const [user, setUser] = useState([]);

  axios.get(APIURL).then((res) => setUser(res.data));
  // console.log(user);

  //   const sortList = () => {
  //     user.sort();
  //     console.log(user);
  //   };
  return (
    <main>
      <h2 className="glow_R">All Products</h2>
      <div className="flex_GR">
        <Dropdown
          name="SKIN CONCERN"
          nm1="BREAKOUT & ACNE"
          nm2="PORES & OIL CONTROL"
          nm3="REDNESS & SENSITIVITY"
          nm4="DARKSPOTS & HYPERPIGMENTATION"
          nm5="DRYNESS"
          nm6="FINE LINES & WRINKLES"
          nm7="DULLNESS & UNEVEN TONE"
        />
        <Dropdown
          name="FRUIT"
          nm1="WATERMELON"
          nm2="AVACADO"
          nm3="STRAWBERRY"
          nm4="PLUM"
          nm5="BANANA"
          nm6="BLUEBERRY"
          nm7="PAPAYA"
          nm8="GUAVA"
        ></Dropdown>
        <Dropdown
          name="FEATURED"
          nm1="High to Low"
          nm2="Low to High"
          nm3="A-Z"
          nm4="Z-A"
        />
      </div>
      <div className="productPage_glowR">
        {user.map((user) => (
          <div className="container_glowR">
            <div className="content_glowR">
              <div className="img_glowR">
                <img
                  src={user.image}
                  onMouseEnter={() => {
                    this.setState({
                      img: user.image_hover,
                    });
                  }}
                  onMouseOut={() => {
                    this.setState({
                      img: user.image,
                    });
                  }}
                  width="260px"
                  height="320px"
                />
              </div>
              <div className="detailprod_glowR">
                <p className="nm_glowR">{user.name}</p>
                <div className="flextag_gr">
                  <div className="rating_gr">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                  <p className="detTag_glowR">{user.reviews}</p>
                </div>
                <p className="nm_glowR">$ {user.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Products;
