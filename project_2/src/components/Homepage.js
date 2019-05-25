import React, { Component } from 'react';
import axiox from 'axios';
import { Route, Link } from "react-router-dom"


// const ingredUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka'

// const cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007'

class Homepage extends Component {
    constructor(props) {
        super(props)


    }


    render() {
        return (


            <div className="App">
                <h1 className='homeh1'>Be Your Own Bartender</h1>
                <h2 className='homeh2'>Click below to get started.</h2>

                  <button><Link to="/Cocktails">Cocktails</Link></button>
                <button><Link to="/Ingredients">Ingredients</Link></button> 
                


            </div>



        )


    }


}

export default Homepage