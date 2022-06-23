import { combineReducers } from 'redux';

import { carReducer } from 'src/managers/carManager/reducer';
import { paymentReducer } from 'src/managers/paymentManager/reducer';
import { mainChatReducer } from 'src/managers/chatManager/mainChat/reducer';
import { authManagerReducer } from 'src/managers/authManager/reducer';

const rootReducer = combineReducers({
  carReducer,
  paymentReducer,
  mainChatReducer,
  authManagerReducer,
});

export default rootReducer;
