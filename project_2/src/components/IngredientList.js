import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom'



class IngredientList extends Component {
    constructor(props) {
        super(props)

            this.state = {
                updateIngredientName: []
            }


    }

    componentDidMount() {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + this.props.match.params.value)
           .then( res => {
            // console.log(res.data.drinks)
               this.setState({
                   updateIngredientName: res.data.drinks
               })
           })
    
        }



    render() {
        return (
<div>
    {this.state.updateIngredientName.map(drink => (
            <div>
            <h4>Cocktail: {drink.strDrink}</h4>
           {/* <h4>Ingredients: {this.state.updateIngredientName.strDrink}</h4> */}
           </div>
    ))}

</div>
        )


    }






}

export default IngredientList