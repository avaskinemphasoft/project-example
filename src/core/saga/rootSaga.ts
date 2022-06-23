import '@babel/polyfill';
import { all, call } from 'redux-saga/effects';

import { carWatcher } from 'src/managers/carManager/saga';
import { betsWatcher } from 'src/managers/betsManager/saga';
import { paymentWatcher } from 'src/managers/paymentManager/saga';
import { mainChatWatcher } from 'src/managers/chatManager/mainChat/saga';
import { authManagerWatcher } from 'src/managers/authManager/saga';

const sagaList: any = [
  carWatcher,
  betsWatcher,
  paymentWatcher,
  mainChatWatcher,
  authManagerWatcher,
];
export default function* watchRootSagas() {
  yield all(sagaList.map((saga: any) => call(saga)));
}
