import React from 'react';
import { Track } from '../Track/Track';
import PropType from 'prop-types';
import './TrackList.css';


export class TrackList extends React.Component {
	render () {
		return (
			<div className="TrackList">
				{this.props.tracks.map(track => <Track key={track.id} track={track} isRemoval={true} />)}
			</div>
		);
	}
}

TrackList.propTypes = {
	tracks: PropType.arrayOf(PropType.shape({
		name: PropType.string.isRequired,
		artist: PropType.string.isRequired,
		album: PropType.string.isRequired,
		id: PropType.number.isRequired
	})).isRequired
};
