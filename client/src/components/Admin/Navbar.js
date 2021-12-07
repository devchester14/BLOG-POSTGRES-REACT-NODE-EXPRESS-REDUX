import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { logout } from '../../actions/auth';

// const Navbar = ({ auth: { isAuthenticated }, logout }) => {
const Navbar = () => {
	const [authState, setAuthState] = useState(false);

	useEffect(() => {
		if (localStorage.getItem('accessToken')) {
			setAuthState(true);
		}
	}, []);

	const guestLinks = (
		<ul>
			{!localStorage.getItem('accessToken') && (
				<>
					<li>
						<Link to='/posts'>Posts</Link>
					</li>
				</>
			)}

			{localStorage.getItem('accessToken') && (
				<>
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
						<Link to='/posts'>Logout</Link>
					</li>
				</>
			)}
		</ul>
	);

	return (
		<nav className='navbar bg-dark'>
			<h1>
				<Link to='/'>
					<i className='fas fa-code' /> BLOGSYSTEM
				</Link>
			</h1>
			<Fragment>
				{
					// isAuthenticated ? authLinks :
					guestLinks
				}
			</Fragment>
		</nav>
	);
};

// Navbar.propTypes = {
//   logout: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth
// });

// export default connect(mapStateToProps, { logout })(Navbar);
export default Navbar;
