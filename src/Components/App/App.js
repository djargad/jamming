import React, { Component } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        {
          name: 'Name1',
          artist: 'Artist1',
          album: 'Album1',
          id: '1'
        },
        {
          name: 'Name2',
          artist: 'Artist2',
          album: 'Album2',
          id: '2'
        }
      ],
      playlistName: 'My Playlist',
      playlistTracks: [
        {
          name: 'Play1',
          artist: 'Artist1',
          album: 'Album1',
          id: '3'
        },
        {
          name: 'Play2',
          artist: 'Artist2',
          album: 'Album2',
          id: '4'
        }
      ]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack (track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    this.setState(prevState => {
      return { playlistTracks: [
        ...prevState.playlistTracks,
        track
      ] };
    });
  }

  removeTrack(track) {
    this.setState(prevState => {
      return { playlistTracks: prevState.playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id) };
    });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    const uri = this.state.playlistTracks.map(track => `spotify:track:${track.id}`);
  }

  search(term) {
    console.log(`Term is: ${term}`);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}/>
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
