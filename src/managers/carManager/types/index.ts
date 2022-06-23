export type UserType = {
  id: number;
  name: string;
  photo: string;
};

export type BetType = {
  User: UserType;
  userName: string;
  value: number;
};

export type NewBetBodyType = {
  car: number;
  total: number;
  bet: BetType;
};

export type HistoryNewBetMessageType = {
  type: 'newbet';
  body: NewBetBodyType;
};

export type NewSessionBodyType = {
  id: number;
};

export type HistoryNewSessionMessageType = {
  type: 'newsession';
  body: NewSessionBodyType;
};

export type HistoryMessageType = HistoryNewSessionMessageType | HistoryNewBetMessageType;

export type CarDataType = {
  car: number;
  bets: BetType[];
  speed: number;
  boosted: boolean;
  distance: number;
  overheat: number;
  totalBet: number;
};

export type CarsDataType = {
  cars: CarDataType[];
  stage: number;
  announce: string;
};
