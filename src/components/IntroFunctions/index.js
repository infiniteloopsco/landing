import React from "react";
import Link from "gatsby-link";
import "./index.css";
import FunctionExample from "../FunctionExample";

const functions = [
  {
    title: "Serverless Webapps",
    description:
      "Lorem ipsum odio Nam eu arcu dui Praesent sed tincidunt In lectus In taciti Quisque elit. Class turpis eget sollicitudin lectus Curabitur eu."
  },
  {
    title: "Mobile Backend",
    description:
      "Lorem ipsum odio Nam eu arcu dui Praesent sed tincidunt In lectus In taciti Quisque elit. Class turpis eget sollicitudin lectus Curabitur eu."
  },
  {
    title: "Time Bassed",
    description:
      "Lorem ipsum odio Nam eu arcu dui Praesent sed tincidunt In lectus In taciti Quisque elit. Class turpis eget sollicitudin lectus Curabitur eu."
  },
  {
    title: "Webforms",
    description:
      "Lorem ipsum odio Nam eu arcu dui Praesent sed tincidunt In lectus In taciti Quisque elit. Class turpis eget sollicitudin lectus Curabitur eu."
  }
];
const IntroFunctions = () => (
  <div className="introFunctions">
    <div className="wrapper">
      <h6>The sky is the limit</h6>
      <h1>Countless solutions and integrations.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
        quibusdam aperiam commodi, reprehenderit provident obcaecati{" "}
      </p>

      <div className="functionsExample">
        {functions.map(element => <FunctionExample {...element} />)}
      </div>
    </div>
  </div>
);

export default IntroFunctions;
