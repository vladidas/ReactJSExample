import * as actions from './Action'

export const initialState = {
  token: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SAVE_TOKEN_TO_STATE:
      return {...state, token: action.payload};

    default:
      return state
  }
};
