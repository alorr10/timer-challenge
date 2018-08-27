import {
  LOGIN_USER_REQUESTED,
  LOGIN_USER_FULFILLED,
  LOGIN_USER_REJECTED,
  LOGOUT,
} from '../actions/types';

const INITIAL_STATE = {
  token: '',
  facebookId: '',
  name: '',
};

const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER_FULFILLED:
      return {
        ...state,
        token: action.payload.token,
        name: action.payload.name,
        facebookId: action.payload.id,
      };

    case LOGOUT:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default users;
