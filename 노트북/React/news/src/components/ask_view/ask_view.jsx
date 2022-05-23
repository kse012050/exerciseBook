import React, { useEffect, useState } from 'react';
import { fetchAsksList } from '../../api';

const AskView = (props) => {
    let [ask , setAsk] = useState([]);

    useEffect(()=>{
        fetchAsksList()
            .then((respone)=>setAsk(respone.data))
            .catch((error)=>console.log(error))
    },[])
    
    return (
        <div>
            {ask.map((ask)=>(
                <p key={ask.id}>
                    <a href={ask.url}>
                        {ask.title} 
                    </a>
                    <small>
                    {ask.user} by {ask.time_ago}
                    </small>
                </p>
            ))}
        </div>
    )
};

export default AskView;