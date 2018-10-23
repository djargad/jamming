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
			const accessTokenMatch = window.location.hash.match(/access_token=[^&]*/);
			const expiresInMatch = window.location.hash.match(/expires_in=[^&]*/);

			if (accessTokenMatch !== null && expiresInMatch !== null) {
				[, accessToken] = accessTokenMatch;
				const [, expiresIn] = expiresInMatch;

				window.setTimeout(() => accessToken = '', expiresIn * 1000);
				window.history.pushState('Access Token', null, '/');

				return accessToken;
			}
			window.location = spotifyAuthUrl;
		}
		window.location = spotifyAuthUrl;
	}
};

export default Spotify;
