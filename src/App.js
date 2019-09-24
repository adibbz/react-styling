import React from 'react';
import './App.css';
import Inline from './components/Inline';
import Stylesheet from './components/stylesheet/Stylesheet';

function App() {
  return (
    <div className="App">
      <div className="App-wrapper">
          <Inline />
          <Stylesheet />
        <div>css modules</div>
        <div>styles components</div>
      </div>
    </div>
  );
}

export default App;
