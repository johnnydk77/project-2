import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import CocktailList from './CocktailList'


class Cocktails extends Component {
    constructor (props){
        super(props)

        this.state = {
            cocktailName: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.submitFn = this.submitFn.bind(this)
    }


//   async componentDidMount () {
//     const getList = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007')
//     console.log(getList)
//     this.setState ({
//         cocktailList: getList.data.drinks
//     })
// }

handleChange(e) {
    this.setState({
        cocktailName: e.currentTarget.value
    })
}


submitFn (e) {
e.preventDefault()

}



render (){
    return (


        <div>
             <form>
        <input type='text' placeholder='Enter Cocktail' value={this.state.cocktailName} onChange={this.handleChange}/>

        <button type='submit' onClick={this.submitFn}><Link to={`/CocktailList/${this.state.cocktailName}`}>Cocktails List</Link></button>
      </form>
        
           
            
            </div>



    )


}



}

export default Cocktails
