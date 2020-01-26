import React from 'react';
import './App.css';

import Congrats from "./Congrats";

function App() {
  return (
    <div data-test="app-component">
      <Congrats success={false}/>
    </div>
  );
}

export default App;
