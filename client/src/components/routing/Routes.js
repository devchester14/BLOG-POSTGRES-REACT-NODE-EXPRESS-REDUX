import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from '../auth/Login';

import Landing from '../layout/Landing';
import PostForm from '../post/PostForm';
import Posts from '../post/Posts';
import { useParams } from 'react-router';
import PostItem from '../post/PostItem';

const Routes = () => {
	const { postId } = useParams();
	return (
		<section className='container'>
			{/* <Alert /> */}
			<Routes>
				<Route exact path='/' element={<Landing />} />
				<Route exact path='/login' celement={<Login />} />
				<Route exact path='/register' element={<Register />} />
				<Route exact path='/posts' element={<Posts />} />
				<Route exact path='/createpost' element={<PostForm />} />
				<Route exact path='/postItem/:postid' element={<PostItem />} />
			</Routes>
		</section>
	);
};

export default Routes;
