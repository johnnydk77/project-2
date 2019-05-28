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
        // let redirect;
        return (

            // let redirect;
        // // chacking redirect value. I true redirect to stocks component or false return null
        // this.state.redirect ? redirect = <Redirect to='/components/CocktailList' /> : redirect = null
        // return(
        //     <div>
        //         // stock name 
        //         { this.state.stock.name }
        //         // button click resets state to true
        //         <button onClick={() => this.setState({redirect: true})}>Back</button>
        //         { redirect }
        //     </div>
        <div>

            <input type='text' placeholder='Enter Ingredient' value={this.state.ingredientName} onChange={this.handleChange} />

            <button type='submit' onClick={this.newSubmitFn}><Link to={`/IngredientList/${this.state.ingredientName}`}>Ingredients</Link></button>



        </div>


                )




    }






}

export default Ingredients