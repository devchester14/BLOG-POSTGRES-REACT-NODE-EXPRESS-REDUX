import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';
import { useState } from 'react';
const PostItem = ({
	post: postid,
	user_id,
	title,
	content,
	poststatus,
	createdat,
	tags,
	updatedat,
}) => {
	const [post, setPost] = useState();

	return (
		<div className='post bg-white p-1 my-1'>
			<div>
				<p className='my-1'>{title}</p>
				<p className='my-1'>{content}</p>
				<p className='my-1'>{tags}</p>
				<p className='post-date'>{createdat}</p>

				<Fragment>
					<button onClick={() => ''} type='button' className='btn btn-light'>
						<i className='fas fa-thumbs-up' />{' '}
						{/* <span>{likes.length > 0 && <span>{likes.length}</span>}</span> */}
					</button>
					<button onClick={() => ''} type='button' className='btn btn-light'>
						<i className='fas fa-thumbs-down' />
					</button>
					{/* <Link to={`/posts/${_id}`} className='btn btn-primary'> */}
					{/* Discussion{' '}
						{comments.length > 0 && (
							<span className='comment-count'>{comments.length}</span>
						)}
					</Link> */}
					{/* {!auth.loading && user === auth.user._id && ( */}
					<button onClick={() => ''} type='button' className='btn btn-danger'>
						<i className='fas fa-times' />
					</button>
					{/* )} */}
				</Fragment>
			</div>
		</div>
	);
};
export default PostItem;
