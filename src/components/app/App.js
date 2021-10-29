import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import { SearchBar } from "../searchBar/SearchBar";
import { SearchResults } from "../searchResults/SearchResults";
import { Playlist } from "../playlist/Playlist";

class App extends React.Component {
  render() {
    return ( 
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div class="App">
          <SearchBar />
          <div class="App-playlist">          
            <SearchResults />
            <Playlist />
          </div>
        </div>
      </div>
    )
  }
}

render()

export default App;
