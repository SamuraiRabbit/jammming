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
      searchResults: [{ name: "name1", artist: "artist1", album: "album1", id: 1, uri: 1 }
      , { name: "name2", artist: "artist2", album: "album2", id: 2, uri: 2 }
      , { name: "name3", artist: "artist3", album: "album3", id: 3, uri: 3 }],

      playlistName: "Test Playlist",

      playlistTracks: [{ name: "plName1", artist: "plArtist1", album: "plAlbum1", id: 4, uri: 4 }
      , { name: "plname2", artist: "plartist2", album: "plalbum2", id: 5, uri: 5 }
      , { name: "plname3", artist: "plartist3", album: "plalbum3", id: 6, uri: 6 }]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
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

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    
    tracks = tracks.filter(savedTrack => savedTrack.id  !== track.id);
    this.setState({playlistTracks: tracks});
  }
  
  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    console.log("Save playlist");
  
    const trackURIs = this.state.playlistTracks.map(track => track.uri);

    console.log(trackURIs);

  }

  search(term) {
    console.log(term);
  }

  render() {
    return ( 
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div class="App">
          <SearchBar onSearch = {this.search}/>
          <div class="App-playlist">          
            <SearchResults searchResults = {this.state.searchResults}
                           onAdd = {this.addTrack} />
            <Playlist playlistName = {this.state.playlistName}
                      playlistTracks = {this.state.playlistTracks}
                      onRemove = {this.removeTrack}
                      onNameChange = {this.updatePlaylistName}
                      onSave = {this.savePlaylist} />
          </div>
        </div>
      </div>
    )
  }
}

render()

export default App;
