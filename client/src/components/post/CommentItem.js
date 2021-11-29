import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';

function CommentItem() {
	const [comments, setComments] = useState([]);
	let { postid } = useParams();
	useEffect(() => {
		try {
			axios
				.get(`http://localhost:3006/api/posts/${postid}/comments`)
				.then((data) => {
					console.log(data.data);
					setComments(data.data);
				});
		} catch (err) {
			console.error(err.message);
		}
	});
	return (
		<div className='post bg-white '>
			{comments.map((comment) => (
				<div>
					<p className='my-1'>{comment.content}</p>
				</div>
			))}
			<div></div>
		</div>
	);
}

export default CommentItem;
