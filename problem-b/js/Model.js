import TwitterData from './uw_ischool_tweets';

let serialized = TwitterData.map(x => {
  return {text: x.text,
    timestamp: Date.parse(x["created_at"])};
});

export const getRecentTweets = () => {
  let sorted = serialized.sort((a, b) => {
    return (a.timestamp < b.timestamp) ? 1 : (a.timestamp === b.timestamp ? 0 : -1);
  });
  return sorted.slice(0, 5);
};

export const searchTweets = (kw) => {
  let filtered = serialized.filter(x => {
    return !(x.text.toLowerCase().indexOf(kw.toLowerCase()) < 0);
  })
  return filtered;
}