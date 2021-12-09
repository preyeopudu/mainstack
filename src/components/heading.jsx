const Heading = (props) => {
  return (
    <div className="herotextcontainer">
      <div className="heroheader">
        <p>
          {props.heading}
          <span style={{ color: "#C91C5A" }}> {props.highlighted}</span>
        </p>
      </div>

      <div className="herosubheading">
        <p>{props.subheading}</p>
      </div>
    </div>
  );
};

export default Heading;
