import { ActionTypes } from 'src/managers/paymentManager/ActionTypes';
import { AnyAction } from 'redux';
import * as paymentManagerTypes from 'src/managers/paymentManager/types/types';

export type InitialState = {
  selectedPaymentMethod: paymentManagerTypes.PaymentMethodType;
  availablePaymentMethods: any[];
};

export const initialState: InitialState = {
  selectedPaymentMethod: paymentManagerTypes.selectedPatmentMethodinitialState,
  availablePaymentMethods: [],
};

export const paymentReducer = (state = initialState, action: AnyAction): InitialState => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.SET_AVAILABLE_PAYMENT_METHODS:
      return {
        ...state,
        availablePaymentMethods: payload,
      };
    case ActionTypes.SELECTED_PAYMENT_METHOD:
      return {
        ...state,
        selectedPaymentMethod: payload,
      };
    default:
      return state;
  }
};
