import React, { useEffect, useState } from 'react';
import './App.scss';
import Search from './Search';
import Table from './Table';
import csvJSON from './loadData';

function App() {
  const [coords, setCoords] = useState({
    latitude: 40.731143,
    longitude: -73.997849
  });

  const [appState, setAppState] = useState({
    photos: [],
    filteredPhotos: []
  });

  const [searchState, setSearchState] = useState({
    search: false,
  });

  useEffect(() => {
      const getPhotos = async () => {
        const response = await csvJSON();
        setAppState({photos: response, filteredPhotos: response});
      };
      getPhotos();
  }, [setAppState]);

  const sortPhotos = () => {
    setSearchState({search: false});
    let arr = appState.photos;
    arr.sort(compareDistance);
    let newArr = arr.filter((photo) => {
      let dist = calculateDistance(photo.latitude, photo.longitude);
      console.log(dist);
      return (dist < 100) ? true : false;
    });
    console.log(newArr);
    setAppState({photos: arr, filteredPhotos: newArr});
  }

  const compareDistance = (p1, p2) => {
    return calculateDistance(p1.latitude, p1.longitude) - calculateDistance(p2.latitude, p2.longitude);
  }

  const calculateDistance = (lat, long) => {
    const lat1 = coords.latitude;
    const long1 = coords.longitude;

    let x = Math.abs(lat1 - lat);
    let y = Math.abs(long1 -long);
    return Math.sqrt(x*x + y*y) * 364000;
  }

  const openSearch = (evt) => {
    setSearchState({search: true});
  }

  return (
    <div className="App">
      {searchState.search ?
        <Search coords={coords} setCoords={setCoords} sortPhotos={sortPhotos} photos={appState.photos} close={() => {setSearchState({search: false})}}/>
        :
        <div></div>
      }
      <Table coords={coords} setCoords={setCoords} photos={appState.filteredPhotos} openSearch={openSearch} />
    </div>
  );
}

export default App;
