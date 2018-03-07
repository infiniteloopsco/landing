import React from "react";

const IntroPricing = ({}) => (
  <div className="pricing">
    <div className="wrapper">
      <div className="content middle">
        <div className="icon" />
        <h4 className="title">Show me the money!</h4>
        <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          voluptatibus at perspiciatis dolor voluptas quo minus itaque sequi!
          Ratione cupiditate delectus ipsam unde iusto molestias neque et quasi
          fuga harum.
        </p>
      </div>
      <div className="quoter middle">
        <h5>Pricing Calculator</h5>

        <div className="inputForm">
          <label>Memori Size</label>
          <input type="range" />
          <input type="number" disabled value={1} />
        </div>

        <div className="inputForm">
          <label>Execution Time</label>
          <input type="range" />
          <input type="number" disabled value={1} />
        </div>

        <div className="inputForm">
          <label>Executions</label>
          <input type="range" />
          <input type="number" disabled value={1} />
        </div>

        <div className="right total">
          <p>Total monthly cost</p>
          <h4>$238</h4>
        </div>
      </div>
    </div>
  </div>
);

export default IntroPricing;
