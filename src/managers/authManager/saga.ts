import { put, call, takeEvery } from 'redux-saga/effects';
import history from 'src/core/history/history';
import * as types from 'src/managers/authManager/types';
import { ActionTypes } from 'src/managers/authManager/ActionTypes';
import * as authManagerActions from 'src/managers/authManager/actions';
import { vkOAuthApi, getUserInfoApi } from 'src/api/oauth/vk/api';

export function* authManagerWatcher() {
  yield takeEvery(ActionTypes.LOG_OUT, logOutWorker);
  yield takeEvery(ActionTypes.VK_OAUTH_TOKEN, vkOAuthWorker);
  yield takeEvery(ActionTypes.GET_USER_INFO, getUserInfoWorker);
  yield takeEvery(ActionTypes.SET_USER_TOKEN_TO_LOCAL_STORAGE, setUserTokenToLocalStorageWorker);
}

function* vkOAuthWorker({ payload }: authManagerActions.vkOAuthTokenType) {
  try {
    const userToken: types.UserTokenType = yield call(vkOAuthApi, payload);

    yield put(authManagerActions.setUserTokenToLocalStorage(userToken));
    yield put(authManagerActions.getUserInfo(userToken));
  } catch (err) {
    console.log('vkOAuthWorker error:', err);
  }
}

function* setUserTokenToLocalStorageWorker({
  payload,
}: authManagerActions.setUserTokenToLocalStorageType) {
  yield call(setUserTokenToLocalStorage, payload);
}

function setUserTokenToLocalStorage(userToken: types.UserTokenType) {
  try {
    localStorage.setItem('jwt', userToken.jwt);
    localStorage.setItem('user_id', JSON.stringify(userToken.user.id));
  } catch (err) {
    console.log('setUserTokenToLocalStorageWorker error:', err);
  }
}

function* getUserInfoWorker({ payload }: authManagerActions.getUserInfoType) {
  try {
    const userProfileInfo: types.UserProfileInfoType = yield call(
      getUserInfoApi,
      payload.user.id,
      payload.jwt
    );

    yield put(authManagerActions.setUserInfo(userProfileInfo));
    yield put(authManagerActions.isAuthorized(true));

    history.push('/main');
  } catch (err: any) {
    if (err.message === 'Request failed with status code 401') {
      yield call(logOutWorker);
    }
    console.log('getUserInfoWorker error:', err);
  }
}

function* logOutWorker() {
  try {
    localStorage.removeItem('user_id');
    localStorage.removeItem('jwt');

    yield put(authManagerActions.isAuthorized(false));
  } catch (err) {
    console.log('logOutWorker error:', err);
  }
}
