import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import CocktailList from './CocktailList'


class Cocktails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cocktailName: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.submitFn = this.submitFn.bind(this)
    }



    handleChange(e) {
        this.setState({
            cocktailName: e.currentTarget.value
        })
    }


    submitFn(e) {
        e.preventDefault()

    }



    render() {
        return (


            <div className='container3'>
                <div className='buttons-cocktail'>
                    <div className='cocktail-button'>
                    <input type='text' placeholder='Enter Cocktail' value={this.state.cocktailName} onChange={this.handleChange} />
                    </div>
                    <div>
                    <div className='sub-button1'>
                    <button type='submit' onClick={this.submitFn}><Link to={`/CocktailList/${this.state.cocktailName}`}>Cocktails List</Link></button>
                </div>
                </div>
            </div>

            </div>



        )


    }



}

export default Cocktails
