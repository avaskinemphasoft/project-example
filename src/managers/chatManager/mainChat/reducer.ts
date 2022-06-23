import { ActionTypes } from 'src/managers/chatManager/mainChat/ActionTypes';
import { MainChatMessageType } from 'src/managers/chatManager/mainChat/actions';
import { AnyAction } from 'redux';

export type InitialState = {
  ws?: WebSocket;
  onlineChatUsers: number;
  mainChatMessagesData: Array<MainChatMessageType>;
};

export const initialState: InitialState = {
  onlineChatUsers: 0,
  mainChatMessagesData: [],
};

export const mainChatReducer = (state = initialState, action: AnyAction): InitialState => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.SET_MAIN_CHAT_MESSAGE:
      return {
        ...state,
        mainChatMessagesData: [...state.mainChatMessagesData, payload],
      };
    case ActionTypes.SET_ONLINE_MESSAGE:
      return {
        ...state,
        onlineChatUsers: payload,
      };
    case ActionTypes.SET_WS:
      return {
        ...state,
        ws: payload,
      };
    default:
      return state;
  }
};
