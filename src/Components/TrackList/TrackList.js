import React from 'react';
import { Track } from '../Track/Track';
import './TrackList.css';


export class TrackList extends React.Component {
	render () {
		return (
			<div className="TrackList">
				<Track isRemoval/>
				<Track isRemoval/>
				<Track isRemoval={false}/>
			</div>
		);
	}
}
