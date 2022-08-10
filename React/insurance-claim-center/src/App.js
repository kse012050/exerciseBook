import './App.css';
// import Main from './router/Main.jsx';

// import test from '../images/logo.png'

function App() {
  return (
    <div className="App">
      {/* <img src={test} alt="왜안돼?"/> */}
      {/* <img src={'/images/logo.png'} alt="왜안돼?"/> */}
      {/* <img src={"./images/logo.png"} alt="상품이미지" width="80%"/> */}
      <img src={require("./img/shoes1.jpg")} alt="상품이미지" width="80%"/>
      https://bokjiho.medium.com/react-%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EA%B2%BD%EB%A1%9C-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0-public-src-%EB%94%94%EB%A0%89%ED%86%A0%EB%A6%AC-%EC%B0%A8%EC%9D%B4-fddb4f455c2a
      {/* <Main /> */}
      시작
    </div>
  );
}

export default App;
