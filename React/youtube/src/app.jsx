import './app.css';

import React from 'react';


function app() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };  

  fetch("./videoList.json",requestOptions)
  .then(response => console.log(response))
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  return <h1>Hello :)</h1>
}

export default app;
