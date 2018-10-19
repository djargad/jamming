import React from 'react';
import PropType from 'prop-types';
import { TrackList } from '../TrackList/TrackList';
import './Playlist.css';


export class Playlist extends React.Component {
	render () {
		return (
			<div className="Playlist">
				<input defaultValue={this.props.playlistName}/>
				<TrackList tracks={this.props.playlistTracks}/>
				<a className="Playlist-save">SAVE TO SPOTIFY</a>
			</div>
		);
	}
}

Playlist.propTypes = {
	playlistName: PropType.string.isRequired,
	playlistTracks: PropType.arrayOf(PropType.shape({
		name: PropType.string.isRequired,
		artist: PropType.string.isRequired,
		album: PropType.string.isRequired,
		id: PropType.number.isRequired
	})).isRequired
};
