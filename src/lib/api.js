import { API_URL } from "@env";

export const getPosts = async (route) => {
	try {
		const response = await fetch(API_URL + route);
		const json = await response.json();
		return json;
	} catch (error) {
		console.error(error);
		return null;
	}
};
