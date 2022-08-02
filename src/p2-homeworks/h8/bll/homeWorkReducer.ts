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
	payload: number;
}
type Action = ActionSort | ActionCheck | ActionDown;
export const homeWorkReducer = (
	state: Person[] = initialPeople,
	action: Action
): Person[] => {
	// need to fix any
	switch (action.type) {
		case 'sort': {
			// need to fix
			return [...state].sort((a, b) => a.name.localeCompare(b.name));
		}
		case 'down': {
			// need to fix
			return [...state].sort((a, b) => b.name.localeCompare(a.name));
		}
		case 'check': {
			// need to fix
			return [...state].filter(f => f.age > action.payload);
		}
		default:
			return state;
	}
};
