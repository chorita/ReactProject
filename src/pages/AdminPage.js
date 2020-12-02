import React from 'react';
import {
	Switch,
	Link,
	Route,
	useRouteMatch
} from 'react-router-dom';
import AdminPostsPage from './AdminPostsPage';
import AdminCreatePostPage from './AdminCreatePostPage';
import AdminEditPostPage from './AdminEditPostPage';

// Here need to think on proper props format to pass from App to AdminPostsPage
// Need to write proper CSS for sidebar and content columns.
const AdminPage = ({ posts, removePost, editPost, createPost }) => {
	let { path, url } = useRouteMatch();
	const herokuTest = 'itsHerokuTest';
	return ( 
		<main className='admin-page'>
			<div className='admin-sidebar'>
				<ul>
					<li>
						<Link to={`${url}`}>Main Admin</Link>
					</li>
					<li>
						<Link to={`${url}/posts`}>Articles</Link>
					</li>
					<li>
						<Link to={`${url}/create-post`}>Create Article</Link>
					</li>
					
				</ul>
			</div>

			<Switch>
				<Route exact path={path}>
					<div className='admin-content'>
						<h3>Welcome to Admin Page</h3>
						<p>
							Here you would be able to:
						</p>
						<ul>
							<li>View existing article</li>
							<li>Create new article</li>
							<li>Edit article</li>
							<li>Delete article</li>
						</ul>
					</div>
				</Route>
				<Route path={`${path}/posts`}>
					<AdminPostsPage posts={posts} removePost={removePost}  />
				</Route>
				<Route path={`${path}/create-post`}>
					<AdminCreatePostPage createPost={createPost} />
				</Route>
				<Route path={`${path}/edit-post/:id`} >
					<AdminEditPostPage editPost={editPost} />
				</Route>
			</Switch>
		</main>
	);
}

export default AdminPage;