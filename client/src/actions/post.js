import api from '../utils/api';
import { setAlert } from './alert';
import {
	GET_POSTS,
	POST_ERROR,
	UPDATE_LIKES,
	DELETE_POST,
	ADD_POST,
	GET_POST,
	ADD_COMMENT,
	REMOVE_COMMENT,
} from './types';

//Get Posts
export const getPosts = () => async (dispatch) => {
	try {
		const res = await api.get('/posts');

		dispatch({
			type: GET_POSTS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};
// Add like
export const addLike = (id) => async (dispatch) => {
	try {
		const res = await api.put(`/posts/like/${id}`);

		dispatch({
			type: UPDATE_LIKES,
			payload: { id, likes: res.data },
		});
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// Remove like
export const removeLike = (id) => async (dispatch) => {
	try {
		const res = await api.put(`/posts/unlike/${id}`);

		dispatch({
			type: UPDATE_LIKES,
			payload: { id, likes: res.data },
		});
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

//Delete Post
export const deletePost = (postid) => async (dispatch) => {
	try {
		await api.delete(`/posts/${postid}`);
		dispatch({
			type: DELETE_POST,
			payload: postid,
		});
		dispatch(setAlert('POST REMOVED', 'success'));
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

//Add post
export const addPost = (FormData) => async (dispatch) => {
	try {
		const res = await api.post('/posts', FormData);
		dispatch({
			type: ADD_POST,
			payload: res.data,
		});

		dispatch(setAlert('Post Created', 'success'));
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

//Get Post
export const getPost = (postid) => async (dispatch) => {
	try {
		const res = await api.get(`/posts/${postid}`);

		dispatch({
			type: GET_POST,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

//Add comment
export const addComment = (postid, FormData) => async (dispatch) => {
	try {
		const res = await api.get(`/posts/${postid}`, FormData);
		dispatch({
			type: ADD_COMMENT,
			payload: res.data,
		});

		dispatch(setAlert('Comment Added', 'success'));
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

//DELETE COMMENt
export const deleteComment = (post_id, comment_id) => async (dispatch) => {
	try {
		await api.delete(`/posts/${post_id}/comments/${comment_id}`);
		dispatch({
			type: REMOVE_COMMENT,
			payload: comment_id,
		});
		dispatch(setAlert('Comment Removed', 'success'));
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};
