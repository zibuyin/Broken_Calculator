import './App.css';
import { useState } from 'react';
import { question } from './Components/question';

function App() {
  return (
    
    <div id="content">
      <h1>Broken Calulator</h1>
      <div id="main">
        <div id="left">{question(5)}</div>
        <div id="middle">
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div style={{width: "220px"}}>0</div>
          <div>.</div>
        </div>
        <div id="right">
          <div id="settings"></div>
          <div id="leaderBoards"></div>
        </div>
      </div>
    </div>
  );
}

export default App;