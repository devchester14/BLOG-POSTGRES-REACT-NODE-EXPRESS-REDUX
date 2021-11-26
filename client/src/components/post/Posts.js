import React, { Fragment, useEffect, useState } from 'react';

import PostForm from './PostForm';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Posts = () => {
	const [listOfPosts, setListOfPosts] = useState([]);
	let navigate = useNavigate();
	useEffect(() => {
		axios.get('http://localhost:3006/api/posts').then((data) => {
			console.log(data.data);
			setListOfPosts(data.data);
		});
	}, []);

	return (
		<div className='container'>
			<h1 className='large text-primary'>Posts</h1>
			<p className='lead'>
				<i className='fas fa-user' /> Welcome to the community
			</p>
			<PostForm />
			<div className='posts'>
				{listOfPosts.map((post) => (
					<div
						className='post bg-white p-1 my-1'
						key={post.postid}
						onClick={() => navigate(`/postItem/${post.postid}`)}
					>
						<Fragment>
							<div></div>
							<div>
								<h1 className='my-1'>{post.title}</h1>
								<p className='my-1'>
									{post.content.length > 50
										? post.content.substring(0, 120) + ' ...'
										: post.content}
								</p>
								<h4 className='my-1'>{post.tags}</h4>
								<p className='post-date'>{post.created_at}</p>
								<button
									onClick={() => ''}
									type='button'
									className='btn btn-light'
								>
									<i className='fas fa-comments'></i>
								</button>
								<button
									onClick={() => ''}
									type='button'
									className='btn btn-light'
								>
									<i className='fas fa-thumbs-up' />{' '}
								</button>
								<button
									onClick={() => ''}
									type='button'
									className='btn btn-light'
								>
									<i className='fas fa-thumbs-down' />
								</button>

								<button
									onClick={() => ''}
									type='button'
									className='btn btn-light'
								>
									<i className='fas fa-edit'></i>
								</button>
								<button
									onClick={() => ''}
									type='button'
									className='btn btn-light'
								>
									<i className='fas fa-archive'></i>
								</button>
								<button
									onClick={() => ''}
									type='button'
									className='btn btn-danger'
								>
									<i className='fas fa-times' />
								</button>
							</div>
						</Fragment>
					</div>
				))}
			</div>
		</div>
	);
};

export default Posts;
