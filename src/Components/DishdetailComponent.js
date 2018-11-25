import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
//import Menu from './MenuComponent';


class Dishdetail extends Component {
	
	componentDidMount() { 
		console.log('Dishdetail Component componentDidMount invoked');
	}

	componentDidUpdate() { 
		console.log('Dishdetail Component componentDidUpdate invoked');
	}

	renderDish(dish) { 
		return (
			<Card>
				<CardImg width='100%' src={dish.image} alt={dish.name} />
				<CardBody>
					<CardTitle heading>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		);
	}

	renderComments(dish) {
		const comments = dish.comments.map((eachComment) => {
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
				<ul className='list-unstyled'>
					{comments}
				</ul>
			</Card>
		);
	}

	render () {
		console.log('Dishdetail Component Render invoked');
		// console.log(this.props.dishSelection);
		if (this.props.dishSelection !== undefined) {
			return (
				<div className='container'>
					<div className='row'>
						<div className='col-12 col-md-5 m-1'>
							{this.renderDish(this.props.dishSelection)}
						</div>
					</div>
					
					<div className='row'>
						<div className='col-12 col-md-5 m-1'>
							{this.renderComments(this.props.dishSelection)}
						</div>
					</div>
				</div>
			);
		} else {
			return <div>Hello</div>
		}
		
	}
}
export default Dishdetail;
