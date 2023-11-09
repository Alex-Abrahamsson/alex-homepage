import React from 'react';
import Style from './App.module.scss';
import Home from './pages/home/home';

function App() {
  return (
    <div className={Style.App}>
      <Home />
    </div>
  );
}

export default App;
