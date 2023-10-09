import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sitebar from './Components/Sitebar';
import Main from './Components/Main';


function App() {
  return (
    <div className="App">
      <Header/>
      <Sitebar/>
      <Main/>
    </div>
  );
}


export default App;
