import React, { useState , useEffect } from 'react';
import { NavLink} from 'react-router-dom'
// import axios from 'axios';
import { fetchNewsList } from '../../api/index.js';

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
        fetchNewsList()
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
            {news.map((news)=> (
                <p key={news.id}>
                    <a href={news.url}>
                        {news.title}
                    </a>
                    <small>
                        {news.domain} , {news.time_ago}
                    </small>
                    <NavLink to={"/user/" + news.user}>
                        {news.user}
                    </NavLink>
                </p>
            ))}
        </div>
    )    
};

export default NewsView;