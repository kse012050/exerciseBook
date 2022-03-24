import React from 'react';
import './app.css';



function app() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };  

  fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDYt_M1ZCPgn78zXl23y6ZLnP-5LdWyAhM", requestOptions)
    .then(response => console.log(response))
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  return <h1>Hello :)</h1>
}

export default app;
