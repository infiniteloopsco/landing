import React from "react";
import Link from "gatsby-link";
import IntroCta from "../components/IntroCta";
import IntroFunctions from "../components/IntroFunctions";
import IntroValue from "../components/IntroValue";
import IntroPricing from "../components/IntroPricing";

const IndexPage = () => (
  <div>
    <IntroCta key="cta" />
    <IntroFunctions key="functions" />
    <IntroValue key="value" />
    <IntroPricing key="princing" />
  </div>
);

export default IndexPage;
