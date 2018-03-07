import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const ValueBox = ({ title, description, extraClass }) => (
  <div className={`ValueBox ${extraClass}`}>
    <h2 className="title">{title}</h2>
    <p className="description">{description}</p>
  </div>
);

ValueBox.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  extraClass: PropTypes.stirng
};
export default ValueBox;
