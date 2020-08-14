export const printTweets = (tweets) => {
  if (tweets.length === 0) return console.log("No tweets found");
  tweets.forEach(x => {
    console.log(`- "${x.text}" (${new Date(x.timestamp).toLocaleString("en-US")})`);
  })
}