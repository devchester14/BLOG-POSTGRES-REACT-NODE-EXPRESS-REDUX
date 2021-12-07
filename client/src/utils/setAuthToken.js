import api from './api';

const setAuthToken = (token) => {
	if (token) {
		api.defaults.headers.common['accessToken'] = token;
		localStorage.setItem('accessToken', token);
	} else {
		delete api.defaults.headers.common['accessToken'];
		localStorage.removeItem('accessToken');
	}
};

export default setAuthToken;
