export type UserProfileInfoType = {
  id: number;
  name?: string;
  photo?: string;
};

export type UserTokenType = {
  jwt: string;
  user: UserProfileInfoType;
};
