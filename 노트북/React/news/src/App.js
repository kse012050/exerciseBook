import './App.css';
// import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import RouterView from './router/index'
import NewsView from './components/news_view/news_view';
import JobsView from './components/jobs_view/jobs_view';
import AskView from './components/ask_view/ask_view';
import ItemView from './components/item_view/item_view';
import UserView from './components/user_view/user_view';

function App() {
  return (
    <>
      <RouterView></RouterView>
      <Routes>
        <Route path="/" element={<NewsView />} />
        <Route path="/news" element={<NewsView />}/>
        <Route path="/jobs" element={<JobsView />}/>
        <Route path="/ask" element={<AskView />}/>
        <Route path="/item/:itemName" element={<ItemView />}/>
        <Route path="/user/:userName" element={<UserView />}/>
        {/* <Route path="/users">
          <Route path=":userId" element={<UserView />} />
        </Route> */}
    </Routes>
    </>
  );
}

export default App;
