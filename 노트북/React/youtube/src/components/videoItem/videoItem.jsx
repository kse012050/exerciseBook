import React from 'react';
import './videoItem.css';

const VideoItem = (props) => (
    <li>
        <img src={props.video.snippet.thumbnails.medium.url} alt="" />
        <p>{ props.video.snippet.title }</p>
    </li>
);

export default VideoItem;
