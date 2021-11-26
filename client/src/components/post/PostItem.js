import React, { Fragment } from 'react';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const PostItem = () => {
	const [post, setPost] = useState({
		title: '',
		content: '',
		tags: '',
	});
	let { postid } = useParams();

	useEffect(() => {
		axios.get(`http://localhost:3006/api/posts/${postid}`).then((data) => {
			console.log(data.data);
			setPost({
				title: data.data[0].title,
				content: data.data[0].content,
				tags: data.data[0].tags,
				created_at: data.data[0].created_at,
			});
		});
	}, []);

	return (
		<div className='container bg-white '>
			{/* <div className='post bg-white p-1 my-1 '> */}
			{/* <div></div> */}
			<div>
				<h1>{post.title}</h1>
				<p className='my-1'>{post.content}</p>

				<button type='button' className='btn btn-light'>
					<i className='fas fa-thumbs-up' />{' '}
				</button>
				<button type='button' className='btn btn-light'>
					<i className='fas fa-thumbs-down' />
				</button>

				{/* // )} */}
			</div>
			{/* </div> */}
		</div>
	);
};
export default PostItem;
