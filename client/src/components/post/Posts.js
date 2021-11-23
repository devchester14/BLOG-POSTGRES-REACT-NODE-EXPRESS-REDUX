import React, { Fragment, useEffect, useState } from 'react';
import PostItem from './PostItem';
import PostForm from './PostForm';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Posts = () => {
	const [listOfPosts, setListOfPosts] = useState([]);
	let navigate = useNavigate();
	useEffect(() => {
		axios.get('http://localhost:3006/api/posts').then((response) => {
			setListOfPosts(response.data);
			console.log(setListOfPosts);
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
					<div className='post bg-white p-1 my-1' key={post.postid} post={post}>
						{/* <p className='my-1'>{post.title}</p>
							<p className='my-1'>{post.content}</p>
							<p className='my-1'>{post.tags}</p>
							<p className='post-date'>{post.createdat}</p> */}

						<Fragment>
							<div></div>
							<div onClick={() => navigate(`/${post.postid}`)}>
								<h1 className='my-1'>{post.title}</h1>
								<p className='my-1'>{post.content}</p>
								<p className='my-1'>{post.tags}</p>
								<p className='post-date'>{post.createdat}</p>
								<button
									onClick={() => ''}
									type='button'
									className='btn btn-light'
								>
									<i class='fas fa-comments'></i>
								</button>
								<button
									onClick={() => ''}
									type='button'
									className='btn btn-light'
								>
									<i className='fas fa-thumbs-up' />{' '}
									{/* <span>{likes.length > 0 && <span>{likes.length}</span>}</span> */}
								</button>
								<button
									onClick={() => ''}
									type='button'
									className='btn btn-light'
								>
									<i className='fas fa-thumbs-down' />
								</button>
								{/* <Link to={`/posts/${_id}`} className='btn btn-primary'> */}
								{/* Discussion{' '}
									{comments.length > 0 && (
										<span className='comment-count'>{comments.length}</span>
									)}
								</Link> */}
								{/* {!auth.loading && user === auth.user._id && ( */}

								<button
									onClick={() => ''}
									type='button'
									className='btn btn-light'
								>
									<i class='fas fa-edit'></i>
								</button>
								<button
									onClick={() => ''}
									type='button'
									className='btn btn-light'
								>
									<i class='fas fa-archive'></i>
								</button>
								<button
									onClick={() => ''}
									type='button'
									className='btn btn-danger'
								>
									<i className='fas fa-times' />
								</button>
							</div>

							{/* )} */}
						</Fragment>
					</div>
				))}
			</div>
		</div>
	);
};

export default Posts;
