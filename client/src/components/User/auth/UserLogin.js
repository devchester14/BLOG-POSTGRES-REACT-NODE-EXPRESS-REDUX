import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { BrowserRouter as useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router';
import axios from 'axios';

const Login = ({ login, isAuthenticated }) => {
	let navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			const loggedinUser = await axios
				.post('http://localhost:3006/api/users/login', {
					email: formData.email,
					password: formData.password,
				})
				.then((response) => {
					if (response.data.error) {
						alert(response.data.error);
					} else {
						localStorage.setItem('accessToken', response.data);
					}
				});
			navigate('/posts');
			console.log(loggedinUser);
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<div className='container'>
			<h1 className='large text-primary'>Sign In</h1>
			<p className='lead'>
				<i className='fas fa-user' /> Sign Into Your Account
			</p>
			<form className='form ' onSubmit={onSubmit}>
				<div className='form-group'>
					<input
						type='email'
						placeholder='Email Address'
						name='email'
						value={email}
						onChange={onChange}
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='password'
						placeholder='Password'
						name='password'
						value={password}
						onChange={onChange}
						minLength='6'
					/>
				</div>
				<input type='submit' className='btn btn-primary' value='Login' />
			</form>
			<p className='my-1'>
				Don't have an account? <Link to='/register'>Sign Up</Link>
			</p>
		</div>
	);
};
export default Login;
