import React from "react";
import Share from "../components/Share";
import "./sharesection.css";
import Youtube from "../public/assets/images/youtube.png";
import Twitter from "../public/assets/images/twitter.png";
import Music from "../public/assets/images/applemusic.png";
import Spotify from "../public/assets/images/spotify.png";

const ShareSection = () => {
  return (
    <div className="shareSectionContainer">
      <div className="shareRow">
        <Share
          logo={Youtube}
          color="#F44336"
          heading="Share your favourite youtube playlist"
        />
        <Share logo={Twitter} color="#19B2E5" heading="Embed your tweets." />
      </div>

      <div className="shareRow">
        <Share
          logo={Spotify}
          color="#00D95F"
          heading="Share your favourite spotify playlist"
        />
        <Share
          logo={Music}
          color="#FA233B"
          heading="Embed your tweets."
          text=""
        />
      </div>
    </div>
  );
};

export default ShareSection;
