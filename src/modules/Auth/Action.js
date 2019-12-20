import * as api from './Api'

const SAVE_TOKEN_TO_STATE = 'SAVE_TOKEN_TO_STATE';

export const saveTokenToState = (token) => {
  return {
    type: SAVE_TOKEN_TO_STATE,
    payload: token
  }
};

export const getTokenAction = () => (dispatch) => {
  return api.getTokenRequest()
    .then((data) => {
      dispatch(saveTokenToState(data));
    })
};
