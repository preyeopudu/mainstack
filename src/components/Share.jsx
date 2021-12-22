import React from "react";
import Iphone from "../public/assets/images/iphone.png";
import "./share.css";
const Share = (props) => {
  return (
    <div className="shareContainer">
      <div className="shareLogo">
        <div>
          <img src={props.logo} alt="marv" />
        </div>
      </div>

      <p className="shareHeader" style={{ color: props.color }}>
        {props.heading}
      </p>
      <p className="shareText">
        <b>
          See your most important conversations first. Snooze, archive, or jump
          back in.
        </b>
        Activity Feed always keeps your conversations within reach, so you can
        quickly catch up on what’s new.
      </p>
      <div className="phoneContainer">
        <img src={Iphone} alt="phone" />
      </div>
    </div>
  );
};

export default Share;
