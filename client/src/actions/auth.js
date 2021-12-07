import api from '../utils/api';

import { setAlert } from './alert';

import {
	ADMIN_REGISTER_SUCCESS,
	ADMIN_REGISTER_FAIL,
	USER_LOADED,
	ADMIN_LOADED,
	AUTH_ERROR,
	LOGOUT,
	ADMIN_LOGIN_SUCCESS,
	ADMIN_LOGIN_FAIL,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAIL,
	USER_REGISTER_SUCCESS,
} from './types';

//LOAD USER
export const loadUser = () => async (dispatch) => {
	try {
		const res = await api.get('/users/auth');
		dispatch({
			type: USER_LOADED,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: AUTH_ERROR,
		});
	}
};

//LOAD ADMIN
export const loadAdmin = () => async (dispatch) => {
	try {
		const res = await api.get('/admins/auth');
		dispatch({
			type: ADMIN_LOADED,
			payload: res.data,
		});
	} catch (err) {}
};

//REGISTER ADMIN
export const registerAdmin = (FormData) => async (dispatch) => {
	try {
		const res = await api.post('/admins', FormData);

		dispatch({
			type: ADMIN_REGISTER_SUCCESS,
			payload: res.data,
		});
		dispatch(loadUser());
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
		}

		dispatch({
			type: ADMIN_REGISTER_FAIL,
		});
	}
};

//REGISTER USER
export const registerUser = (FormData) => async (dispatch) => {
	try {
		const res = await api.post('/users', FormData);

		dispatch({
			type: USER_REGISTER_SUCCESS,
			payload: res.data,
		});
		dispatch(loadUser());
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
		}

		dispatch({
			type: ADMIN_REGISTER_FAIL,
		});
	}
};

//LOGIN ADMIN
export const loginAdmin = (email, password) => async (dispatch) => {
	const body = { email, password };
	try {
		const res = await api.post('/admins/login', body);

		dispatch({
			type: ADMIN_LOGIN_SUCCESS,
			payload: res.data,
		});
		dispatch(loadAdmin());
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, 'dangers')));
		}

		dispatch({
			type: ADMIN_LOGIN_FAIL,
		});
	}
};

//LOGIN USER
export const loginUser = (email, password) => async (dispatch) => {
	const body = { email, password };
	try {
		const res = await api.post('/admins/log', body);

		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: res.data,
		});
		dispatch(loadUser());
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
		}

		dispatch({
			type: USER_LOGIN_FAIL,
		});
	}
};

//LOGOUT
export const logout = () => ({ type: LOGOUT });
