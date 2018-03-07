import React from "react";
import PropTypes from "prop-types";

import "./index.css";

const FunctionExample = ({ img, title, description }) => (
  <div className="exampleFunction" key={title}>
    <div className="box">
      <img src={img} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

FunctionExample.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};

export default FunctionExample;
