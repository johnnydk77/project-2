import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import IngredientList from './IngredientList'







class Ingredients extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ingredientName: ''
            // redirect: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.newSubmitFn = this.newSubmitFn.bind(this)

    }


    handleChange(e) {
        this.setState({
            ingredientName: e.currentTarget.value
        })
    }


    newSubmitFn(e) {
        e.preventDefault()

    }




    render() {
       
        return (

        <div className='wrapper-ingred'>
            <div className='ingred-background'>
            <div className='box-ingred'>
                <div className='ingred-heading'>
                    <h1>Choose Your Booze!</h1>

                </div>
            <input className='input-ingred' type='text' placeholder='Enter Ingredient' value={this.state.ingredientName} onChange={this.handleChange} />
            </div>
           <div className='ingred-submit'>
            <button type='submit' onClick={this.newSubmitFn}><Link to={`/IngredientList/${this.state.ingredientName}`}>Search</Link></button>
            </div>
            </div>

        </div>


                )




    }






}

export default Ingredients