import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Register from '../auth/Register';
// import Login from '../auth/Login';
// import BlogPostForm from '../posts/BlogPostsForm';
// import Posts from '../posts/Posts';
// import Alert from '../layout/Alert';
// import Dashboard from '../dashboard/Dashboard';
// import ProfileForm from '../profile-forms/ProfileForm';
// import AddExperience from '../profile-forms/AddExperience';
// import AddEducation from '../profile-forms/AddEducation';
// import Profiles from '../profiles/Profiles';
// import Profile from '../profile/Profile';
// import Posts from '../posts/Posts';
// import PostItem from '../posts/PostItem';
// import CommentForm from '../post/CommentForm';
// import Post from '../post/Post';
// import NotFound from '../layout/NotFound';
// import PrivateRoute from '../routing/PrivateRoute';

const Routes = (props) => {
	return (
		<section className='container'>
			{/* <Alert /> */}
			<Switch>
				{/* <Route exact path='/api/posts' component={Posts} />
				<Route exact path='/register' component={Register} />
				// <Route exact path='/login' component={Login} /> */}
				{/* // <Route exact path='/createpost' component={BlogPostForm} /> */}
				{/* // <Route exact path='/post/:postId' component={PostItem} />
				// <Route exact path='/commentForm' component={CommentForm} /> */}
				{/* <Route exact path='/posts' component={Posts} /> */}
				{/* <Route exact path='/profiles' component={Profiles} />
				<Route exact path='/profile/:id' component={Profile} />
				<PrivateRoute exact path='/dashboard' component={Dashboard} />
				<PrivateRoute exact path='/create-profile' component={ProfileForm} />
				<PrivateRoute exact path='/edit-profile' component={ProfileForm} />
				<PrivateRoute exact path='/add-experience' component={AddExperience} />
				<PrivateRoute exact path='/add-education' component={AddEducation} />
				<PrivateRoute exact path='/posts' component={Posts} />
				<PrivateRoute exact path='/posts/:id' component={Post} /> */}
				{/* <Route component={NotFound} /> */}
			</Switch>
		</section>
	);
};

export default Routes;
