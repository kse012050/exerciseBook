import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserView = (props) => {
    const [user , setUser] = useState([]);

    let params = useParams();

    useEffect(()=>{
        axios.get(`https://api.hnpwa.com/v0/user/${params.userName}.json`)
            .then(({data})=>{
                setUser(data)
            })
            .catch((error)=>console.log(error))
    },[]);
  
    return(
        <div>
            <p>name : {user.id}</p>
            <p>karma : {user.karma}</p>
            <p>created : {user.created}</p>
        </div>
    )
};

export default UserView;