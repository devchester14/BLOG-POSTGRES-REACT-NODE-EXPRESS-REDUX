import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

const PostItem = ({}) => (
	<div className='post bg-white p-1 my-1'>
		<div>
			<p className='my-1'>{text}</p>
			<p className='post-date'>Posted on {formatDate(date)}</p>

			{showActions && (
				<Fragment>
					<button
						onClick={() => addLike(_id)}
						type='button'
						className='btn btn-light'
					>
						<i className='fas fa-thumbs-up' />{' '}
						<span>{likes.length > 0 && <span>{likes.length}</span>}</span>
					</button>
					<button
						onClick={() => removeLike(_id)}
						type='button'
						className='btn btn-light'
					>
						<i className='fas fa-thumbs-down' />
					</button>
					<Link to={`/posts/${_id}`} className='btn btn-primary'>
						Discussion{' '}
						{comments.length > 0 && (
							<span className='comment-count'>{comments.length}</span>
						)}
					</Link>
					{!auth.loading && user === auth.user._id && (
						<button
							onClick={() => deletePost(_id)}
							type='button'
							className='btn btn-danger'
						>
							<i className='fas fa-times' />
						</button>
					)}
				</Fragment>
			)}
		</div>
	</div>
);

export default PostItem;
