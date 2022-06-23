import { AnyAction } from 'redux';
import { EventChannel } from 'redux-saga';

import { ActionTypes } from 'src/managers/carManager/ActionTypes';
import { CarDataType, CarsDataType } from 'src/managers/carManager/types';

export type InitialState = {
  announce: string;
  carsData: CarsDataType;
  carWSChannel?: EventChannel<AnyAction>;
  isOpenCarWSChannel: boolean;
};

export const initialState: InitialState = {
  announce: '',
  carsData: {
    stage: 123,
    announce: '',
    cars: [
      {
        car: 0,
        bets: [],
        speed: 0,
        boosted: false,
        distance: 0,
        overheat: 0,
        totalBet: 0,
      },
      {
        car: 1,
        bets: [],
        speed: 0,
        boosted: false,
        distance: 0,
        overheat: 0,
        totalBet: 0,
      },
      {
        car: 2,
        bets: [],
        speed: 0,
        boosted: false,
        distance: 0,
        overheat: 0,
        totalBet: 0,
      },
      {
        car: 3,
        bets: [],
        speed: 0,
        boosted: false,
        distance: 0,
        overheat: 0,
        totalBet: 0,
      },
    ],
  },
  isOpenCarWSChannel: false,
};

export const carReducer = (state = initialState, action: AnyAction): InitialState => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.SET_CAR_MESSAGE:
      return {
        ...state,
        carsData: {
          ...state.carsData,
          stage:
            state.carsData.cars.filter((car: CarDataType) => car.distance > 0).length > 0
              ? 1
              : state.carsData.stage,
          cars: state.carsData.cars.map((car: CarDataType, index: number) => ({
            ...car,
            ...payload[index],
          })),
        },
      };
    case ActionTypes.SET_CAR_WS_CHANNEL:
      return {
        ...state,
        carWSChannel: payload,
        isOpenCarWSChannel: true,
      };
    case ActionTypes.CLOSE_CAR_WS_CHANNEL:
      return {
        ...state,
        isOpenCarWSChannel: false,
      };
    case ActionTypes.ADD_CAR_NEW_BET:
      return {
        ...state,
        carsData: {
          ...state.carsData,
          stage:
            state.carsData.cars.filter((car: CarDataType) => car.distance > 0).length > 0
              ? 1
              : state.carsData.stage,
          cars: state.carsData.cars.map((car: any, index: number) =>
            index !== payload.car
              ? car
              : {
                  ...car,
                  bets: [...car.bets, payload.bet],
                  totalBet: payload.total,
                }
          ),
        },
      };
    case ActionTypes.START_NEW_SESSION:
      return {
        ...state,
        carsData: {
          ...state.carsData,
          stage: 0,
          cars: state.carsData.cars.map((car: CarDataType) => ({
            ...car,
            bets: [],
            distance: 0,
            totalBet: 0,
          })),
        },
      };
    case ActionTypes.SET_ANNOUNCE:
      return {
        ...state,
        announce: payload,
      };
    default:
      return state;
  }
};
