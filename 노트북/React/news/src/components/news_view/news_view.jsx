import React, { useState , useEffect } from 'react';
import axios from 'axios';

const NewsView = (props) => {
    let [news , setNews] = useState([]);
    
    useEffect(()=>{
        // setNews('11');
        // axios.get('https://api.hnpwa.com/v0/news/1.json')
        //     .then((respone)=>{
        //         console.log(respone.json());
        //         setNews([1,2])
        //     })
        //     .catch(function(error){
        //         console.log(error);
        //     });
    //     var config = {
    //         method: 'get',
    //         url: 'https://api.hnpwa.com/v0/news/1.json',
    //         headers: { }
    //       };
          
    //       axios(config)
    //       .then(function (response) {
    //         console.log(JSON.stringify(response.data));
    //         setNews(JSON.stringify(response.data))
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    },[])
        
    return (
        <div>
            news {news}
        </div>
    )    
};

export default NewsView;