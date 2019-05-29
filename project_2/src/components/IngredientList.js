import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom'
// import { Redirect } from 'react-router-dom'



class IngredientList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            updateIngredientName: [],
            // redirect: false
        }


    }

    // import React, { Component } from 'react'
    // import axios from 'axios'
    // import { Redirect } from 'react-router-dom'

    // class StockDetail extends Component {
    //     constructor(props) {
    //         super(props)

    //         this.state = {
    //             stock: {},
    //             redirect: false
    //         }
    //     }

    componentDidMount() {
        axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + this.props.match.params.value)
            .then(res => {
                // console.log(res.data.drinks)
                this.setState({
                    updateIngredientName: res.data.drinks
                })
            })

    }
    // let redirect;
    // // chacking redirect value. I true redirect to stocks component or false return null
    // this.state.redirect ? redirect = <Redirect to='/stocks' /> : redirect = null
    // return(
    //     <div>
    //         // stock name 
    //         { this.state.stock.name }
    //         // button click resets state to true
    //         <button onClick={() => this.setState({redirect: true})}>Back</button>
    //         { redirect }
    //     </div>


    render() {

        return (
            <div>
            {this.state.updateIngredientName.map(drink => (
                    <div>
                    <h2>Cocktail Name</h2>
                    <h3>{drink.strDrink}</h3>
                    <img src={drink.strDrinkThumb}  alt='cocktail img'/>
                   
                   </div>
            ))}

            <div>
                <button><Link to='/'>Home</Link></button>
            </div>
        
        </div>
                )
        
        
            }
        
        
        
        
        
        
        }
        
        export default IngredientList