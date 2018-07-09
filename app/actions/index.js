import { TOGGLE_CHALLENGE_CONTAINER, SET_CURRENT_CHALLENGE, RESET_CHALLENGE } from './types';

export const toggleChallengeContainer = isOpen => {
  return {
    type: TOGGLE_CHALLENGE_CONTAINER,
    payload: isOpen,
  };
};

export const setCurrentChallenge = challenge => {
  return {
    type: SET_CURRENT_CHALLENGE,
    payload: challenge,
  };
};

export const resetChallenge = () => {
  return {
    type: RESET_CHALLENGE,
  };
};
