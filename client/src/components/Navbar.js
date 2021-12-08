import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
	const guestLinks = (
		<ul>
			<li>
				<Link to='/posts'>Posts</Link>
			</li>
		</ul>
	);

	const authLinks = (
		<ul>
			<li>
				<Link to='/users/posts'>posts</Link>
			</li>
			<li>
				<Link to='/posts'>
					<a onClick={logout} href='#!'>
						<i className='fas fa-sign-out-alt' />{' '}
						<span className='hide-sm'>Logout</span>
					</a>
				</Link>
			</li>
		</ul>
	);

	return (
		<nav className='navbar bg-dark'>
			<h1>
				<Link to='/'>
					<i className='fas fa-code' /> BLOGSYSTEM
				</Link>
			</h1>
			<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
		</nav>
	);
};

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
