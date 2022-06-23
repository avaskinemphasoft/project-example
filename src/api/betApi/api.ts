import axios from 'axios';
import * as types from 'src/modules/betsModule/types';
import { sendBetOnCar } from 'src/api/betApi/urls';

type SendCarBetApiType = {
  jwt: string | null;
  carBet: types.CarBetValue;
};

export const sendCarBetApi = ({ jwt, carBet }: SendCarBetApiType): Promise<string> => {
  return axios
    .post(sendBetOnCar(), carBet, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log('sendCarBetApi error:', err));
};
