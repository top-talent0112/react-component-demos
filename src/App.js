import React from 'react';
import './App.css';
import LazyDemo from './components/LazyDemo';
import CountDown from './components/DownCount';
import Dashboard from './components/Dashboard';
import Timeline from './components/Timeline';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/lazydemo' component={LazyDemo} />
        <Route path='/timeline' component={Timeline} />
        <Route path='/countdown' component={() => <CountDown timeTillDate="05 26 2019, 6:00 am" timeFormat="MM DD YYYY, h:mm a" />}/>
      </Switch>
    </Router>
  </div>
)

export default App;
