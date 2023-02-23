import { baseUrl } from "./base_url";

export async function fetchPost(id: string) {
	try {
		const result: Response = await fetch(baseUrl + "/api/posts/" + id);
		const post: any = await result.json();
		return post;
	} catch {
		return [];
	}
}
