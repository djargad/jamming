let accessToken = null;
const clientId = '4eadf71e83ca442aa1a2c720980d3244';
const redirectUri = 'http://localhost:3000/';
const spotifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}`;

const Spotify = {
	getAccessToken () {
		if (accessToken !== null) {
			return accessToken;
		}

		if (window.location.hash !== '') {
			const accessTokenMatch = window.location.hash.match(/access_token=([^&]*)/);
			const expiresInMatch = window.location.hash.match(/expires_in=([^&]*)/);

			if (accessTokenMatch !== null && expiresInMatch !== null) {
				[, accessToken] = accessTokenMatch;
				const [, expiresIn] = expiresInMatch;

				window.setTimeout(() => accessToken = '', expiresIn * 1000);
				window.history.pushState('Access Token', null, '/');

				return accessToken;
			}
			window.location = spotifyAuthUrl;

			return '';
		}
		window.location = spotifyAuthUrl;

		return '';
	},

	async search(term) {
		// Check if we need a new token
		if (this.getAccessToken() === '') {
			return [];
		}

		try {
			const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${this._normalizeSearchTerm(term)}`, {
				headers: { Authorization: `Bearer ${accessToken}` }
			});

			if (response.ok) {
				const jsonResponse = await response.json();
				const tracksArr = [];
				jsonResponse.tracks.items.forEach(track => {
					tracksArr.push({
						id: track.id,
						name: track.name,
						artist: track.artists[0].name,
						album: track.album.name,
						uri: track.uri
					});
				});

				return tracksArr;
			}

			throw new Error('Request Failed!');

		} catch (error) {
			return [];
		}
	},

	_normalizeSearchTerm (term) {
		// Perform specific actions on the search term
		// before using it
		return term.replace(/ /g, '%20');
	}
};

export default Spotify;
