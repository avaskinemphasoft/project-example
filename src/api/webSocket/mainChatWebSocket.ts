import { eventChannel, EventChannel } from 'redux-saga';
import * as mainChatManagerActions from 'src/managers/chatManager/mainChat/actions';
import { centrifugeUrl, mainChatWebSocketUrl } from 'src/api/webSocket/urls';
import { AnyAction } from 'redux';
import Centrifuge from 'centrifuge';

export const initMainChatWebSocket = (): {
  channel: EventChannel<AnyAction>;
} => {
  const centrifuge = new Centrifuge(centrifugeUrl);

  return {
    channel: eventChannel((emitter) => {
      const subscription = centrifuge.subscribe('public:chat', (message) => {
        return emitter(mainChatManagerActions.getMainChatMessage(message.data.body));
      });
      subscription.history({ limit: -1 }).then(function (resp) {
        const result = [];
        for (const publication of resp.publications) {
          result.push(emitter(mainChatManagerActions.getMainChatMessage(publication.data.body)));
        }
        // return result; TODO
      });
      subscription.presenceStats().then((value) => {
        return emitter(mainChatManagerActions.getOnlineMessage(value.num_clients));
      });
      centrifuge.connect();
      return () => {
        centrifuge.disconnect();
        console.log('Main Chat Socket off');
      };
    }),
  };
};
