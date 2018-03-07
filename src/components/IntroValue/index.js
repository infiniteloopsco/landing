import React from "react";
import ValueBox from "../ValueBox";

const values = [
  {
    title: "Serverless webapps",
    extraClass: "purple",
    description:
      "Lorem ipsum odio Nam eu arcu dui Praesent sed tincidunt In lectus In taciti Quisque elit. Class turpis eget sollicitudin lectus Curabitur eu."
  },
  {
    title: "Mobile Backend",
    extraClass: "green",
    description:
      "Lorem ipsum odio Nam eu arcu dui Praesent sed tincidunt In lectus In taciti Quisque elit. Class turpis eget sollicitudin lectus Curabitur eu."
  },
  {
    title: "Time Bassed",
    extraClass: "pink",
    description:
      "Lorem ipsum odio Nam eu arcu dui Praesent sed tincidunt In lectus In taciti Quisque elit. Class turpis eget sollicitudin lectus Curabitur eu."
  }
];

const IntroValue = () => (
  <div className="introValue">
    <div className="wrapper">
      {values.map(element => <ValueBox {...element} />)}
    </div>
  </div>
);

export default IntroValue;
