import React from 'react';
import PropType from 'prop-types';
import './Track.css';

export class Track extends React.Component {
	renderAction (isRemoval) {
		return isRemoval ? '-' : '+';
	}

	render () {
		return (
			<div className="Track">
				<div className="Track-information">
					<h3>{this.props.track.name}</h3>
					<p>{this.props.track.artist} | {this.props.track.album}</p>
				</div>
				<a className="Track-action">{this.renderAction(this.props.isRemoval)}</a>
			</div>
		);
	}
}

Track.propTypes = {
	isRemoval: PropType.bool.isRequired,
	track: PropType.shape({
		name: PropType.string.isRequired,
		artist: PropType.string.isRequired,
		album: PropType.string.isRequired,
		id: PropType.number.isRequired
	})
};
