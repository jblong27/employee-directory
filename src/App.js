import React from 'react';
import './App.css';
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

function App() {
  return (
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  );
}

export default App;
