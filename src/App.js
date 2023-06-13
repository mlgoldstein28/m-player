import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <div className="w-100 vh-100 bg-light m-0">
        <Navbar />
        <div className="w-50 text-center m-auto fs-1 fw-bold text-dark mt-5">Produce Your Album. <br /> Create Your Sound.</div>
        <Search />
      </div>
    </div>
  );
}

export default App;
