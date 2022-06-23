import { call, takeEvery } from 'redux-saga/effects';

import { ActionTypes } from 'src/managers/betsManager/ActionTypes';
import * as betManagerActions from 'src/managers/betsManager/actions';
import { sendCarBetApi } from 'src/api/betApi/api';

export function* betsWatcher() {
  yield takeEvery(ActionTypes.BET_ON_CAR, workerSendCarBet);
}

function* workerSendCarBet({ payload }: betManagerActions.BetOnCarType) {
  try {
    const jwt = localStorage.getItem('jwt');

    yield call(sendCarBetApi, { jwt, carBet: payload });
  } catch (err) {
    console.log('workerCarWS error:', err);
  }
}
