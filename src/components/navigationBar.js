import React from "react";
import "./navigationBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const nav = () => {
  return (
    <div className="n">
      <div className="n-wrapper">
        <ul className="n-items">
          <li className="n-item">HOME</li>
          <li className="n-item">TICKETS</li>
          <li className="n-item">SHOP</li>
          <li className="n-item">
            BOOK STALL <FontAwesomeIcon icon="fa fa-user" />
          </li>
          <li className="n-item">CONTACTS</li>
        </ul>

        <div className="info-wrapper">
          <div className="i-event">
            <div className="h">H</div>
            <div className="h1">DJ ######</div>
            <div className="h2">ANNUAL BASH</div>
            <div className="i-vector"></div>
          </div>
        </div>

        <div className="i-details">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button className="i-button">READ MORE</button>
          <div className="i-date">
            <p>20</p>
            <h3>23</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default nav;
