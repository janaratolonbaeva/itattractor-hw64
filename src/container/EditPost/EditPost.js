import React, {useState,useEffect} from 'react';
import CKEditor from 'ckeditor4-react';
import axiosOrders from "../../axios-orders";

const EditPost = props => {
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

	const postChanged = e => {
		const {name, value} = e.target;

		setPost(prevState => ({
			...prevState,
			[name]: value
		}));
	};

	const editorChanged = e => {
		setPost({
			description: e.editor.getData()
		})
	};

	const postHandlerEdit = async e => {
		e.preventDefault();

		const postCopy = {...post}

		try {
			await axiosOrders.put(`/posts/${id}.json`, postCopy);
		} finally {
			props.history.push('/');
		}
	};

	return (
		<div className="mt-4">
			<form onSubmit={postHandlerEdit}>
				<div className="mb-3">
					<label className="form-label">Title</label>
					<input type="text" className="form-control"
								 value={post.title} onChange={postChanged}
								 name="title"
					/>
				</div>
				<div className="mb-3">
					<p className="form-label">Description</p>
					<CKEditor
						type="classic" data={post.description}
						onChange={editorChanged}
					/>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		</div>
	);
};

export default EditPost;