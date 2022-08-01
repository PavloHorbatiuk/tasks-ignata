import { initialPeople, Person } from '../HW8';

interface ActionSort {
	type: 'sort';
	payload: string;
}
interface ActionDown {
	type: 'down';
	payload: string;
}
interface ActionCheck {
	type: 'check';
	payload: string;
}
type Action = ActionSort | ActionCheck | ActionDown;
export const homeWorkReducer = (
	state: Person[] = initialPeople,
	action: Action
): Person[] => {
	// need to fix any
	switch (action.type) {
		case 'sort': {
			const copyState = { ...state };
			// need to fix
			copyState.sort((a, b) => (action.payload ? a.age - b.age : a.age));
			return copyState;
		}
		case 'down': {
			// need to fix
			return state.sort((a, b) => (action.payload ? b.age - a.age : b.age));
		}
		case 'check': {
			// need to fix
			return state;
		}
		default:
			return state;
	}
};
