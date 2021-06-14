import axios from "axios";

const KEY = "AIzaSyBCRD0zOlA0qXiycMNLirN3Vq5fMYYsnl8";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
    type: 'video',
		maxResults: 5,
		key: KEY,
	},
});
