import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Exam from './Pages/Exam';
import Result from './Pages/Result';

function App() {
  return (
    <div className="App" data-testid="app">
      <BrowserRouter>

        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/exam" exact={true} component={Exam}></Route>
          <Route path="/result" exact={true} component={Result}></Route>

        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
