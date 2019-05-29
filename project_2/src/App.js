import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import Homepage from './components/Homepage';
import Cocktails from './components/Cocktails';
import Ingredients from './components/Ingredients';
import CocktailList from './components/CocktailList';
import IngredientList from './components/IngredientList';
import GlossaryList from './components/GlossaryList'




function App() {

  return (
    <div className="App">
      <Route exact path='/' component={Homepage} />
      <Route path='/Cocktails' component={Cocktails} />
      <Route path='/Ingredients' component={Ingredients} />
      <Route path='/CocktailList/:value' component={CocktailList}/>
      <Route path='/IngredientList/:value' component={IngredientList}/>
      <Route path='/GlossaryList' component={GlossaryList}/>
    
    
    
    </div>
  );
}

export default App;
