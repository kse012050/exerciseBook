import './App.css';
import { Link } from 'react-router-dom';
// import { BrowserRouter , Routes, Route , Link } from 'react-router-dom'
// import NewsView from './components/news_view/news_view';
// import JobsView from './components/jobs_view/jobs_view';
// import AskView from './components/ask_view/ask_view';

function App() {
  return (
    <>
      <Link to="/news">news</Link>
      <Link to="/jobs">jobs</Link>
      <Link to="/ask">ask</Link>
      
    </>
  );
}

export default App;
