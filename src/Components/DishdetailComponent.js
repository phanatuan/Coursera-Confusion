import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm.js';
	
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
		if (props.dish !== undefined) {
			return (
				<div className='container'>
					<div className='row'>
						<Breadcrumb>
							<BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
							<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
						</Breadcrumb>
						<div className='col-12'>
							<h3>{props.dish.name}</h3>
							<hr />
						</div>
					</div>
					
					<div className='row'>
						<div className='col-12 col-md-5 m-1'>
							<RenderDish dish={props.dish}/>
							<RenderComments comment={props.comments}/>
						</div>
					</div>

					<div>
						<CommentForm /> 
					</div>
			
				</div>
			);
		} else {
			return <div></div>
		}
	}

export default Dishdetail;
