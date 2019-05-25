import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom'

// 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007'

class CocktailList extends Component {
    
    constructor (props){
        super(props)

        this.state = {
            updateCocktailName: []

        }
    }



componentDidMount() {
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + this.props.match.params.value)
       .then( res => {
        console.log(res.data.drinks)
           this.setState({
               updateCocktailName: res.data.drinks[0]
           })
       })

    }


    render() {
        // console.log(this.props.match.params.value)
        return (

            <div>
            <h4>Cocktail: {this.state.updateCocktailName.strDrink}</h4>
            <h4>Ingredients: {this.state.updateCocktailName.strIngredient1}</h4>
            
            </div>



        )





    }





}

export default CocktailList