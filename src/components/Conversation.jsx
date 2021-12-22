import "./conversation.css";

const Conversation = (props) => {
  return (
    <div className="converationcontainer" style={{ background: props.color }}>
      <div className="conversationtextcontainer">
        <p className="conversationheader">
          Conversations designed for people, not bots.
        </p>
        <p className="conversationtext">{props.text}</p>

        <button className="conversationbutton">Get started</button>
      </div>

      <div className="conversationimages">
        <div>
          <img src={props.first} alt="marv" />
        </div>

        {props.second ? (
          <div className="gridContainer">
            <img src={props.second} alt="marv" />

            {props.third ? <img src={props.third} alt="marv" /> : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Conversation;
