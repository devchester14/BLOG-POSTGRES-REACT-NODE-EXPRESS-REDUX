import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router';

const CommentForm = ({ postId, addComment }) => {
	const [text, setText] = useState({
		content: '',
	});
	let { postid } = useParams();

	const { content } = text;
	const onChange = (e) => setText({ ...text, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			const addComment = await axios
				.post(
					`http://localhost:3006/api/posts/${postid}/comments`,
					{
						comment_status: '2',
						content: text.content,
					},
					{
						headers: {
							accessToken: localStorage.getItem('token'),
						},
					},
				)
				.then((response) => {
					if (response.data.error) {
						console.log(response.data.error);
					} else {
						setText = [...text, addComment];
					}
				});
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<div className='post-form'>
			<div className='bg-primary p'>
				<h3>Leave a Comment</h3>
			</div>
			<form className='form my-1' onSubmit={onSubmit}>
				<textarea
					type='text'
					name='content'
					cols='30'
					rows='5'
					placeholder='Comment the post'
					value={content}
					onChange={onChange}
					required
				/>
				<input type='submit' className='btn btn-dark my-1' value='Submit' />
			</form>
		</div>
	);
};

export default CommentForm;
