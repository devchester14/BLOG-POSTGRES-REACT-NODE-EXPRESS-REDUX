import axios from 'axios';
import React, { useEffect } from 'react';

function CommentItem() {
	useEffect(() => {
		try {
			axios.get(`http://localhost:3006/api/posts/${postid}/comments`);
		} catch (err) {
			console.error(err.message);
		}
	});
	return <div></div>;
}

export default CommentItem;
