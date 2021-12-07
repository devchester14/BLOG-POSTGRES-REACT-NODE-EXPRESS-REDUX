import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function CommentItem() {
	const [comments, setComments] = useState([]);
	let { postid } = useParams();
	useEffect(() => {
		axios
			.get(`http://localhost:3006/api/posts/${postid}/comments`)
			.then((data) => {
				console.log(data.data.rows);
				setComments(data.data.rows);
			});
	}, []);
	return (
		<div>
			{comments.map((comment) => (
				<div key={comment.commentid} className='container bg-white'>
					<p className=''>{comment.content}</p>
					<p className='post-date'>Posted on:{comment.created_at}</p>
				</div>
			))}
		</div>
	);
}

export default CommentItem;
