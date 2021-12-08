import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import NavbarAdmin from '../NavbarAdmin';
import { getPosts } from '../../../actions/post';
import { connect } from 'react-redux';
const Posts = ({ getPosts, post: { posts } }) => {
	let navigate = useNavigate();
	useEffect(() => {
		getPosts();
	}, [getPosts]);

	return (
		<Fragment>
			<NavbarAdmin />
			<div className='container'>
				<h1 className='large text-primary'>Posts</h1>
				<p className='lead'>
					<i className='fas fa-user' /> Welcome to the community
				</p>

				<div className='posts'>
					{posts.map((post) => (
						<div
							className='post bg-white p-1 my-1'
							key={post.postid}
							onClick={() => navigate(`/adminpostitem/${post.postid}`)}
						>
							<Fragment>
								<div></div>
								<div>
									<h1 className='my-1'>{post.title}</h1>
									<p className='my-1'>
										{post.content.length > 50
											? post.content.substring(0, 120) + ' ...'
											: post.content}
									</p>
									<h4 className='my-1'>{post.tags}</h4>
									<p className='post-date'>Posted on:{post.created_at}</p>
									<button
										onClick={() => ''}
										type='button'
										className='btn btn-light'
									>
										<i className='fas fa-comments'></i>
									</button>
									<button
										onClick={() => ''}
										type='button'
										className='btn btn-light'
									>
										<i className='fas fa-thumbs-up' />{' '}
									</button>
									<button
										onClick={() => ''}
										type='button'
										className='btn btn-light'
									>
										<i className='fas fa-thumbs-down' />
									</button>

									<button
										onClick={() => ''}
										type='button'
										className='btn btn-light'
									>
										<i className='fas fa-edit'></i>
									</button>
									<button
										onClick={() => ''}
										type='button'
										className='btn btn-light'
									>
										<i className='fas fa-archive'></i>
									</button>
									<button
										onClick={() => ''}
										type='button'
										className='btn btn-danger'
									>
										<i className='fas fa-times' />
									</button>
								</div>
							</Fragment>
						</div>
					))}
				</div>
				<button
					// onClick={apihandlerprev}
					type='button'
					className='btn btn-light'
				>
					<i className='fas fa-long-arrow-alt-left'></i>
				</button>
				<button
					// onClick={apihandler}
					type='button'
					className='btn btn-light'
				>
					<i className='fas fa-long-arrow-alt-right'></i>
				</button>
			</div>
		</Fragment>
	);
};

Posts.propTypes = {
	getPosts: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
