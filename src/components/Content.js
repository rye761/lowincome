import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Content.css";

class Content extends Component {
  render() {
    return (
      <div className="value-prop my-5">
        <h2 className="my-5 text-center">What does IncomeMate provide?</h2>
        <div className="pros-container">
          <div className="col-container">
            <h2>For Organizations</h2>
            <ul>
              <li>Simple Income Verification API</li>
              <li>Connection with low-income customers</li>
            </ul>
          </div>
          <div className="col-container">
            <h2>For Low-Income Families</h2>
            <ul>
              <li>Connection with services providing low-income pricing.</li>
              <li>Reduced paperwork and hassle, verify once and access all services.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
