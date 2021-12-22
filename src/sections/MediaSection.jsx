import React from "react";
import "./mediasection.css";
import Frame from "../public/assets/images/frame.png";
const MediaSection = () => {
  return (
    <div className="mediacontainer">
      <div className="mediatextcontainer">
        <p className="mediatitle">Set up all your media links</p>
        <p className="mediaheader" style={{ color: "black" }}>
          See your most important
          <span style={{ color: "#C91C5A" }}> conversations first.</span>{" "}
        </p>
        <p className="mediatext">
          See your most important conversations first. Snooze, archive, or jump
          back in. Activity Feed always keeps your conversations within reach,
          so you can quickly{" "}
        </p>
        <button
          className="conversationbutton started"
          style={{ backgroundColor: "black", color: "#fff", letterSpacing: 3 }}
        >
          Get started
        </button>
      </div>

      <div className="mediaimage">
        <img src={Frame} alt="frame" />
      </div>
    </div>
  );
};

export default MediaSection;
