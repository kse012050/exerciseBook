import { useState , useEffect } from 'react'
import './app.css';
import VideoList from './components/videoList/videoList';

function App() {
  const [videos, setVideos] = useState([]);
  const test = 1;
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDYt_M1ZCPgn78zXl23y6ZLnP-5LdWyAhM", requestOptions)
      .then(response => response.json())
      .then(result => {
        return setVideos(result.items)
      })
      .catch(error => console.log('error', error));
  }, [])
  return (
    <VideoList videos={videos} />
  );
}

export default App;
