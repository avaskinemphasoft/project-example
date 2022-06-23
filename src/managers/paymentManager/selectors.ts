export const selectPaymentMethods = (state: any) => state.paymentReducer.availablePaymentMethods;
export const selectCurrentPaymentMethod = (state: any) =>
  state.paymentReducer.selectedPaymentMethod;
