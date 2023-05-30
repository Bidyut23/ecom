import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../helpers/FormatPrice";


const Product = ({ id, product_name, product_imageName, product_price, product_quantity, category }) => {
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={product_imageName} alt={product_name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{product_name}</h3>
            <p className="card-data--price">{<FormatPrice price={product_price} />}</p>
            <p>Quantity: {product_quantity}</p>
          </div>
        </div>
      </div>
    </NavLink>
  )
};

export default Product;
