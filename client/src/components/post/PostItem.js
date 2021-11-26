import React, { Fragment } from 'react';

import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const PostItem = () => {
	const [post, setPost] = useState();

	return (
		<div className='post bg-white p-1 my-1'>
			<div className='post bg-white p-1 my-1' post={post}>
				<Fragment>
					<div></div>
					<div onClick={''}>
						<h1 className='my-1'>{post.title}</h1>
						<p className='my-1'>
							{post.content.length > 50
								? post.content.substring(0, 120) + ' ...'
								: post.content}
						</p>
						<p className='my-1'>{post.tags}</p>
						<p className='post-date'>{post.createdat}</p>
						<button onClick={() => ''} type='button' className='btn btn-light'>
							<i className='fas fa-comments'></i>
						</button>
						<button onClick={() => ''} type='button' className='btn btn-light'>
							<i className='fas fa-thumbs-up' />{' '}
						</button>
						<button onClick={() => ''} type='button' className='btn btn-light'>
							<i className='fas fa-thumbs-down' />
						</button>
						<button onClick={() => ''} type='button' className='btn btn-light'>
							<i className='fas fa-edit'></i>
						</button>
						<button onClick={() => ''} type='button' className='btn btn-light'>
							<i className='fas fa-archive'></i>
						</button>
						<button onClick={() => ''} type='button' className='btn btn-danger'>
							<i className='fas fa-times' />
						</button>
					</div>
				</Fragment>
			</div>
		</div>
	);
};
export default PostItem;
