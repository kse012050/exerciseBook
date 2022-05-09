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
            {ask.map((ask)=>(<div key={ask.id}>{ask.title}</div>))}
        </div>
    )
};

export default AskView;