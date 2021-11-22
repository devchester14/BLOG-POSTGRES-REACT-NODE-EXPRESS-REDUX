import axios from 'axios';
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { addPost } from '../../actions/post';
// import PostItem from './PostItem';

const PostForm = ({ addPost }) => {
	const [text, setText] = useState({
		title: '',
		content: '',
		tags: '',
	});
	const { title, content, tags } = text;

	const onChange = (e) => setText({ ...text, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			const body = { text };
			const addpost = await axios
				.post('http://localhost:3006/api/posts', {
					title: text.title,
					content: text.content,
					tags: text.tags,
					user_id: '1',
					poststatus: 'draft',
				})
				.then((Response) => console.log(Response));
			console.log(addPost);
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<div className='post-form'>
			<div className='bg-primary p'>
				<h3>Say Something...</h3>
			</div>
			<form className='form my-1' onSubmit={onSubmit}>
				<div className='form-group'>
					<textarea
						type='text'
						name='title'
						cols='30'
						rows='1'
						placeholder='Create a post Title'
						value={title}
						onChange={onChange}
						required
					/>
				</div>
				<div className='form-group'>
					<textarea
						type='text'
						name='content'
						cols='30'
						rows='7'
						placeholder='Post Content'
						value={content}
						onChange={onChange}
						required
					/>
				</div>
				<div className='form-group'>
					<textarea
						type='text'
						name='tags'
						cols='30'
						rows='1'
						placeholder='tags'
						value={tags}
						onChange={onChange}
						required
					/>
				</div>
				<input type='submit' className='btn btn-dark my-1' value='Submit' />
			</form>
		</div>
	);
};

// PostForm.propTypes = {
// 	addPost: PropTypes.func.isRequired,
// };

// export default connect(null, { addPost })(PostForm);
export default PostForm;
