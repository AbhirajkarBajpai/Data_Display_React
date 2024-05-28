import React, { useState } from 'react';
import Card from './components/Card';
import Search from './components/Search';
import beers from './data';
import './App.css';

const App = () => {
  const [searchedText, setSearchedText] = useState('');

  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(searchedText.toLowerCase())
  );

  return (
    <div className="App">
      <h1 style={{ color: '#E8DFCA' }}>Beer Cards</h1>
      <Search searchedText={searchedText} setSearchedText={setSearchedText} />
      <div className="card-container">
        {filteredBeers.map(beer => (
          <Card key={beer.id} beerData={beer} />
        ))}
      </div>
    </div>
  );
};

export default App;
