import React from "react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./herosection.css";
const HeroSection = () => {
  return (
    <div className="herosectioncontainer">
      <div className="herotextcontainer">
        <div className="heroheader">
          <p>
            Create a one-page site to showcase your incredible works and
            <span style={{ color: "#C91C5A" }}> get more clients</span>
          </p>
        </div>

        <div className="herosubheading">
          <p>
            Mainstack connects your audience to all of your content,
            productivity with just one click to boost conversion rate
          </p>
        </div>
      </div>

      <div className="heroformcontainer">
        <div className="heroinputcontainer">
          <p>Mainstack.app/</p>
          <input type="text" placeholder="yourname" />
          <FontAwesomeIcon
            icon={faCheckCircle}
            style={{ fontSize: "20px" }}
            color="grey"
            className="heroicon"
          />
        </div>

        <button className="herobutton">Create your stack</button>
      </div>
    </div>
  );
};
export default HeroSection;
