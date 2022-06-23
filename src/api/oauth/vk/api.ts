import axios from 'axios';
import * as authTypes from 'src/managers/authManager/types';
import { getUserInfoUrl, getVkOAuthTokenUrl } from 'src/api/oauth/vk/urls';

const getRedirectUrl = () => {
  return `&redirect_uri=${window.location.origin}/main`;
};

export const vkOAuthApi = (code: string): Promise<authTypes.UserTokenType> => {
  return axios
    .get(getVkOAuthTokenUrl() + code + getRedirectUrl())
    .then((res) => res.data)
    .catch((err) => console.log('vkOAuthApi error:', err));
};

export const getUserInfoApi = (
  userId: number,
  jwt: string
): Promise<authTypes.UserProfileInfoType> => {
  return axios
    .get(getUserInfoUrl() + userId, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log('getUserInfoApi error:', err));
};

// if (err.response.data === 'Jwt is expired' && err.response.status === 401) {
//   return err;
// }
