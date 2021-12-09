import Mac from "../public/assets/images/mainstackmac.png";
import Phone from "../public/assets/images/mainstackmobile.png";
import "./mainstack.css";

const Mainstack = () => {
  return (
    <div className="mainstackcontainer">
      <div className="mainstackmac">
        <img src={Mac} alt="Mac" />
      </div>

      <div className="mainstackphone">
        <img src={Phone} alt="Phone" />
      </div>
    </div>
  );
};

export default Mainstack;
