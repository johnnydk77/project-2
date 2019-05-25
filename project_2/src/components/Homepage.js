import React, { Component } from 'react';
import axiox from 'axios';
import { Route, Link } from "react-router-dom"

class Homepage extends Component {
    constructor(props) {
        super(props)


    }


    render() {
        return (


            <div className="App">
                <h1 className='homeh1'>Be Your Own Bartender</h1>
                <h2 className='homeh2'>Click below to get started.</h2>

                  <button><Link to="/Cocktails">Cocktails</Link>Cocktails!</button>
                <button><Link to="/Ingredients">Ingredients</Link>Ingredients!</button> 
                


            </div>



        )


    }


}

export default Homepage