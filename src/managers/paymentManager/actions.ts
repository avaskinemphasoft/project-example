import { ActionTypes } from 'src/managers/paymentManager/ActionTypes';
import * as paymentManagerTypes from 'src/managers/paymentManager/types/types';

export type getAvailablePaymentMethodsTypes = {
  type: ActionTypes.GET_AVAILABLE_PAYMENT_METHODS;
};
export type selectedPaymentMethodTypes = {
  type: ActionTypes.SELECTED_PAYMENT_METHOD;
  payload: paymentManagerTypes.PaymentMethodType;
};
export type setAvailablePaymentMethodsTypes = {
  type: ActionTypes.SET_AVAILABLE_PAYMENT_METHODS;
  payload: any;
};

export const getAvailablePaymentMethods = (): getAvailablePaymentMethodsTypes => ({
  type: ActionTypes.GET_AVAILABLE_PAYMENT_METHODS,
});
export const selectedPaymentMethod = (
  payload: paymentManagerTypes.PaymentMethodType
): selectedPaymentMethodTypes => ({
  type: ActionTypes.SELECTED_PAYMENT_METHOD,
  payload,
});
export const setAvailablePaymentMethods = (payload: any): setAvailablePaymentMethodsTypes => ({
  type: ActionTypes.SET_AVAILABLE_PAYMENT_METHODS,
  payload,
});
