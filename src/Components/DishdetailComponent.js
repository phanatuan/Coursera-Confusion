import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
//import Menu from './MenuComponent';
	
	function RenderDish({dish}) { 
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

	function RenderComments({comment}) {
		const comments = comment.map((eachComment) => {
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

	function Dishdetail(props) { 
		if (props.dishSelection !== undefined) {
			return (
				<div className='container'>
					<div className='row'>
						<div className='col-12 col-md-5 m-1'>
							<RenderDish dish={props.dishSelection}/>
						</div>
					</div>
					
					<div className='row'>
						<div className='col-12 col-md-5 m-1'>
							<RenderComments comment={props.dishSelection.comments}/>
						</div>
					</div>
				</div>
			);
		} else {
			return <div></div>
		}
	}

export default Dishdetail;
