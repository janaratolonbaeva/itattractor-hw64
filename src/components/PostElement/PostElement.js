import React from 'react';
import {NavLink} from 'react-router-dom';
import Moment from "react-moment";

const PostElement = props => {
	return (
		<div className="card mb-4">
			<div className="card-body">
				<div className="col mb-3">
					<Moment format="DD.MM.YYYY HH:mm">{props.date}</Moment>
				</div>
				<blockquote className="blockquote mb-4">
					<h6>{props.title}</h6>
				</blockquote>
				<div className="text-start">
					<NavLink exact to={`/posts/${props.id}`} className="btn btn-primary">Read more</NavLink>
				</div>
			</div>
		</div>
	)
};

export default PostElement;