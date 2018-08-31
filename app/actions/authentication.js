import { LOGIN_USER_REQUESTED, LOGIN_USER_FULFILLED, LOGIN_USER_REJECTED, LOGOUT } from './types';
import { Facebook } from 'expo';
import { persistor } from '../store';

export const login = () => async (dispatch, getState) => {
  dispatch(loginUserRequested());

  const { type, token, expires } = await Facebook.logInWithReadPermissionsAsync(
    '2026561397673936',
    {
      permissions: ['public_profile'],
    }
  );
  if (type === 'success') {
    const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
    const { id, name } = await response.json();
    dispatch(loginUserFulfilled({ token, id, name }));
    createOrUpdateUser(id, name);
  } else {
    dispatch(loginUserRejected());
  }
};

const loginUserRequested = () => {
  return {
    type: LOGIN_USER_REQUESTED,
  };
};

const loginUserFulfilled = payload => {
  return {
    type: LOGIN_USER_FULFILLED,
    payload,
  };
};

const loginUserRejected = () => {
  return {
    type: LOGIN_USER_REJECTED,
  };
};

export const logout = () => dispatch => {
  persistor.purge();
  dispatch(logoutUser());
};
logoutUser = () => ({ type: LOGOUT });


