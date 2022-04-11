import React from 'react';
import VideoItem from '../videoItem/videoItem'
import './videoList.css'

const VideoList = (props) => {
    return (
        <ul>
            { 
                props.videos.map(video => (
                    <VideoItem key={video.id} video={video}/>
                )) 
            }
        </ul>
    );
};

// const VideoList = props => (
//     <>
//         <ul>
//             { 
//                 props.videos.map(video => ( <VideoItem key={video.id} video={video}/>)) 
//             }
//         </ul>
//     </>
// );

export default VideoList;
