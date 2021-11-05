const Post = ({ img_link, user, date, content }) => {
  //here//

  return (
    <div
      style={{
        borderRadius: "25px",
        marginBottom: "25px",
        width: "270px",
        backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        {/*      <img
          style={{
            height: "75px",
            width: "75px",
            float: "left",
            borderRadius: "50%",
            margin: "2px",
          }}
          src={img_link}
        />*/}
        <h1
          style={{
            fontFamily: "initial",
            fontSize: "20px",
            float: "left",
            color: "white",
          }}
        >
          {user}
        </h1>
        <h1
          style={{
            fontSize: "20px",
            float: "right",
            color: "lightgrey",
            fontFamily: "initial",
          }}
        >
          {date}
        </h1>
      </div>
      <p style={{ fontSize: "20px", textAlign: "center", color: "white" }}>
        {content}
      </p>
    </div>
  );
};

const toxicity_to_red_gradient = () => {};
export default Post;
