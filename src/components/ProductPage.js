import React from "react";
import ProductInfo from "./productComponent/ProductInfo";
import { useParams } from "react-router-dom";

import img_1 from "./assets/essential-model.jpeg";
import img_2 from "./assets/washed-indigo-2.jpeg";
import img_3 from "./assets/essential-scarab-details-3.jpeg";
import img_4 from "./assets/essential-model-4.jpeg";

const ProductPage = () => {
  const { id } = useParams();

  const advertisement = [
    {
      img: img_1,
      title: "Classic Fit",
      desc: "Timeless style with a perfect tailored fit. No trendy cuts or embellishments, just a simple silhouette that's been refined to fit right in all the right places.",
    },
    {
      img: img_2,
      title: "Super Soft",
      desc: "Garment-dyed with added enzyme wash for comfortable lived-in feel.",
    },
    {
      img: img_3,
      title: "USA Made",
      desc: "Cut, sewn, and dyed in small batches in Los Angeles, California.",
    },
    {
      img: img_4,
      title: "Retains Shape",
      desc: "Pre-washed and dried means they will fit the same on day one as day one hundred.",
    },
  ];

  return (
    <div className="product-page">
      <ProductInfo id={id} />
      <div className="product-advertisement">
        <h1>All In The Details</h1>
        <p className="product-advertisement-para">
          All tees are not created equal. Our tees are made from super soft premium fabrics that are
          custom-dyed and sewn in Los Angeles.
        </p>
        <div className="product-advertisement-details">
          {advertisement.map((tile) => {
            return (
              <div className="product-advertisement-div">
                <div className="product-advertisement-image">
                  <img src={tile.img} alt="advertisement" />
                </div>
                <div className="product-advertisement-desc">
                  <h2>{tile.title}</h2>
                  <p>{tile.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
