import React from 'react';
import PropType from 'prop-types';
import './Track.css';

export class Track extends React.Component {
	constructor(props) {
		super(props);

		this.addTrack = this.addTrack.bind(this);
		this.removeTrack = this.removeTrack.bind(this);
	}

	renderAction (isRemoval) {
		return isRemoval ? <a className="Track-action" onClick={this.removeTrack}>-</a> : <a className="Track-action" onClick={this.addTrack}>+</a>;
	}

	addTrack() {
		this.props.onAdd(this.props.track);
	}

	removeTrack() {
		this.props.onRemove(this.props.track);
	}

	render () {
		return (
			<div className="Track">
				<div className="Track-information">
					<h3>{this.props.track.name}</h3>
					<p>{this.props.track.artist} | {this.props.track.album}</p>
				</div>
				{this.renderAction(this.props.isRemoval)}
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
		id: PropType.string.isRequired,
		uri: PropType.string.isRequired
	}),
	onAdd: PropType.func,
	onRemove: PropType.func
};
