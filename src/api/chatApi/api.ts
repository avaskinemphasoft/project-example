import axios from 'axios';
import { sendMessage } from 'src/api/chatApi/urls';

type SendMessageApiType = {
  jwt: string | null;
  message: string;
};

export const sendMessageApi = ({ jwt, message }: SendMessageApiType): Promise<string> => {
  return axios
    .post(
      sendMessage(),
      { text: message },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log('sendMessageApi error:', err));
};
