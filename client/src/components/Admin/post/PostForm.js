import React, { Fragment, useState } from 'react';
import { addPost } from '../../../actions/post';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NavbarAdmin from '../NavbarAdmin';
const PostForm = ({ addPost }) => {
	const [text, setText] = useState({ title: '', content: '', tags: '' });

	const { title, content, tags } = text;

	// const onChange = (e) => setText({ ...text, [e.target.name]: e.target.value });

	return (
		<Fragment>
			<NavbarAdmin />
			<div className='post-form '>
				<div className='container'>
					<div className='bg-primary p'>
						<h3>Say Something...</h3>
					</div>
					<form
						className='form my-1'
						onSubmit={(e) => {
							e.preventDefault();
							addPost({ text });
							setText('');
						}}
					>
						<div className='form-group'>
							<textarea
								type='text'
								name='title'
								cols='30'
								rows='1'
								placeholder='Create a post Title'
								value={title}
								onChange={(e) => setText(e.target.value)}
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
								onChange={(e) => setText(e.target.value)}
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
								onChange={(e) => setText(e.target.value)}
								required
							/>
						</div>
						<input
							type='submit'
							className='btn btn-dark my-1'
							value='PostForm'
						/>
					</form>
				</div>
			</div>
		</Fragment>
	);
};

PostForm.propTypes = {
	addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
