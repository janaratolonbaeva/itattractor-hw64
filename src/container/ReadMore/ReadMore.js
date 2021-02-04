import React, {useEffect, useState} from 'react';
import axiosOrders from "../../axios-orders";
import {NavLink} from "react-router-dom";
import Moment from "react-moment";
import parse from 'html-react-parser';

const ReadMore = (props) => {
	const [post, setPost] = useState({});
	const id = props.match.params.id;

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axiosOrders.get(`/posts/${id}.json`)
				setPost(response.data);
			} catch(e) {
				console.log(e);
			}
		}

		getData().then(console.error);
	}, [id]);

	const deletePost = async () => {
		try {
			await axiosOrders.delete(`/posts/${id}.json`);
			props.history.push('/')
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<div>
			<div className="card">
				<div className="card-header">
					<Moment format="DD.MM.YYYY HH:mm">{post.date}</Moment>
				</div>
				<div className="card-body">
					<h5 className="card-title">{post.title}</h5>
					<p className="card-text">{parse(post.description)}</p>
					<NavLink to={"/posts/" + id + "/edit"} className="btn btn-primary me-3">Edit</NavLink>
					<button className="btn btn-secondary" onClick={deletePost}>Delete</button>
				</div>
			</div>
		</div>
	);
};

export default ReadMore;