const Post = ({ img_link, user, date, content }) => {
  //AAAAAAAAAAAAAAAAAAAAANC%2BVQEAAAAAXVwRDkEgSEPNYc%2Fa3vXi7%2FRrSsM%3DVEd5WXZzS1AQHScFSrkB1JP2HhV0TVt4AQpNsOZy9Tk8OQgDpH
  fetch("http://localhost:3000/api/getposts")
    .then((response) => response.json())
    .then((data) => console.log(data));
  return (
    <div
      style={{
        border: "1px solid black",
        marginBottom: "25px",
        width: "270px",
        backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <img
          style={{
            height: "75px",
            width: "75px",
            float: "left",
            borderRadius: "50%",
            margin: "2px",
          }}
          src={img_link}
        />
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
export default Post;
