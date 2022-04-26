import React, { useEffect } from 'react';
import axios from 'axios';

const NewsView = (props) => {
    // let [news , setNews] = useState('test');
    let test = []
    
    useEffect(()=>{
        axios.get('https://api.hnpwa.com/v0/news/1.json')
            .then((respone)=>{
                // console.log(respone);
                // setNews(respone.data);
                test = respone.data
            })
            .catch(function(error){
                console.log(error);
            });
        },[])
        console.log(test);
    // setNews = '11';
    // setNews('setNews')
    return (
        <div>
            news {test}
        </div>
    )    
};

export default NewsView;