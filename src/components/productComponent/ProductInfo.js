import React, { useEffect, useState } from "react";
// import { MdDragHandle } from "react-icons/md";
// import { Link } from "react-router-dom";

const ProductInfo = ({ id }) => {
  const [info, setInfo] = useState({});
  const [variant, setVariant] = useState({});

  useEffect(() => {
    fetch(`/get/getProduct?id=${id}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        setInfo(data[0]);
        fetch(`/get/getVariantClass?name=${data[0].variantOf}`)
          .then((response) => {
            if (response.status === 200) {
              return response.json();
            }
          })
          .then((classInfo) => {
            setVariant(classInfo[0]);
            console.log(classInfo[0]);
          });
      });
  }, [id]);

  const handleColor = (productId) => {
    window.location.href = `/product/${productId}`;
  };
  return (
    <div className="product-info">
      <div className="product-info-left-panel">
        <img src={info.primaryImg} alt="" />
      </div>
      <div className="product-info-right-panel">
        <div className="product-info-head">
          <div className="product-info-name">{variant.className}</div>
          <div className="product-info-color">{info.color?.name && info.color.name}</div>
          <div className="product-info-price">&#8377;{info.price}</div>
        </div>
        <hr />
        <div className="product-info-color-palette">
          <div className="product-info-color-palette-name">
            {info.color?.name && info.color.name}
          </div>
          <div className="product-color-palette">
            {variant.color &&
              variant.color.map((color) => {
                return (
                  <div
                    className="product-color"
                    style={{ backgroundColor: `${color.hex}` }}
                    onClick={() => handleColor(color.productId)}
                  ></div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
