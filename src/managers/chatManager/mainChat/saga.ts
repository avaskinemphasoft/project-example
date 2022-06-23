import { call, takeEvery, put, select } from 'redux-saga/effects';

import { AnyAction } from 'redux';
import { ActionTypes } from 'src/managers/chatManager/mainChat/ActionTypes';
import { initMainChatWebSocket } from 'src/api/webSocket/mainChatWebSocket';
import * as mainChatManagerActions from 'src/managers/chatManager/mainChat/actions';
import * as mainChatManagerSelectors from 'src/managers/chatManager/mainChat/selectors';
import { sendMessageApi } from 'src/api/chatApi/api';

export function* mainChatWatcher() {
  yield takeEvery(ActionTypes.CREATE_MAIN_CHAT_WS_CHANNEL, workerMainChatWS);
  yield takeEvery(ActionTypes.GET_MAIN_CHAT_MESSAGE, workerGetMainChatMessage);
  yield takeEvery(ActionTypes.GET_ONLINE_MESSAGE, workerGetOnlineMessage);
  yield takeEvery(ActionTypes.CLOSE_MAIN_CHAT_WS_CHANNEL, workerCloseMainChatWS);
  yield takeEvery(ActionTypes.SEND_MESSAGE, workerSendMessage);
}

function* workerMainChatWS() {
  try {
    const { channel } = yield call(initMainChatWebSocket);

    yield takeEvery(channel, workerMainChatWSChannel);
  } catch (err) {
    console.log('workerCarWS error:', err);
  }
}

function* workerMainChatWSChannel(action: AnyAction) {
  try {
    yield put(action);
  } catch (err) {
    console.log('workerMainChatWSChannel error:', err);
  }
}

function* workerGetMainChatMessage(action: AnyAction) {
  try {
    yield put(mainChatManagerActions.setMainChatMessage(action.payload));
  } catch (err) {
    console.log('workerGetMainChatMessage error:', err);
  }
}

function* workerGetOnlineMessage(action: AnyAction) {
  try {
    yield put(mainChatManagerActions.setOnlineMessage(action.payload));
  } catch (err) {
    console.log('workerGetMainChatMessage error:', err);
  }
}

function* workerCloseMainChatWS() {
  try {
    const channel: WebSocket = yield select(mainChatManagerSelectors.getWs);
    channel.close();
  } catch (err) {
    console.log('workerCloseCarWS error:', err);
  }
}

function* workerSendMessage({ payload }: mainChatManagerActions.SendMessageType) {
  try {
    const jwt = localStorage.getItem('jwt');

    yield call(sendMessageApi, {
      jwt,
      message: payload,
    });
  } catch (err) {
    console.log('workerSendMessage error:', err);
  }
}
