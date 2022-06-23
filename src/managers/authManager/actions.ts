import { ActionTypes } from 'src/managers/authManager/ActionTypes';
import * as types from 'src/managers/authManager/types';

export type logOutType = {
  type: ActionTypes.LOG_OUT;
};
export type vkOAuthTokenType = {
  type: ActionTypes.VK_OAUTH_TOKEN;
  payload: string;
};
export type isAuthorizedType = {
  type: ActionTypes.IS_AUTHORIZED;
  payload: boolean;
};
export type setUserInfoType<T> = {
  type: ActionTypes.SET_USER_INFO;
  payload: T;
};
export type getUserInfoType = {
  type: ActionTypes.GET_USER_INFO;
  payload: types.UserTokenType;
};
export type setUserTokenToLocalStorageType = {
  type: ActionTypes.SET_USER_TOKEN_TO_LOCAL_STORAGE;
  payload: types.UserTokenType;
};

export const setUserInfo = <UserProfileType>(
  payload: UserProfileType
): setUserInfoType<UserProfileType> => ({
  type: ActionTypes.SET_USER_INFO,
  payload,
});
export const isAuthorized = (payload: boolean): isAuthorizedType => ({
  type: ActionTypes.IS_AUTHORIZED,
  payload,
});
export const vkOAuthToken = (payload: string): vkOAuthTokenType => ({
  type: ActionTypes.VK_OAUTH_TOKEN,
  payload,
});
export const getUserInfo = (payload: types.UserTokenType): getUserInfoType => ({
  type: ActionTypes.GET_USER_INFO,
  payload,
});
export const setUserTokenToLocalStorage = (
  payload: types.UserTokenType
): setUserTokenToLocalStorageType => ({
  type: ActionTypes.SET_USER_TOKEN_TO_LOCAL_STORAGE,
  payload,
});
export const logOut = (): logOutType => ({
  type: ActionTypes.LOG_OUT,
});
