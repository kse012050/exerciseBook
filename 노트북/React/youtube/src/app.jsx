import { useState , useEffect } from 'react'
import { BrowserRouter, Routes , Route, Link } from 'react-router-dom';
import './App.css';
import './css/reset.css'
import VideoList from './components/videoList/videoList';
import SearchForm from './components/searchForm/searchForm';
import Test from './components/test/test';

function App() {
  const [videos, setVideos] = useState([]);
  // const test = 1;
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

  function search(query){
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
      fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyDYt_M1ZCPgn78zXl23y6ZLnP-5LdWyAhM`, requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          return result.items.map(item => ({...item, id : item.id.videoId}))
        })
        .then(items => {
          console.log(items);
          return setVideos(items)
        })
        .catch(error => console.log('error', error));
  }

  return (
    <>
      <SearchForm onSearch={search}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VideoList videos={videos} />}></Route>
          <Route path="/test" element={<Test />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <VideoList videos={videos} /> */}
    </>
  );
}

export default App;
