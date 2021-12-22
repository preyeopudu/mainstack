import "./paymentsection.css";
import React from "react";
import Payment from "../public/assets/images/cofee.png";
import Seminar from "../public/assets/images/seminar.png";

const PaymentSection = () => {
  return (
    <div className="paymentContainer">
      <div className="coffeecontainer">
        <p className="paymentheader" style={{ color: " #4360FD" }}>
          Collect payment from your fans
        </p>
        <p className="paymenttext">
          See your most important conversations first.
          <span style={{ color: "grey" }}>
            Snooze, archive, or jump back in.
          </span>
        </p>
        <div>
          <img src={Payment} alt="payment" />
        </div>
      </div>

      <div className="seminarcontainer">
        <p className="paymentheader" style={{ color: "#FE4110" }}>
          Collect payment from your fans
        </p>
        <p className="paymenttext">
          See your most important conversations first.{" "}
          <span style={{ color: "grey" }}>
            Snooze, archive, or jump back in.
          </span>
        </p>
        <div>
          <img src={Seminar} alt="seminar" />
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
