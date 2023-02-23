import { baseUrl } from "./base_url";


export async function fetchAllPosts() {
	try {
		const result:Response = await fetch(baseUrl + "/api/posts/all");
		const posts:any = await result.json();
		return posts;
	} catch {
		return [];
	}
}
