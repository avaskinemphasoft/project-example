export const getVkOAuthUrl = (): string => {
  return `https://oauth.vk.com/authorize?client_id=7982063&response_type=code&v=5.131&redirect_uri=${window.location.origin}/main`;
};

export const getUserInfoUrl = (): string => {
  return `https://example.com/api/v1/users/`;
};

export const getVkOAuthTokenUrl = (): string => {
  return `https://example.com/api/v1/oauth/vk?code=`;
};
