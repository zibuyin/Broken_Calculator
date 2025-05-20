import './App.css';
import { useState } from 'react';
import { question } from './Components/question';

function App() {
  return (
    
    <div id="content">
      <h1>Broken Calulator</h1>
      <div id="main">
        <div id="left" width="100px">{question()}</div>
        <div id="middle"></div>
        <div id="right">
          <div id="settings"></div>
          <div id="leaderBoards"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
