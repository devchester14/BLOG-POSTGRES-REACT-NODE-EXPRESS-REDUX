import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setAlert } from '../../../actions/alert';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { registerAdmin } from '../../../actions/auth';
import { connect } from 'react-redux';
import { Navigate } from 'react-router';
const AdminRegister = ({ setAlert, registerAdmin, isAuthenticated }) => {
	let navigate = useNavigate();
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		password2: '',
	});

	const { username, email, password, password2 } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		if (password !== password2) {
			setAlert('Passwords do not match', 'danger');
		} else {
			registerAdmin({ username, email, password });
		}
	};
	if (isAuthenticated) {
		return <Navigate to='/admin/posts' />;
	}

	return (
		<div>
			<h1 className='large text-primary'>Sign Up</h1>
			<p className='lead'>
				<i className='fas fa-user' /> Create Your Account
			</p>
			<form className='form' onSubmit={onSubmit}>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Name'
						name='username'
						value={username}
						onChange={onChange}
					/>
				</div>
				<div className='form-group'>
					<input
						type='email'
						placeholder='Email Address'
						name='email'
						value={email}
						onChange={onChange}
					/>
					<small className='form-text'>
						This site uses Gravatar so if you want a profile image, use a
						Gravatar email
					</small>
				</div>
				<div className='form-group'>
					<input
						type='password'
						placeholder='Password'
						name='password'
						value={password}
						onChange={onChange}
					/>
				</div>
				<div className='form-group'>
					<input
						type='password'
						placeholder='Confirm Password'
						name='password2'
						value={password2}
						onChange={onChange}
					/>
				</div>
				<input type='submit' className='btn btn-primary' value='Register' />
			</form>
			<p className='my-1'>
				Already have an account? <Link to='/login'>Sign In</Link>
			</p>
		</div>
	);
};

AdminRegister.propTypes = {
	setAlert: PropTypes.func.isRequired,
	registerAdmin: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, registerAdmin })(
	AdminRegister,
);
