import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom'

// 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007'

class CocktailList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            updateCocktailName: []

        }
    }



    componentDidMount() {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + this.props.match.params.value)
            .then(res => {
                // console.log(res.data.drinks)
                if (res.data.drinks === null) {
                    this.setState({
                        updateCocktailName: "Not Found"
                    })
                } else {
                    this.setState({
                        updateCocktailName: res.data.drinks[0]
                    })
                }
            })

    }


    render() {

        return (
            <div className='container-clist1'>
                {this.state.updateCocktailName === 'Not Found' && (
                    <div className='not-foundimg'>
                        <h1>{this.state.updateCocktailName}</h1>
                    </div>
                )}
                <div className='header-row2'>
                    <h1 className='header-list'>{this.state.updateCocktailName.strDrink}</h1></div>
                <div className='box1'>
                    {/* <h5>{this.state.updateCocktailName.strDrink}</h5> */}
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
                </div>
                <div className='content2'>
                    <h6>{this.state.updateCocktailName.strInstructions}</h6>
                </div>

                <div className='box2'>

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



                <div className='box3'>
                    <button className='button-list-1'><Link to='/'>Home</Link></button>
                </div>

            </div>



        )





    }





}

export default CocktailList