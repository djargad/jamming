import React from 'react';
import PropType from 'prop-types';
import './SearchBar.css';

export class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.search = this.search.bind(this);
		this.handleTermChange = this.handleTermChange.bind(this);
	}

	search() {
		this.props.onSearch(this.state.term);
	}

	handleTermChange(ev) {
		this.setState({ term: ev.target.value });
	}

	render() {
		return (
			<div className="SearchBar">
				<input
					placeholder="Enter A Song, Album, or Artist"
					onChange={this.handleTermChange}/>
				<a onClick={this.search}>SEARCH</a>
			</div>
		);
	}
}

SearchBar.propTypes = {
	onSearch: PropType.func.isRequired
};
