import React, { useState , useEffect } from 'react';
import axios from 'axios';

const NewsView = (props) => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        
    // case.01 fecth
    // const requestOptions = {
    //     method: 'GET',
    //     redirect: 'follow'
    // };
    // fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions)
    //     .then(response => response.json())
    //     .then(result => {
    //         // console.log(result);
    //         setNews(result)
    //         console.log(news);
    //     })
    //     .catch(error => console.log('error', error));

    // case.01 axios
    axios.get('https://api.hnpwa.com/v0/news/1.json')
        .then((respone)=>{
            // console.log(respone);
            setNews(respone.data)
            // console.log(news);
        })
        .catch(function(error){
            console.log(error);
        });
    }, [])
        
    return (
        <div>
            news {news.map((news)=> (<div key={news.id}>{news.title}</div>))}
        </div>
    )    
};

export default NewsView;