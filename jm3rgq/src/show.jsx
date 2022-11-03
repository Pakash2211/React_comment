import React from "react";
export const Show = (props) => {
  const [line, setLine] = React.useState(false);
  const [replay, setReply] = React.useState(false);
  const { author, body, timestamp, points, replies } = props;
  const styles = {
    popstyle: {
      marginLeft: "80px",
      marginBottom: "70px",
      marginTop: "-5px",
      borderLeft: line ? "2px solid black" : "none",
      paddingLeft: "10px"
    }
  };
  return (
    <div className="mdiv" style={styles.popstyle}>
      <div style={{ display: "flex" }} className="author">
        <p>{author}</p>
        <p>{points} points</p>
        <p>{timestamp}</p>
      </div>
      {!line ? (
        <button onClick={() => setLine(true)}>+</button>
      ) : (
        <button onClick={() => setLine(false)}>-</button>
      )}

      <h3 style={{ marginTop: "2px" }}>{body}</h3>
      <div className="reply">
        <div>
          <p style={{ cursor: "pointer" }} onClick={() => setReply(true)}>
            Reply
          </p>
          {replay ? (
            <div>
              <input type="text" placeholder="reply..." />
              <button onClick={() => setReply(false)}>add</button>
            </div>
          ) : (
            " "
          )}
        </div>
        <p>Give</p>
        <p>Award</p>
        <p>Share</p>
        <p>Report</p>
        <p>Save</p>
      </div>

      {replies && line ? replies.map((ele) => <Show {...ele} />) : " "}
    </div>
  );
};
