import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import IngredientList from './IngredientList'






class Ingredients extends Component {
    constructor(props){
        super(props)


}





render(){
    return(


        <div>
                     <form>
        <input type='text' placeholder='Enter Ingredient' />
        <button type='submit' ><Link to="/IngredientList">Ingredient List</Link>Submit</button>
      </form>
                
                
        </div>


    )




}






}

export default Ingredients