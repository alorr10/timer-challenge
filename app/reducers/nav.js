import { TOGGLE_CHALLENGE_CONTAINER } from '../actions/types';

const INITIAL_STATE = {
  challengeContainerIsOpen: false,
};

const nav = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CHALLENGE_CONTAINER:
      return {
        ...state,
        challengeContainerIsOpen: action.payload,
      };

    default:
      return state;
  }
};

export default nav;
