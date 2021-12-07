import {
	ADMIN_REGISTER_SUCCESS,
	// ADMIN_REGISTER_FAIL,
	USER_LOADED,
	ADMIN_LOADED,
	AUTH_ERROR,
	LOGOUT,
	ADMIN_LOGIN_SUCCESS,
	// ADMIN_LOGIN_FAIL,
	USER_LOGIN_SUCCESS,
	// USER_LOGIN_FAIL,
	USER_REGISTER_SUCCESS,
} from '../actions/types';

const initialState = {
	token: localStorage.getItem('accessToken'),
	isAuthenticated: null,
	loading: true,
	user: null,
};

function authReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case ADMIN_LOADED:
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: payload,
			};
		case ADMIN_REGISTER_SUCCESS:
		case USER_LOGIN_SUCCESS:
		case USER_REGISTER_SUCCESS:
		case ADMIN_LOGIN_SUCCESS:
			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false,
			};
		case ACCOUNT_DELETED:
		case AUTH_ERROR:
		case LOGOUT:
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				user: null,
			};
		default:
			return state;
	}
}

export default authReducer;
