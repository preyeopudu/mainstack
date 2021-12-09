import "./conversation.css";

const Conversation = (props) => {
  return (
    <div className="converationcontainer">
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

        <div>
          <img src={props.second} alt="marv" />

          {props.third ? <img src={props.third} alt="marv" /> : null}
        </div>
      </div>
    </div>
  );
};

export default Conversation;
