import readline from 'readline-sync'
import * as Model from './Model.js'
import * as View from './View'

export const runSearch = () => {
  console.log("Here are some tweets by @UW_iSchool");
  View.printTweets(Model.getRecentTweets());
  let kw = readline.question("Search tweets, or EXIT to quit: ");
  View.printTweets(Model.searchTweets(kw));
  // while ("EXIT" !== kw) {
  // View.printTweets(Model.searchTweets(kw));
  //   console.log(Model.searchTweets(kw));
  //   kw = readline.question("Search tweets, or EXIT to quit: ");
  // }
}