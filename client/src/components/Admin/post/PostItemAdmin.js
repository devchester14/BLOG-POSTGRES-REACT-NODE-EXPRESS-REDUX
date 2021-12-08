import React, { Fragment, useEffect } from 'react';
import { Link, useParams, params } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../../actions/post';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import { getPost } from '../../../actions/post';

const PostItemAdmin = ({
	getPost,
	post: { posts },
	posts: { postid, user_id, title, content, tags, postStatus, created_at },
	addLike,
	removeLike,
	deletePost,
	showActions,
	match,
}) => {
	useEffect(() => {
		getPost(posts.postid);
	}, [getPost, posts.postid]);

	return (
		<Fragment>
			<div className='container'>
				<div>
					<Link to='/admin/posts' className='btn'>
						Back To Posts
					</Link>
					<div>
						<br />
					</div>
				</div>
				<div className='bg-white '>
					{/* <div className='post bg-white p-1 my-1 '> */}

					<Fragment>
						<div></div>
						<div>
							<h1>{title}</h1>
							<p className='my-1'>{content}</p>
							<p className='post-date'>
								Posted on:
								{created_at}
							</p>
							<div>
								<br />
							</div>
							<button
								onClick={!showActions}
								type='button'
								className='btn btn-light'
							>
								<i className='fas fa-comments'></i>
							</button>
							<button
								onClick={() => addLike('')}
								type='button'
								className='btn btn-light'
							>
								<i className='fas fa-thumbs-up' />{' '}
							</button>
							<button
								onClick={() => removeLike('')}
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
								<i className='fas fa-archive'></i>
							</button>
							<button
								onClick={() => deletePost(postid)}
								type='button'
								className='btn btn-danger'
							>
								<i className='fas fa-times' />
							</button>
							<div>
								<br />
							</div>
						</div>
					</Fragment>
					<br />
				</div>
			</div>
			<div className='container'>{showActions ? <CommentForm /> : null} </div>{' '}
			<div className='container'>
				<CommentItem />
			</div>
		</Fragment>
	);
};

PostItemAdmin.defaultProps = {
	showActions: true,
};

PostItemAdmin.propTypes = {
	auth: PropTypes.object.isRequired,
	post: PropTypes.object.isRequired,
	postid: PropTypes.object.isRequired,
	getPost: PropTypes.func.isRequired,
	addLike: PropTypes.func.isRequired,
	removeLike: PropTypes.func.isRequired,
	deletePost: PropTypes.func.isRequired,
	showActions: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	post: state.post,
});

export default connect(mapStateToProps, {
	addLike,
	removeLike,
	deletePost,
	getPost,
})(PostItemAdmin);
