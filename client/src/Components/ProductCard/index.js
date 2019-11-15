import React from "react";
import "./style.css";

function ProductCard(props) {
  return (
    <div className="card">
      {/* <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div> */}
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>ID:</strong> {props.id}
          </li>
          <li>
            <strong>Company:</strong> {props.company}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeEmployee(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default ProductCard;
