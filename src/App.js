import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import AlbumDisplay from './components/AlbumDisplay/AlbumDisplay';

function App() {
  
  const [usersArtist, setUsersArtist] = useState('');
  const [fetchedData, updateData] = useState({});

  //Fetching Data from Deezer API

  const options = {
    method: 'GET',
    url: `https://deezerdevs-deezer.p.rapidapi.com/search?q=${usersArtist}`,
    //params: {q: usersArtist},
    headers: {
      'X-RapidAPI-Key': 'aefccfdb5cmshe81d7fe93357fb7p1276a8jsn3c349238553a',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };

  async function main() {
    try {
      const response = await axios.request(options);
      updateData(response.data.data);
    } 
    catch (error) {
      console.log('error');
    }
  }


  // Handle Artist Submit
  let [inputValue, setInputValue] = useState('')
 
  const handleChange = (e) => {
    let artist = e.target.value;
    artist.toLowerCase().replaceAll(' ', '-');
    setInputValue(artist);
    setUsersArtist(inputValue)
  }

  const handleClick = () => {
    setInputValue('')
    if (usersArtist) {
        main()
    }

  }

  //Creating User's Playlist

  let playlist = [];
  for (let i=0;i<2;i++) {
    let randomTrack = Math.floor(Math.random()*25)
    playlist.push(fetchedData[randomTrack])
  }

  console.log(playlist)

  return (
    <div className="App">
      <div className="w-100 vh-100 bg-light m-0">
        <Navbar />
        <div className="w-50 text-center m-auto fs-1 fw-bold text-dark mt-5">Produce Your Album. <br /> Curate Your Sound.</div>
        <Search inputValue={inputValue}
                handleClick={handleClick}
                handleChange={handleChange}/>
        <div className="d-flex justify-content-center">
          <AlbumDisplay playlist={playlist}/>
        </div>
        <div className='mt-5'>
          <button className="btn btn-primary disabled">Generate Your Playlist</button>
        </div>
      </div>
    </div>
  );
}

export default App;
