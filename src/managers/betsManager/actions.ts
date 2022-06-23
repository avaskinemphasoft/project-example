import { ActionTypes } from 'src/managers/betsManager/ActionTypes';
import * as types from 'src/modules/betsModule/types';

export type BetOnCarType = {
  type: ActionTypes.BET_ON_CAR;
  payload: types.CarBetValue;
};

export const betOnCar = (payload: types.CarBetValue): BetOnCarType => ({
  type: ActionTypes.BET_ON_CAR,
  payload,
});
