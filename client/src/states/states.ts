

interface States{
MENU: String;
SEND_MESSAGE: String;
SHOW_POSTS: String;
SHOW_USERS: String;
BROWSE_POSTS: String;
ADD_USER: String;
UNKNOWN: String;
}



export const states:States = {
	MENU: "MENU",

	SEND_MESSAGE: "SEND_MESSAGE",

	SHOW_POSTS: "SHOW_POSTS",
	SHOW_USERS: "SHOW_USERS",
	BROWSE_POSTS: "BROWSE_POSTS",

	ADD_USER: "ADD_USER",

	UNKNOWN: "UNKNOWN",
};
