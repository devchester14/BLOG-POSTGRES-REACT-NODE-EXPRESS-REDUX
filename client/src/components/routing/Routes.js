import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from '../User/auth/Login';

import Landing from '../User/layout/Landing';
import PostForm from '../postAndComment/PostForm';
import Posts from '../postAndComment/Posts';
import { useParams } from 'react-router';
import PostItem from '../postAndComment/PostItem';

const Routes = () => {
	const { postId } = useParams();
	return (
		<section className='container'>
			{/* <Alert /> */}
			<Routes>
				<Route exact path='/' element={<Landing />} />
				<Route exact path='/user/login' celement={<Login />} />
				<Route exact path='/user/register' element={<Register />} />
				<Route exact path='/admin/register' element={<AdminRegister />} />
				<Route exact path='/posts' element={<Posts />} />
				<Route exact path='/createpost' element={<PostForm />} />
				<Route exact path='/postItem/:postid' element={<PostItem />} />
			</Routes>
		</section>
	);
};

export default Routes;
