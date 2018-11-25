import React, { Component } from 'react';
//import logo from './logo.svg';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent.js';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import { DISHES } from '../shared/dishes';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    }
  }

  onDishSelect(dishId) { 
    this.setState({selectedDish: dishId});
  }

  render() {
    // if (this.state.selectedDish !== null) {console.log(this.state.selectedDish)};
    //if (this.state.selectedDish !== null) {console.log(this.state.selectedDish)};
    return (
      <div>
        <Header/>
        <Menu dishes={this.state.dishes}
              onClick={(dishId) => this.onDishSelect(dishId)}/>
        <Dishdetail dishSelection={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
        <Footer/>
      </div>
    );
  }
}

export default Main;
