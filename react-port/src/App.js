import './App.css';
import { useState } from 'react';

function App() {
  return (
    
    <div id="content">
      <h1>Broken Calulator</h1>
      <div id="main">
        <div id="left" width="100px"></div>
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
