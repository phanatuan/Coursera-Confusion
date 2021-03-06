 import React, { Component } from 'react';
import Home from './HomeComponent.js';
import Menu from './MenuComponent';
import Contact from './ContactComponent.js';
import About from './AboutComponent.js';
import Dishdetail from './DishdetailComponent.js';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';


const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments, 
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
});


class Main extends Component {

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchPromos();
    this.props.fetchComments();
  }

  render() {
    
    const DishWithId = ({match}) => {
      return(
          <Dishdetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            isLoading = {this.props.dishes.isLoading}
            errMess = {this.props.dishes.errMess} 
            addComment= {this.props.addComment}
            commentsErrMess = {this.props.comments.errMess} 
          />
      );
    }

    const HomePage = () => { 
      if(this.props.dishes.dishes.length > 0 && this.props.promotions.promotions.length > 0 ) {
      return (
        <Home dish = {this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading = {this.props.dishes.isLoading}
              dishesErrMess = {this.props.dishes.errMess} 
              promotion = {this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
              promosLoading = {this.props.promotions.isLoading}
              promosErrMess = {this.props.promotions.errMess} 
              leader = {this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );          
      } else {
        return (<h1> still loading </h1>)
      }
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
          <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
