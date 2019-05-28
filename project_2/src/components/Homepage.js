import React, { Component } from 'react';
import axiox from 'axios';
import { Route, Link } from "react-router-dom"




class Homepage extends Component {
    constructor(props) {
        super(props)


    }


    render() {
        return (


            <div className="container-1">
                <div className='box-1'>
                    <h1 className='homeh1'>Be Your Own Bartender</h1>
                    <h2 className='homeh2'>Click below to get started.</h2>
                </div>
                <div className='box-2'>
                    <h5 className='searchCocktail'>Search By Cocktail Name</h5>
                    <button><Link to="/Cocktails">Cocktails</Link></button>
                </div>
                <div className='box-3'>
                    <h5 className='searchIngredient'> Search By Liquor</h5>
                    <button><Link to="/Ingredients">Liquor</Link></button>
                </div>
                <div className='box-4'>
                    <button><Link to='/GlossaryList'>Glossary</Link></button>
                </div>



            </div>



        )


    }


}

export default Homepage