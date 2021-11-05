require("@tensorflow/tfjs");
const toxicity = require("@tensorflow-models/toxicity");

const Post = ({ img_link, user, date, content }) => {
  const init = async () => {
    const threshold = 0.67;
    const model = await toxicity.load(threshold);
      const predictions = await model.classify(content);
      predictions.forEach((element)=>{
      console.forEach(element.result[0].match);
      console.log(element.results.match);
      });
    
    
  };
  init ();

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

