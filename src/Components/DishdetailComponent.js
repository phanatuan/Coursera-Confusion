import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
//import Menu from './MenuComponent';


class Dishdetail extends Component {
	constructor(props) {
		super(props); 
		this.state = { //Declare a state
			//dishSelect: null
		}
	}

	renderDish(dish) { 
		//console.log(dish) *For Debug
		return (
			<Card>
				<CardImg width='100%' src={	dish.image} alt={dish.name} />
				<CardBody>
					<CardTitle heading>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		);
	}

	renderComments(dish) {
		const comments = dish.comments.map((eachComment) => {
			//console.log(eachComment.author); *for DEBUG
			return (
				<li key={eachComment.id} >
					<div>{eachComment.author}</div>			
					<div> -- {eachComment.comment}, {eachComment.date}</div>
				</li>
			);
		});
		return (
			<Card>
				<h4>Comments</h4>
				<ul class='list-unstyled'>
					{comments}
				</ul>
			</Card>
		);
	}

	render () {
		if (this.props.dishSelect !== null) {
			return (
				<div className='container'>
					<div className='row'>
						<div className='col-12 col-md-5 m-1'>
							{this.renderDish(this.props.dishSelect)}
						</div>
					</div>
					
					<div className='row'>
						<div className='col-12 col-md-5 m-1'>
							{this.renderComments(this.props.dishSelect)}
						</div>
					</div>
				</div>

		);
		} else {
			return <div></div>
		}
		
	}
}
export default Dishdetail;
