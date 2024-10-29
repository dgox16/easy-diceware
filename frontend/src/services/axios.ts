import axios from "axios";

const instance = axios.create({
	baseURL: "https://api-easy-diceware.up.railway.app",
	withCredentials: true,
	withXSRFToken: true,
});

export default instance;
