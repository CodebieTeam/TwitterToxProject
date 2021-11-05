import TwitterApi from "twitter-api-v2";
const twitterClient = new TwitterApi(
  "AAAAAAAAAAAAAAAAAAAAANC%2BVQEAAAAArxK8d8iaNAVh5m3GuhoNTo1RTGU%3DFsNXj1EGUfoGxXqfmf4thHmlQaLMs9xjfArMf96MdbJ26YlbW8"
);
const client = twitterClient.readOnly;
export default async function handler(req, res) {
  const tweets = await client.v2.userTimeline("12", { exclude: "replies" });
  res.status(200).json({ data: tweets._realData.data });
}
