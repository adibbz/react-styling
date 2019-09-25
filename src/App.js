import React from 'react';
import './App.css';
import Inline from './components/Inline';
import Stylesheet from './components/stylesheet/Stylesheet';
import CssModules from './components/css-modules/CssModules';
import StyledComp from './components/StyledComp';

function App() {
  return (
    <div className="App">
      <div className="App-wrapper">
          <Inline />
          <Stylesheet />
          <CssModules />
          <StyledComp />
      </div>
    </div>
  );
}

export default App;
