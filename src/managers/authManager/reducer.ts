import { AnyAction } from 'redux';

import * as types from 'src/managers/authManager/types';
import { ActionTypes } from 'src/managers/authManager/ActionTypes';

export type InitialState = {
  isAuthorized: boolean;
  userProfileInfo: types.UserProfileInfoType;
};

export const initialState: InitialState = {
  isAuthorized: false,
  userProfileInfo: {
    name: '',
    photo: '',
  },
};

export const authManagerReducer = (state = initialState, action: AnyAction): InitialState => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.SET_USER_INFO:
      return {
        ...state,
        userProfileInfo: {
          name: payload.name,
          photo: payload.photo,
        },
      };
    case ActionTypes.IS_AUTHORIZED:
      return {
        ...state,
        isAuthorized: payload,
      };
    default:
      return state;
  }
};
