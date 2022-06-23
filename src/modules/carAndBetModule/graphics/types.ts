export enum CarType {
  DODGE = 'DODGE',
  NISSAN = 'NISSAN',
  TOYOTA = 'TOYOTA',
  MITSUBISHI = 'MITSUBISHI',
}

export enum TimeType {
  DAY = 'DAY',
  NIGHT = 'NIGHT',
  EVENING = 'EVENING',
}

export type CarData = {
  stage: number;
  boosted: boolean;
  distance: number;
  totalBet: number;
};

export enum WheelType {
  BACK = 'BACK',
  FRONT = 'FRONT',
}

export enum LocationType {
  CITY = 'CITY',
  SEASIDE = 'SEASIDE',
  TUNNEL = 'TUNNEL',
  // BRIDGE = 'BRIDGE',
  SUBURB = 'SUBURB',
  DESERT = 'DESERT',
}
