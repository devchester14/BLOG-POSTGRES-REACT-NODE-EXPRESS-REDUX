import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, Navigate } from 'react-router';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginAdmin } from '../../../actions/auth';

const AdminLogin = ({ loginAdmin, isAuthenticated }) => {
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
		loginAdmin(email, password);
	};

	if (isAuthenticated) {
		return <Navigate to='/admin/posts' />;
	}

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

AdminLogin.protoTypes = {
	loginAdmin: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { loginAdmin })(AdminLogin);
