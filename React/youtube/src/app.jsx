import React, { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';
import test from './videoList';

function App() {
  const [videos, setVideos] = useState([]);
  // console.log(videos);
  // console.log(setVideos);
  // const [name , setName] = useState('KSE');
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDYt_M1ZCPgn78zXl23y6ZLnP-5LdWyAhM", requestOptions)
    // fetch(test, requestOptions)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(result => {
        console.log(result);
        return setVideos(result.items)
      })
      .catch(error => console.log('error', error));

      // console.log(test.items);
      // setVideos(test.items)
  }, []);
  // const requestOptions = {
  //   method: 'GET',
  //   redirect: 'follow'
  // };
  // fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDYt_M1ZCPgn78zXl23y6ZLnP-5LdWyAhM", requestOptions)
  //   // fetch(test)
  //     .then(response => response.json())
  //     .then(result => setVideos(result.items))
  //     .catch(error => console.log('error', error));
  
  

  return <VideoList videos={videos}/>
}

export default App;
