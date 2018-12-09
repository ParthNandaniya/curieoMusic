import {
	SET_TOTAL_LENGTH,
	ON_SLIDING_START,
	ON_CURRENT_TIME_CHANGE,
	ON_REPEAT_PRESS,
	ON_SHUFFLE_PRESS,
	ON_PLAY_PRESS,
	ON_PAUSE_PRESS,
	ON_CHANGING_TOGGLE,
	ON_NEXT_PRESS,
	CHANGE_CURRENT_POSITION,
	ON_BACK_PRESS,
	SELECTED_TRACK_CHANGE
} from '../actions/types';

const INITIAL_STATE = {
	selectedTrack: 0,
	paused: true,
	currentPosition: 0,
    totalLength: 1,
	repeatOn: false,
    shuffleOn: false,
    isChanging: false,
    trackList: []
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_TOTAL_LENGTH:
			return { ...state, totalLength: action.payload };
		case ON_SLIDING_START:
			return { ...state, paused: true };
		case ON_CURRENT_TIME_CHANGE:
			return { ...state, currentPosition: action.payload, paused: false };
		case ON_REPEAT_PRESS:
			return { ...state, repeatOn: !action.payload };
		case ON_SHUFFLE_PRESS:
			return { ...state, shuffleOn: !action.payload };
		case ON_PLAY_PRESS:
			return { ...state, paused: false };
		case ON_PAUSE_PRESS:
			return { ...state, paused: true };
		case ON_CHANGING_TOGGLE:
			return { ...state, isChanging: !action.payload };
		case ON_NEXT_PRESS:
			return { 
				...state, 
				isChanging: false, 
				paused: false, 
				currentPosition: 0,
				selectedTrack: action.payload + 1,
				totalLength: 1
			};
		case CHANGE_CURRENT_POSITION:
			return { ...state, currentPosition: action.payload };
		case ON_BACK_PRESS:
			return {
				...state,
				isChanging: false,
				pause: false,
				currentPosition: 0,
				selectedTrack: action.payload - 1,
				totalLength: 1
			}
		case SELECTED_TRACK_CHANGE:
			return { ...state, selectedTrack: action.payload };
		default: 
			return state;
	}
}
