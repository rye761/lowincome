import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Table.css";

class Table extends Component {
  render() {
    return (
      <div className="value-prop my-5">
        <h2 className="my-5 text-center">Who does WeProsper serve?</h2>

        <p>Low income status is based on the 2006 Statistics Canada Low-Income Cut Off.</p>  

        <table>
          <tr>
             <th>Family Size</th>
             <th>Income (after taxes)</th>
          </tr>
          <tr>
             <td>1</td>
             <td>$17 570</td>
          </tr>
          <tr>
             <td>2</td>
             <td>$21 384</td>
          </tr>
          <tr>
             <td>3</td>
             <td>$26 628</td>
          </tr>
          <tr>
             <td>4</td>
             <td>$33 221</td>
          </tr>
          <tr>
             <td>5</td>
             <td>$37 828</td>
          </tr>
          <tr>
             <td>6</td>
             <td>$41 953</td>
          </tr>
          <tr>
             <td>7+</td>
             <td>$46 077</td>
          </tr>
      </table>
        
      </div>
    );
  }
}

export default Table;