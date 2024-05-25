export type LoginParams = {
  username: string;
  password: string;
  expiresInMins?: number; // optional, defaults to 60
};

export type RegisterParams = {
  username: string;
  password: string;
};
