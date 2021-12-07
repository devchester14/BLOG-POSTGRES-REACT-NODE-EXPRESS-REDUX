import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

const PostItemAdmin = () => {
	const [post, setPost] = useState({
		title: '',
		content: '',
		tags: '',
	});
	const [ShowCommentform, SetShowCommentForm] = useState(false);
	let { postid } = useParams();
	let navigate = useNavigate();

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

	const OnDelete = () => {
		try {
			axios.delete(`http://localhost:3006/api/posts/${postid}`);
			console.log('Post Deleted');
			navigate('/posts');
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<Fragment>
			<div className='container'>
				<div>
					<Link to='/admin/posts' className='btn'>
						Back To Posts
					</Link>
					<div>
						<br />
					</div>
				</div>
				<div className='bg-white '>
					{/* <div className='post bg-white p-1 my-1 '> */}

					<Fragment>
						<div></div>
						<div>
							<h1>{post.title}</h1>
							<p className='my-1'>{post.content}</p>
							<p className='post-date'>
								Posted on:
								{post.created_at}
							</p>
							<div>
								<br />
							</div>
							<button
								onClick={() => {
									SetShowCommentForm(!ShowCommentform);
								}}
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
								onClick={OnDelete}
								type='button'
								className='btn btn-danger'
							>
								<i className='fas fa-times' />
							</button>
							<div>
								<br />
							</div>
						</div>
					</Fragment>
					<br />
				</div>
			</div>
			<div className='container'>
				{ShowCommentform ? <CommentForm /> : null}{' '}
			</div>{' '}
			<div className='container'>
				<CommentItem postid={postid} />
			</div>
		</Fragment>
	);
};
export default PostItemAdmin;
