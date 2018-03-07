import React from "react";
import Link from "gatsby-link";
import "./intro.css";
const IntroCta = () => (
  <div className="intro">
    <div className="wrapper">
      <div className="copy">
        <h1>Build apps fast with a serverless arquitecture</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa tempora
          culpa qui facere sunt accusantium.{" "}
        </p>

        <Link to="/" className="call-to-action">
          Try it out now!
        </Link>
        <span>How its works </span>
      </div>
      <div className="cta" />
    </div>
  </div>
);

export default IntroCta;
