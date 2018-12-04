import React, { Component } from 'react';
import { Label, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup} from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';

class CommentForm extends Component { 
	constructor(props) { 
		super(props);
		this.state = { 
			modal: false
		}

		this.toggle = this.toggle.bind(this);
	}

	handleSubmit(values) {
		console.log(`Current State is ${JSON.stringify(values)}`);
		this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
	}

	toggle() { 
		this.setState({
			modal: !this.state.modal
		});
	}

	render() {

		const renderForm = () => { 
			return (
				<div>
					<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
						<FormGroup>
							<Label>Rating</Label>
							<Control.select model='.rating' id='rating' 
											    name='rating' placeholder='Rating'
                                     className = 'form-control'>
	                     	<option>1</option>
				            <option>2</option>
				            <option>3</option>
				            <option>4</option>
				            <option>5</option>
			            </Control.select>
						</FormGroup>
						
						<FormGroup>
							<Label>Author</Label>
							<Control.text model='.author' id='author' 
										name='author' placeholder='Author'
                                   className = 'form-control'/> 
						</FormGroup>
						
						<FormGroup>
							<Label>Comment</Label>
							<Control.textarea model='.comment' id='comment' 
											  name='comment' placeholder='Your Comment'
											  rows='6'      className = 'form-control'/>
						</FormGroup>

						<Button className='form-control' color='primary' type='submit'>Submit</Button>
					
					</LocalForm>
				</div>

			);
		}

		return (
			<div>
			<Button color='danger' onClick={this.toggle}>Hello World</Button>
			<Modal isOpen={this.state.modal}>
				<ModalHeader toggle={this.toggle}>Submit Comment</ModalHeader>
				<ModalBody>{renderForm()}</ModalBody>
				<ModalFooter>Designed by Jimmy Phan </ModalFooter>
			</Modal>
			</div>
		);

	}


}

export default CommentForm;