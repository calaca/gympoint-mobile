import constants from './constants';

export function signInRequest(id) {
  return {
    type: constants.authSignInRequest,
    payload: {
      id,
    },
  };
}

export function signInSuccess(id) {
  return {
    type: constants.authSignInSuccess,
    payload: {
      id,
    },
  };
}

export function signFailure() {
  return {
    type: constants.authSignFailure,
  };
}
