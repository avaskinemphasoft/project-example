import axios from 'axios';
import { getAvailablePaymentMethodsUrl } from 'src/api/paymentApi/urls';

// TODO
// type CurrencyType = {};

export type CurrenciesType = any; // TODO

export const getAvailablePaymentMethodsApi = (jwt: string | null): Promise<CurrenciesType> => {
  return axios
    .get(getAvailablePaymentMethodsUrl(), {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then((res) => res.data.currencies)
    .catch((err) => console.log('getAvailablePaymentMethodsApi error:', err));
};
