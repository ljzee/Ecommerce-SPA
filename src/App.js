import React from 'react';
import './App.css';

import Filter from './components/filter/Filter';
import ShelfContainer from './components/shelf/ShelfContainer'

function App() {
  return (
    <div className="App">
    <h1>Genteikits 20000</h1>
    <Filter/>
    <ShelfContainer/>
    </div>
  );
}

export default App;
