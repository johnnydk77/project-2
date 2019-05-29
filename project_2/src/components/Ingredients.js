import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import IngredientList from './IngredientList'
// import { Redirect } from 'react-router-dom'






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

        <div>

            <input type='text' placeholder='Enter Ingredient' value={this.state.ingredientName} onChange={this.handleChange} />

            <button type='submit' onClick={this.newSubmitFn}><Link to={`/IngredientList/${this.state.ingredientName}`}>Ingredients</Link></button>



        </div>


                )




    }






}

export default Ingredients