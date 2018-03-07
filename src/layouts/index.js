import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div className="infiniteloops">
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: "description", content: "Infiniteloops" },
        { name: "keywords", content: "infinitellops, serverless, faas" }
      ]}
    />
    <Header key="header" />
    <div className="root" key="root">
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
