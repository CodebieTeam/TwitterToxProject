import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Post from "../components/Posts";
import { useState, useEffect } from "react";
export default function Home() {
  let [tweets, set_tweets] = useState(null);

  useEffect(() => {
    if (!tweets)
      fetch("https://twitter-tox-project1.vercel.app/api/getposts")
        .then((response) => response.json())
        .then(({ tweets, user }) =>
          set_tweets({ content: tweets, user: user })
        );
  });

  const Posts = [
    {
      img_link: "http://dessins-animes.com/da/horton/images/horton-04.jpg",
      user: "Carvallok77",
      date: "10/25/21",
      content: "Hello!",
    },
    {
      img_link: "http://dessins-animes.com/da/horton/images/horton-04.jpg",
      user: "Carvallok77",
      date: "10/25/21",
      content: "How you doin'?",
    },
  ];
  const Post_Components = [];
  console.log(tweets?.user);
  if (tweets)
    tweets.content.forEach((tweet) => {
      Post_Components.push(
        <Post
          user={tweets?.user.name}
          date={""}
          content={tweet.text}
          img_link={""}
        />
      );
    });
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {Post_Components}
    </div>
  );
}
