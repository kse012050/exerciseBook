import React, { useEffect, useState } from 'react';
import { fetchAsksList } from '../../api';
import { NavLink } from 'react-router-dom';

const AskView = (props) => {
    let [ask , setAsk] = useState([]);

    useEffect(()=>{
        fetchAsksList()
            .then((respone)=>{
                setAsk(respone.data)
                console.log(respone.data);
            })
            .catch((error)=>console.log(error))
    },[])
    
    return (
        <div>
            {ask.map((ask)=>(
                <p key={ask.id}>
                    <NavLink to={`/item/${ask.id}`}>
                        {ask.title} 
                    </NavLink>
                    <small>
                    {ask.user} by {ask.time_ago}
                    </small>
                </p>
            ))}
        </div>
    )
};

export default AskView;