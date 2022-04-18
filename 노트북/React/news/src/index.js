import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { BrowserRouter , Routes, Route } from 'react-router-dom'
// import NewsView from './components/news_view/news_view';
// import JobsView from './components/jobs_view/jobs_view';
// import AskView from './components/ask_view/ask_view';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  // </BrowserRouter>
  // <BrowserRouter>
  //   <App />
  //   <Routes>
  //     <Route path="/" element={<App />}></Route>
  //     <Route path="/news" element={<NewsView />}/>
  //     <Route path="/jobs" element={<JobsView />}/>
  //     <Route path="/ask" element={<AskView />}/>
  //   </Routes>
  // </BrowserRouter>
);


