import React, { useEffect, useState } from "react";

import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isProducts, setIsProducts] = useState(false);
  const [hovering, setHovering] = useState("");

  const leftPanelLinks = [
    { name: "New Arrivals", current: false },
    { name: "Best Sellers", current: false },
    { name: "Analog", current: false },
    { name: "Clothing", current: true },
    { name: "Objects", current: false },
    { name: "Gift Guide", current: false },
  ];

  useEffect(() => {
    fetch("/get/getProducts")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return null;
        }
      })
      .then((data) => {
        if (data === null) setIsProducts(false);
        else {
          setIsProducts(true);
          setProducts(data);
        }
      });
  }, []);

  return (
    <div className="homepage">
      <div className="homepage-hero-image">
        <div className="homepage-hero-image-text">Clothing</div>
      </div>
      <div className="homepage-content">
        <div className="homepage-content-left-panel">
          <ul className="homepage-content-left-panel-list">
            {leftPanelLinks.map((link) => {
              return (
                <li
                  className={
                    link.current ? "homepage-left-panel-link-current" : "homepage-left-panel-link"
                  }
                >
                  {link.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="homepage-content-right-panel">
          <div className="homepage-right-panel-filter">
            Filter:
            <span className="homepage-content-filter">
              Color <AiOutlineDown />
            </span>
            <span className="homepage-content-filter">
              Size <AiOutlineDown />
            </span>
          </div>
          <div className="homepage-content-products">
            {isProducts ? (
              products.map((product) => {
                const { productId, primaryImg, secondaryImg, price, color, variantOf } = product;
                const { name } = color;
                return (
                  <Link
                    to={`/product/${product.productId}`}
                    className="homepage-individual-product"
                    onMouseOver={() => setHovering(productId)}
                    onMouseOut={() => setHovering("")}
                    key={productId}
                  >
                    <div
                      className="homepage-product-img"
                      style={
                        hovering === productId
                          ? { backgroundImage: `url(${secondaryImg})` }
                          : { backgroundImage: `url(${primaryImg})` }
                      }
                    ></div>
                    <div className="homepage-product-info">
                      <div className="homepage-product-name">
                        <span className="homepage-product-variant">{variantOf}</span>{" "}
                        <span className="homepage-product-color"> ({name})</span>
                      </div>
                      <div className="homepage-product-price">&#8377;{price}</div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <h2>No products to show</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
