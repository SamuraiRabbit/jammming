import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import { SearchBar } from "../searchBar/SearchBar";
import { SearchResults } from "../searchResults/SearchResults";
import { Playlist } from "../playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [{ name: "name1", artist: "artist1", album: "album1", id: 1 }
      , { name: "name2", artist: "artist2", album: "album2", id: 2 }
      , { name: "name3", artist: "artist3", album: "album3", id: 3 }],

      playlistName: "Test Playlist",

      playlistTracks: [{ name: "plName1", artist: "plArtist1", album: "plAlbum1", id: 4 }
      , { name: "plname2", artist: "plartist2", album: "plalbum2", id: 5 }
      , { name: "plname3", artist: "plartist3", album: "plalbum3", id: 6 }]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      tracks.push(track);
      this.setState({playlistTracks: tracks});
    }
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    
    tracks = tracks.filter(savedTrack => savedTrack.id  !== track.id);

    this.setState({playlistTracks: tracks});
  }

  render() {
    return ( 
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div class="App">
          <SearchBar />
          <div class="App-playlist">          
            <SearchResults searchResults = {this.state.searchResults}
                           onAdd = {this.addTrack} />
            <Playlist playlistName = {this.state.playlistName}
                      playlistTracks = {this.state.playlistTracks}
                      onRemove = {this.removeTrack}
                      onNameChange = {this.updatePlaylistName} />
          </div>
        </div>
      </div>
    )
  }
}

render()

export default App;
