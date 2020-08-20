import React, { useState } from 'react';
import MapWidget from './MapWidget';

function Search(props) {

	const [appState, setAppState] = useState({
		map: false
	})

	const toggleMap = (evt) => {
		let state = appState.map;
		setAppState({map: !state});
	}

	return (
		<div className="search">
			<p id="close" onClick={props.close}>X</p>
			<h2>Advanced Search</h2>
			{appState.map ?
				<MapWidget coords={props.coords} setCoords={props.setCoords} btnClick={toggleMap} photos={props.photos}/> :
				<div>
			    	<p>Add Location to Search</p>
			    	<input readOnly type="text" value={props.coords.latitude + ", " + props.coords.longitude} /><button onClick={toggleMap}>Get</button><br/>
			    	<button className="submit" onClick={props.sortPhotos}>Search</button>
		    	</div>
		    }
		</div>
	);
}

export default Search;
