import { useState } from "react";
import ReactLoading from "react-loading";
const toxicity = require("@tensorflow-models/toxicity");
const threshold = 0.67;
const Menu = ({ set_tweets }) => {
  const [loading, is_loading] = useState(false);
  const text_to_red = async (string) => {
    let color = "";
    const predictions = await toxicity
      .load(threshold)
      .then((model) => model.classify(string));
    const probability = predictions[6].results[0].probabilities[1];
    color = `rgb(${
      probability >= 0.5 ? 225 : 225 - 225 * (1 - 2 * probability)
    },${probability >= 0.5 ? 225 - 225 * (1 - 2 * probability) : 225},0)`;
    return { color, raw: probability };
  };
  return (
    <div>
      <h1>Twitter Toxicity Report</h1>
      <h2>Enter a twitter handle</h2>
      <input id="input"></input>
      <button
        onClick={() => {
          fetch("http://localhost:3000/api/getposts", {
            body: document.getElementById("input").value,
            method: "POST",
          })
            .then((response) => response.json())
            .then(async ({ tweets, user }) => {
              const mapped_tweets = [];
              const average_toxicity = 0;
              is_loading(true);
              for (const tweet of tweets) {
                const predictions = await text_to_red(tweet.text);
                console.log(predictions.raw);
                average_toxicity += predictions.raw;
                mapped_tweets.push({
                  tweet: tweet,
                  toxicity: predictions.color,
                });
              }
              console.log(average_toxicity);
              average_toxicity = average_toxicity / tweets.length;
              set_tweets({
                content: mapped_tweets,
                user: user,
                average_toxicity: average_toxicity,
              });
            });
        }}
      >
        Press Me!
      </button>
      {loading ? (
        <ReactLoading
          type={"bubbles"}
          color={"green"}
          height={667}
          width={375}
        />
      ) : null}
    </div>
  );
};

export default Menu;
