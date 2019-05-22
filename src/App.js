import React from 'react';
import './App.css';
import LazyDemo from './components/LazyDemo';
import CountDown from './components/DownCount';

const App = () => (
  <div className="App">
    <CountDown 
        timeTillDate="05 26 2019, 6:00 am" 
        timeFormat="MM DD YYYY, h:mm a" 
    /> 
    <LazyDemo />
  </div>
)

export default App;
