import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AskView = (props) => {
    let [ask , setAsk] = useState([]);

    useEffect(()=>{
        axios.get('https://api.hnpwa.com/v0/ask/1.json')
            .then((respone)=>setAsk(respone.data))
            .catch((error)=>console.log(error))
    },[])

    return (
        <div>
            {ask.map((ask)=>ask.title)}
        </div>
    )
};

export default AskView;