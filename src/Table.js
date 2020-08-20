import React from 'react';

function Table(props) {

	const arrayToTable = () => {
		if(props.photos.length > 0) {
			return props.photos.map((photo, index) => {
				return (
	    			<tr key={index}>
	    				<td><img src={photo.url} alt={photo.title} /></td>
	    				<td>{photo.title}</td>
	    				<td>{photo.created} <br/> By: {photo.creator}</td>
	    				<td>{photo.notes}</td>
	    			</tr>
				);
			})
		} else {
			return <p>No photos within 100 feet.</p>;
		}
	}

	return (
		<div className="pictures">
			<h2>All Pictures</h2>
			<p style={{textAlign: 'center'}}><a href="#search" onClick={props.openSearch}>Advanced Search</a></p>
			<table>
				<thead>
					<tr>
						<th>Thumbnail</th>
						<th>Title</th>
						<th>Created</th>
						<th>Notes</th>
					</tr>
				</thead>
				<tbody>
					{arrayToTable()}
				</tbody>
			</table>
		</div>
	);
}

export default Table;
