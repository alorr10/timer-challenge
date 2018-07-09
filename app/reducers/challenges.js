import { SET_CURRENT_CHALLENGE, RESET_CHALLENGE } from '../actions/types';

const INITIAL_STATE = {
  currentChallenge: {},
};

const challenges = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_CHALLENGE:
      return {
        ...state,
        currentChallenge: action.payload,
      };
    case RESET_CHALLENGE:
      return {
        ...state,
        currentChallenge: {},
      };

    default:
      return state;
  }
};

export default challenges;
