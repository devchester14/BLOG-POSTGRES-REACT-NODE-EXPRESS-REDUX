import { Fragment } from 'react';
import './App.css';
import Landing from './components/layout/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Posts from './components/post/Posts';
import PostForm from './components/post/PostForm';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path='/' element={<Landing />} />
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/register' element={<Register />} />
					<Route exact path='/posts' element={<Posts />} />
					<Route exact path='/createpost' element={<PostForm />} />
					<Route element={Routes} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
