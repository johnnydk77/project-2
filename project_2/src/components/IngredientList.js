import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom'




class IngredientList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            updateIngredientName: [],

        }


    }



    componentDidMount() {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + this.props.match.params.value)
            .then(res => {
                    console.log(res.data.drinks)
                this.setState({
                    updateIngredientName: res.data.drinks
        
                })
            })

    }



    render() {

        return (


            <div className='container-ingreds'>

                <div className='ingred-list'>
                    {this.state.updateIngredientName === undefined && <h1>Ingredient Not Found</h1>}

                    {this.state.updateIngredientName !== undefined && (this.state.updateIngredientName.map(drink => (
                        <div>
                            <h2>Cocktail Name</h2>
                            <h3>{drink.strDrink}</h3>
                            <img src={drink.strDrinkThumb} alt='cocktail img' />

                        </div>
                    )))}

                    
                        <button className='list-button'><Link to='/'>Home</Link></button>
                    

                </div>
            </div>
        )


    }






}

export default IngredientList