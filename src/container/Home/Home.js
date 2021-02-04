import React, {useState, useEffect} from 'react';
import PostElement from '../../components/PostElement/PostElement';
import axiosOrders from '../../axios-orders';

const Home = props => {
	const [posts, setPosts] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axiosOrders.get('/posts/.json');
				setPosts(response.data);
			} catch (e) {
				console.log(e);
			}
		}

		fetchData().catch(console.error);
	}, []);

	console.log(posts);

	return (
		<>
			{Object.keys(posts).map(id => {
				return (
					<PostElement id={id} date={posts[id].date} title={posts[id].title}/>
				)
			})}
		</>
	);
};

export default Home;