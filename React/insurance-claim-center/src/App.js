import './App.css';
import { Routes , Route } from 'react-router-dom';
import Main from './router/main/Main.jsx';
import SubPage from './components/subPage/SubPage';
import Support from './router/support/Support';

// import test from '../images/logo.png'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<div>404 없는 페이지입니다</div>} />
        <Route path="/" element={<Main />} />
        <Route path="/subPage" element={<SubPage/>} >
          <Route path="Support" element={<Support />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
