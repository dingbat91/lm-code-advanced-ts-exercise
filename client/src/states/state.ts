import { states } from "./states";

export class State {
	#state: any = states.MENU;

	get() {
		return this.#state;
	}

	set(newState: String) {
		this.#state = newState;
	}
}
