import { Fragment } from 'react';
import './App.css';
import Landing from './components/layout/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
// import BlogPostForm from './components/posts/BlogPostsForm';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Routes>
					{/* <Route exact path='/' component={Landing} /> */}
					<Route exact path='/' component={Landing} />
					<Route component={Routes} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
