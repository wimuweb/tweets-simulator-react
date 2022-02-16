import { Container, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ListTweets from "./components/ListTweets/ListTweets";
import SendTweet from "./components/SendTweet/SendTweet";

import {TWEETS_STORAGE} from './utils/contants';


function App() {
  const [toastProps, setToastProps] = useState({
    open: false,
    text:null
  })
  const [allTweets, setAllTweets] = useState([]);
  const [reloadTweets, setReloadTweets] = useState(false);

  const deleteTweet = (index) => {
    allTweets.splice(index,1);
    setAllTweets(allTweets);
    localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets));
    setReloadTweets(true);
  }

  useEffect(()=>{
    const AllTweetsStorage = localStorage.getItem(TWEETS_STORAGE);
    const allTweetArray = JSON.parse(AllTweetsStorage);
    setAllTweets(allTweetArray);
    setReloadTweets(false);
  },[reloadTweets]);

  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header/>
      <SendTweet setToastProps={setToastProps} allTweets={allTweets}/>
      <Snackbar
        anchorOrigin={{
          vertical:'top',
          horizontal:'right'
          
        }}
        open={toastProps.open}
        autoHideDuration={2000}
        message={<span id={"message-id"}>{toastProps.text}</span>}
        />
        <ListTweets allTweets={allTweets} deleteTweet={deleteTweet}/>
    </Container>
  );
}

export default App;
