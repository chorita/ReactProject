import React from 'react';
import { 
	Link,
	useRouteMatch,
	useLocation,
	useHistory
} from 'react-router-dom';

// Here need to create Table component.
const AdminPostsPage = ({posts, removePost}) => {
	const { path, url } = useRouteMatch();
	let location = useLocation();

	const history = useHistory();

	const postsRow = posts.map((post, index) => {
		return (
			<tr key={index} id={index}>
				<td><Link to={`edit-post/${post.id}`}>{post.title}</Link></td>
				<td>{post.body}</td>
				<td>Generic date: 20.20.20</td>
				<td>
					<button className="btn-action" onClick={() => removePost(post.id)}>Delete</button>
					<button className="btn-action" onClick={() => history.push(`edit-post/${post.id}`)}>Edit</button>	
				</td>
			</tr>
		);
	});
	console.log('Posts Row', postsRow);
	return (
		<div className="admin-content border">
			<div className="">
				<div className="pre-table">
					<p>
					Here you can view list of articles and apply different actions to each of the articles.
					</p>
				</div>
				<table>
					<thead>
						<tr>
							<th>Article Title</th>
							<th>Excerpt</th>
							<th>Date Created</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{postsRow}
					</tbody>
				</table>
			</div>
		</div>


	);
}

export default AdminPostsPage;