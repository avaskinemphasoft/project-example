import { ActionTypes } from 'src/managers/chatManager/mainChat/ActionTypes';

export type OnlineMessageType = any;
export type MainChatMessageType = any;

export type CreateMainChatWSChannelType = {
  type: ActionTypes.CREATE_MAIN_CHAT_WS_CHANNEL;
};
export type GetMainChatMessageType = {
  type: ActionTypes.GET_MAIN_CHAT_MESSAGE;
  payload: MainChatMessageType;
};
export type SetMainChatMessageType = {
  type: ActionTypes.SET_MAIN_CHAT_MESSAGE;
  payload: MainChatMessageType;
};
export type GetOnlineMessageType = {
  type: ActionTypes.GET_ONLINE_MESSAGE;
  payload: OnlineMessageType;
};
export type SetOnlineMessageType = {
  type: ActionTypes.SET_ONLINE_MESSAGE;
  payload: OnlineMessageType;
};
export type SetWsType = {
  type: ActionTypes.SET_WS;
  payload: WebSocket;
};
export type SendMessageType = {
  type: ActionTypes.SEND_MESSAGE;
  payload: string;
};
export type CloseMainChatWSChannelType = {
  type: ActionTypes.CLOSE_MAIN_CHAT_WS_CHANNEL;
};

export const createMainChatWSChannel = (): CreateMainChatWSChannelType => ({
  type: ActionTypes.CREATE_MAIN_CHAT_WS_CHANNEL,
});
export const getMainChatMessage = (payload: MainChatMessageType): GetMainChatMessageType => ({
  type: ActionTypes.GET_MAIN_CHAT_MESSAGE,
  payload,
});
export const setMainChatMessage = (payload: MainChatMessageType): SetMainChatMessageType => ({
  type: ActionTypes.SET_MAIN_CHAT_MESSAGE,
  payload,
});
export const getOnlineMessage = (payload: OnlineMessageType): GetOnlineMessageType => ({
  type: ActionTypes.GET_ONLINE_MESSAGE,
  payload,
});
export const setOnlineMessage = (payload: OnlineMessageType): SetOnlineMessageType => ({
  type: ActionTypes.SET_ONLINE_MESSAGE,
  payload,
});
export const setWs = (payload: WebSocket): SetWsType => ({
  type: ActionTypes.SET_WS,
  payload,
});
export const closeMainWsChannel = (): CloseMainChatWSChannelType => ({
  type: ActionTypes.CLOSE_MAIN_CHAT_WS_CHANNEL,
});
export const sendMessage = (payload: string): SendMessageType => ({
  type: ActionTypes.SEND_MESSAGE,
  payload,
});
