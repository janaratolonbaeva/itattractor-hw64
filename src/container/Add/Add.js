import React, {useState} from 'react';
import axiosOrders from "../../axios-orders";

const Add = props => {
	const [post, setPost] = useState({
		title: '',
		description: '',
		date: new Date()
	});

	const handleChanged = e => {
		const {name, value} = e.target;

		setPost(prevState => ({
			...prevState,
			[name]: value
		}));
	};


	const postHandler = async e => {
		e.preventDefault();

		const postCopy = {...post}

		try {
			await axiosOrders.post('/posts/.json', postCopy);
		} finally {
			props.history.push('/')
		}
	};

	return (
		<>
			<form onSubmit={postHandler}>
				<div className="mb-3">
					<label className="form-label">Title</label>
					<input type="text" className="form-control"
								 name="title" onChange={handleChanged}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Description</label>
					<textarea className="form-control" rows="3"
										name="description" onChange={handleChanged}/>
				</div>
				<button type="submit" className="btn btn-primary">SUBMIT</button>
			</form>
		</>
	);
};

export default Add;