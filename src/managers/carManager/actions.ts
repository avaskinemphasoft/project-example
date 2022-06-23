import { AnyAction } from 'redux';
import { EventChannel } from 'redux-saga';

import { ActionTypes } from 'src/managers/carManager/ActionTypes';
import * as CarManagerTypes from 'src/managers/carManager/types';

export type CreateCarWSChannelType = {
  type: ActionTypes.CREATE_CAR_WS_CHANNEL;
};

export type SetCarWSChannelType = {
  type: ActionTypes.SET_CAR_WS_CHANNEL;
  payload: EventChannel<AnyAction>;
};

export type CloseCarWSChannelType = {
  type: ActionTypes.CLOSE_CAR_WS_CHANNEL;
};

export type GetCarMessageType = {
  type: ActionTypes.GET_CAR_MESSAGE;
  payload: CarManagerTypes.CarDataType[];
};

export type SetCarMessageType = {
  type: ActionTypes.SET_CAR_MESSAGE;
  payload: CarManagerTypes.CarDataType[];
};

export type GetHistoryMessageType = {
  type: ActionTypes.GET_HISTORY_MESSAGE;
  payload: CarManagerTypes.HistoryMessageType;
};

export type AddCarNewBetType = {
  type: ActionTypes.ADD_CAR_NEW_BET;
  payload: CarManagerTypes.NewBetBodyType;
};

export type StartNewSessionType = {
  type: ActionTypes.START_NEW_SESSION;
  payload: CarManagerTypes.NewSessionBodyType;
};

export type SetAnnounceType = {
  type: ActionTypes.SET_ANNOUNCE;
  payload: string;
};

export const createCarWSChannel = (): CreateCarWSChannelType => ({
  type: ActionTypes.CREATE_CAR_WS_CHANNEL,
});

export const setCarWsChannel = (channel: EventChannel<AnyAction>): SetCarWSChannelType => ({
  type: ActionTypes.SET_CAR_WS_CHANNEL,
  payload: channel,
});

export const closeCarWsChannel = (): CloseCarWSChannelType => ({
  type: ActionTypes.CLOSE_CAR_WS_CHANNEL,
});

export const getCarMessage = (payload: CarManagerTypes.CarDataType[]): GetCarMessageType => ({
  type: ActionTypes.GET_CAR_MESSAGE,
  payload,
});

export const setCarMessage = (payload: CarManagerTypes.CarDataType[]): SetCarMessageType => ({
  type: ActionTypes.SET_CAR_MESSAGE,
  payload,
});

export const getHistoryMessage = (
  payload: CarManagerTypes.HistoryMessageType
): GetHistoryMessageType => ({
  type: ActionTypes.GET_HISTORY_MESSAGE,
  payload,
});

export const addCarNewBetMessage = (payload: CarManagerTypes.NewBetBodyType): AddCarNewBetType => ({
  type: ActionTypes.ADD_CAR_NEW_BET,
  payload,
});

export const startNewSession = (
  payload: CarManagerTypes.NewSessionBodyType
): StartNewSessionType => ({
  type: ActionTypes.START_NEW_SESSION,
  payload,
});

export const setAnnounce = (payload: string): SetAnnounceType => ({
  type: ActionTypes.SET_ANNOUNCE,
  payload,
});
