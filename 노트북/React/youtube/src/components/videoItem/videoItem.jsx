import React from 'react';
import './videoItem.css';
import { useNavigate } from 'react-router-dom';

const VideoItem = (props) => {
    const navigate = useNavigate();
    return <li onClick={()=>{
        navigate('/test' , 'test');
    }}>
        <img src={props.video.snippet.thumbnails.medium.url} alt="" />
        <p>{ props.video.snippet.title }</p>
    </li>
};

export default VideoItem;
