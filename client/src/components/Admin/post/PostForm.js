import axios from 'axios';
import React, { Fragment, useState } from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../Navbar';
const PostForm = ({ addPost }) => {
	let navigate = useNavigate();
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
			// const body = { text };
			const addpost = await axios
				.post(
					'http://localhost:3006/api/posts',
					{
						title: text.title,
						content: text.content,
						tags: text.tags,
						poststatus: '1',
					},
					{
						headers: {
							accessToken: localStorage.getItem('accessToken'),
						},
					},
				)
				.then((response) => {
					if (response.data.error) {
						console.log(response.data.error);
					} else {
						setText = [...text, addpost];
					}
				});
			navigate('/admin/posts');
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<Fragment>
			<Navbar />
			<div className='post-form '>
				<div className='container'>
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

// PostForm.propTypes = {
// 	addPost: PropTypes.func.isRequired,
// };

// export default connect(null, { addPost })(PostForm);
export default PostForm;
