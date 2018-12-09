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
} from './types';

export const setTotalLength = (duration) => {
	return ({
		type: SET_TOTAL_LENGTH,
		payload: duration
	});
}

export const onSlidingStart = () => {
	return ({
		type: ON_SLIDING_START
	});
}

export const onCurrentTimeChange = (time) => {
	return ({
		type: ON_CURRENT_TIME_CHANGE,
		payload: time
	});
}

export const onRepeatPress = () => (dispatch, getState) => {
	const { globalReducer } = getState();
	dispatch ({
		type: ON_REPEAT_PRESS,
		payload: globalReducer.repeatOn
	});
}

export const onShufflePress = () => (dispatch, getState) => {
	const { globalReducer } = getState();
	dispatch ({
		type: ON_SHUFFLE_PRESS,
		payload: globalReducer.shuffleOn
	});
}

export const onPlayPress = () => {
	return ({
		type: ON_PLAY_PRESS
	});
}

export const onPausePress = () => {
	return ({
		type: ON_PAUSE_PRESS,
	});
}

export const isChangingToggle = () => (dispatch, getState) => {
	const { globalReducer } = getState();
	dispatch ({ 
		type: ON_CHANGING_TOGGLE,
		payload: globalReducer.isChanging
	});
}

export const onNextPress = () => (dispatch, getState) => {
	const { globalReducer } = getState();
	dispatch ({
		type: ON_NEXT_PRESS,
		payload: globalReducer.selectedTrack
	});
}

export const changeCurrentPosition = (position) => {
	return ({
		type: CHANGE_CURRENT_POSITION,
		payload: position
	})
}

export const onBackPress = () => (dispatch, getState) => {
	const { globalReducer } = getState();
	dispatch ({
		type: ON_BACK_PRESS,
		payload: globalReducer.selectedTrack
	});
}

export const onSelectedTrackChange = (random) => {
	return ({
		type: SELECTED_TRACK_CHANGE,
		payload: random
	});
}
