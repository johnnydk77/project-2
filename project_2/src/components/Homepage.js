import React, { Component } from 'react';
import axiox from 'axios';
import { Route, Link } from "react-router-dom"




class Homepage extends Component {
    constructor(props) {
        super(props)


    }


    render() {
        return (


            <div className='container-1'>
                <div className='header-row'>
                    <h1 className='homeh1'>Be Your Own Bartender</h1>
                    {/* <h2 className='homeh2'>Click below to get started.</h2> */}
                </div>

                
                    <div className='cocktail'>
                        <h2 className='searchCocktail'>Search By Cocktail Name</h2>
                        <button className='button-home1'><Link to="/Cocktails">Cocktails</Link></button>
                    </div>
                    
                    <div className='content'>
                        <h1 className='content-font'>Drink Up!</h1>
                    </div>
                    
                    <div className='ingredient'>
                        <h2 className='searchIngredient'>Choose Your Booze!</h2>
                        <button className='button-home2'><Link to="/Ingredients">Liquor</Link></button>
                    </div>
                    
                    <div className='glossary'>
                        <button className='button-home3'><Link to='/GlossaryList'>Glossary</Link></button>
                    </div>


               
            </div>



        )


    }


}

export default Homepage