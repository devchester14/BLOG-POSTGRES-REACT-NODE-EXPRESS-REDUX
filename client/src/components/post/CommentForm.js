import axios from 'axios';
import React, { useState } from 'react';

const CommentForm = ({ postId, addComment }) => {
	const [text, setText] = useState('');

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			const addComment = await axios.post('http://localhost:3006/api/posts/');
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
					name='text'
					cols='30'
					rows='5'
					placeholder='Comment the post'
					value={text}
					onChange={(e) => setText(e.target.value)}
					required
				/>
				<input type='submit' className='btn btn-dark my-1' value='Submit' />
			</form>
		</div>
	);
};

export default CommentForm;
