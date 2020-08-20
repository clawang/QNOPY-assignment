/*global google*/

import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import customIcon from './pin.png';

function MapWidget(props) {

	const mapStyles = {
	  width: '400px',
	  height: '400px',
	};

	const mapStyle = [
	    {
	        "featureType": "administrative",
	        "elementType": "labels.text.fill",
	        "stylers": [
	            {
	                "color": "#444444"
	            }
	        ]
	    },
	    {
	        "featureType": "landscape",
	        "elementType": "all",
	        "stylers": [
	            {
	                "color": "#f2f2f2"
	            }
	        ]
	    },
	    {
	        "featureType": "landscape",
	        "elementType": "geometry",
	        "stylers": [
	            {
	                "color": "#efefef"
	            }
	        ]
	    },
	    {
	        "featureType": "poi",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "road",
	        "elementType": "all",
	        "stylers": [
	            {
	                "saturation": -100
	            },
	            {
	                "lightness": 45
	            }
	        ]
	    },
	    {
	        "featureType": "road.highway",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "simplified"
	            }
	        ]
	    },
	    {
	        "featureType": "road.highway",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "color": "#ffbd83"
	            },
	            {
	                "saturation": "-16"
	            },
	            {
	                "lightness": "48"
	            }
	        ]
	    },
	    {
	        "featureType": "road.arterial",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "simplified"
	            }
	        ]
	    },
	    {
	        "featureType": "road.arterial",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "visibility": "on"
	            },
	            {
	                "lightness": "31"
	            }
	        ]
	    },
	    {
	        "featureType": "road.arterial",
	        "elementType": "labels.icon",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "road.local",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "road.local",
	        "elementType": "labels",
	        "stylers": [
	            {
	                "visibility": "simplified"
	            }
	        ]
	    },
	    {
	        "featureType": "transit",
	        "elementType": "all",
	        "stylers": [
	            {
	                "visibility": "off"
	            }
	        ]
	    },
	    {
	        "featureType": "water",
	        "elementType": "all",
	        "stylers": [
	            {
	                "color": "#46bcec"
	            },
	            {
	                "visibility": "on"
	            }
	        ]
	    },
	    {
	        "featureType": "water",
	        "elementType": "geometry.fill",
	        "stylers": [
	            {
	                "color": "#8ad1c5"
	            },
	            {
	                "saturation": "-33"
	            },
	            {
	                "lightness": "55"
	            }
	        ]
	    }
	]

	const _mapLoaded = (mapProps, map) => {
	    map.setOptions({
	       styles: mapStyle
	    })
	 }

	const mapClick = (t, map, coord) => {
	    const { latLng } = coord;
	    const lat = latLng.lat();
	    const lng = latLng.lng();

	    props.setCoords({latitude: lat, longitude: lng});
  	}

  	const onMarkerDragEnd = (t, map, coord) => {
  		const { latLng } = coord;
	    const lat = latLng.lat();
	    const lng = latLng.lng();

  		props.setCoords({latitude: lat, longitude: lng});
  	}

  	const displayMarker = () => {
	    return props.photos.map((pic) => {
	    	return (
		    	<Marker position={{
			       lat: pic.latitude,
			       lng: pic.longitude
			    }} 
			    icon={{
			      url: pic.url,
			      scaledSize: new google.maps.Size(20,20)
			  	}} />
	  		);
	    });
	}

    return (
    	<div className="map-wrapper">
    		<div className='map-right'>
	        	<h4>Capture Coordinates</h4>
	        	<p>Latitude: {props.coords.latitude}</p>
	        	<p>Longitude: {props.coords.longitude}</p>
	        	<button onClick={props.btnClick}>Capture</button><button onClick={props.btnClick} className="cancel">Cancel</button>
	        </div>
	        <Map
	          google={props.google}
	          zoom={15}
	          style={mapStyles}
	          onClick={mapClick}
	          initialCenter={{ lat: props.coords.latitude, lng: props.coords.longitude}} 
	          onReady={(mapProps, map) => _mapLoaded(mapProps, map)}
	        >
	        	<Marker position={{
			       lat: props.coords.latitude,
			       lng: props.coords.longitude
			    }} 
			    draggable={true} 
	            onDragend={onMarkerDragEnd} 
			    icon={{
			      url: customIcon,
			      scaledSize: new google.maps.Size(24,33)
			  	}} />
	        	{displayMarker()}
	        </Map>
        </div>
    );

}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`
})(MapWidget);