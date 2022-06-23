import { AnyAction } from 'redux';
import { getCarMessage, getHistoryMessage, setAnnounce } from 'src/managers/carManager/actions';
import { centrifugeUrl } from 'src/api/webSocket/urls';
import { EventChannel, eventChannel } from 'redux-saga';
import Centrifuge from 'centrifuge';

export const initCarWebSocket = (): EventChannel<AnyAction> => {
  const centrifuge = new Centrifuge(centrifugeUrl);

  return eventChannel((emitter) => {
    centrifuge.subscribe('state:cars-root', (message) => {
      const data = message.data.body;
      if (data.announce != '') {
        console.log(data.announce);
        emitter(setAnnounce(data.announce));
      }
      emitter(getCarMessage(data.cars));
    });
    const subscription = centrifuge.subscribe('history:cars-root', (message) => {
      const data = message.data;
      // console.log(data.type, data.body);
      emitter(getHistoryMessage(data));
    });
    subscription.history({ limit: -1 }).then(function (resp) {
      console.log(resp.publications);
      resp.publications.map((message) => emitter(getHistoryMessage(message.data)));
    });
    centrifuge.connect();
    return () => {
      console.log('Socket off');
    };
  });
};
