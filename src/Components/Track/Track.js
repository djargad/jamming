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
					<h3>Track Name</h3>
					<p>Artist | Album</p>
				</div>
				<a className="Track-action">{this.renderAction(this.props.isRemoval)}</a>
			</div>
		);
	}
}

Track.propTypes = {
	isRemoval: PropType.bool.isRequired
};
