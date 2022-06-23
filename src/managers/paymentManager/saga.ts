import { call, put, takeEvery } from 'redux-saga/effects';

import { ActionTypes } from 'src/managers/paymentManager/ActionTypes';
import * as paymentManagerActions from 'src/managers/paymentManager/actions';
import { CurrenciesType, getAvailablePaymentMethodsApi } from 'src/api/paymentApi/api';

export function* paymentWatcher() {
  yield takeEvery(ActionTypes.GET_AVAILABLE_PAYMENT_METHODS, workerGetAvailablePaymentMethods);
}

function* workerGetAvailablePaymentMethods() {
  try {
    const jwt = localStorage.getItem('jwt');

    const paymentMethods: CurrenciesType = yield call(getAvailablePaymentMethodsApi, jwt);

    yield put(paymentManagerActions.setAvailablePaymentMethods(paymentMethods));
  } catch (err) {
    console.log('workerCarWS error:', err);
  }
}
