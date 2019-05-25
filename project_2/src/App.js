import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom"
import Homepage from './components/Homepage'
import Cocktails from './components/Cocktails'
import Ingredients from './components/Ingredients'

function App() {

  return (
    <div className="App">
      <Route exact path='/' component={Homepage} />
      <Route path='/Cocktails' component={Cocktails} />
      <Route path='/Ingedients/:id' component={Ingredients} />
    </div>
  );
}

export default App;
