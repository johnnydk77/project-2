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
            <h5>Cocktail: {this.state.updateCocktailName.strDrink}</h5>
            <h6>{this.state.updateCocktailName.strIngredient1}</h6>
            <h6>{this.state.updateCocktailName.strIngredient2}</h6>
            <h6>{this.state.updateCocktailName.strIngredient3}</h6>
            <h6>{this.state.updateCocktailName.strIngredient4}</h6>
            <h6>{this.state.updateCocktailName.strIngredient5}</h6>
            <h6>{this.state.updateCocktailName.strIngredient6}</h6>     
            <h6>{this.state.updateCocktailName.strIngredient7}</h6>
            <h6>{this.state.updateCocktailName.strIngredient8}</h6>
            <h6>{this.state.updateCocktailName.strIngredient9}</h6>
            <h6>{this.state.updateCocktailName.strIngredient10}</h6>

             <h6>Get to Mixing!</h6>
             <h6>{this.state.updateCocktailName.strMeasure1}</h6> 
            <h6>{this.state.updateCocktailName.strMeasure2}</h6>
            <h6>{this.state.updateCocktailName.strMeasure3}</h6>
            <h6>{this.state.updateCocktailName.strMeasure4}</h6>
            <h6>{this.state.updateCocktailName.strMeasure5}</h6>
            <h6>{this.state.updateCocktailName.strMeasure6}</h6>
            <h6>{this.state.updateCocktailName.strMeasure7}</h6>
            <h6>{this.state.updateCocktailName.strMeasure8}</h6>
            <h6>{this.state.updateCocktailName.strMeasure9}</h6>
            <h6>{this.state.updateCocktailName.strMeasure10}</h6> 

            

         </div>



        )





    }





}

export default CocktailList