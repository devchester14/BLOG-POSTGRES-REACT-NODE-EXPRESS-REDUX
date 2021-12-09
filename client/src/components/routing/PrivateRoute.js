import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../User/layout/Spinner';

const PrivateRoute = ({
	component: Component,
	auth: { isAuthenticated, loading },
	...rest
}) => (
	<Route
		{...rest}
		render={(props) =>
			loading ? (
				<Spinner />
			) : isAuthenticated ? (
				<Component {...props} />
			) : (
				<Navigate to='/landing' />
			)
		}
	/>
);

PrivateRoute.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
