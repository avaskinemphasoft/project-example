import { AnyAction } from 'redux';
import { EventChannel } from 'redux-saga';
import { call, takeEvery, put, select } from 'redux-saga/effects';

import { ActionTypes } from 'src/managers/carManager/ActionTypes';
import * as CarActions from 'src/managers/carManager/actions';
import { initCarWebSocket } from 'src/api/webSocket/carWebSocket';
import { selectCarWSChannel } from 'src/managers/carManager/selectors';

export function* carWatcher() {
  yield takeEvery(ActionTypes.GET_CAR_MESSAGE, workerGetCarMessage);
  yield takeEvery(ActionTypes.GET_HISTORY_MESSAGE, workerGetHistoryMessage);
  yield takeEvery(ActionTypes.CLOSE_CAR_WS_CHANNEL, workerCloseCarWS);
  yield takeEvery(ActionTypes.CREATE_CAR_WS_CHANNEL, workerCreateCarWS);
}

function* workerCreateCarWS() {
  try {
    const channel: EventChannel<AnyAction> = yield call(initCarWebSocket);

    yield put(CarActions.setCarWsChannel(channel));
    yield takeEvery(channel, workerCarWSChannel);
  } catch (err) {
    console.log('workerCreateCarWS error:', err);
  }
}

function* workerCarWSChannel(action: AnyAction) {
  try {
    yield put(action);
  } catch (err) {
    console.log('workerCarWSChannel error:', err);
  }
}

function* workerGetCarMessage(action: AnyAction) {
  try {
    yield put(CarActions.setCarMessage(action.payload));
  } catch (err) {
    console.log('workerGetCarMessage error:', err);
  }
}

function* workerCloseCarWS() {
  try {
    const channel: EventChannel<AnyAction> = yield select(selectCarWSChannel);
    channel.close();
  } catch (err) {
    console.log('workerCloseCarWS error:', err);
  }
}

function* workerGetHistoryMessage(action: CarActions.GetHistoryMessageType) {
  try {
    switch (action.payload.type) {
      case 'newbet':
        yield put(CarActions.addCarNewBetMessage(action.payload.body));
        break;
      case 'newsession':
        yield put(CarActions.startNewSession(action.payload.body));
        break;
    }
  } catch (err) {
    console.log('workerGetHistoryMessage error:', err);
  }
}
