import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import IngredientList from './IngredientList'






class Ingredients extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ingredientName: ''
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
                <form>
                    <input type='text' placeholder='Enter Ingredient' value={this.state.ingredientName} onChange={this.handleChange} />

                    <button type='submit' onClick={this.newSubmitFn}><Link to={`/IngredientList/${this.state.ingredientName}`}>Ingredients</Link></button>
                
                </form>
        </div>


                )
            
            
            
            
            }
            
            
            
            
            
            
            }
            
export default Ingredients