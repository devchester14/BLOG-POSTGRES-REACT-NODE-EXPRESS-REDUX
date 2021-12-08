import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const NavbarAdmin = ({ auth: { isAuthenticated }, logout }) => {
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
				<Link to='/admin/posts'>posts</Link>
			</li>
			<li>
				<Link to='/createpost'>Create A post</Link>
			</li>
			<li>
				<Link to='/posts'>Archived post</Link>
			</li>
			<li>
				<Link to='/posts' className='hide-sm'>
					<a onClick={logout}>
						<Link to='/posts' />
						<i className='fas fa-sign-out-alt' /> Logout
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

NavbarAdmin.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(NavbarAdmin);
