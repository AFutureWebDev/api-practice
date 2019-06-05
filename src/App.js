import React, {Component} from 'react';
import './App.css';
import Beers from "./components/beers.js"
require('es6-promise').polyfill();
require('isomorphic-fetch');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      likedBeers: []
    }
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData(){
    fetch('https://api.punkapi.com/v2/beers')
    .then(function(response) {
      if (response.status >= 400) {
          throw new Error("Bad response from server");
      }
      return response.json();
  })
  .then(beerData => this.setState({beers: beerData}))
}
  likeBeer = (index) => {
    const likedBeer = this.state.beers[index];
    const newBeers = [...this.state.likedBeers, likedBeer];
    this.setState({likedBeers: newBeers})
  }
  
  render() {
    console.log("***THIS IS STATE***", this.state.isOn)
    return (
      <div className="App">
        <h1 className ="title">UnBEERlievable Beers</h1>
        <div className ="grid">
          {/* Favorite Beers */}
          <h1 className = "like">Favorite Beers</h1>
           <div className="row">{this.state.likedBeers.map((drink,index) =>(
            <Beers 
            name = {drink.name}
            picture = {drink.image_url}
            description = {drink.description}
            likeFunction = {this.likeBeer}
            index = {index}/>
          ))}</div>
          {/* All Beers */}
          <h1 className= "all">All Beers</h1>
          <div className="row">{this.state.beers.map((drink,index) =>(
            <Beers 
            name = {drink.name}
            picture = {drink.image_url}
            description = {drink.description}
            likeFunction = {this.likeBeer}
            index = {index}/>
          ))}</div>
        </div>
    </div>
    );
  }
}



export default App;
