import { CarsDataType } from 'src/managers/carManager/types';

export const selectAnnounce = (state: any): string => state.carReducer.announce;
export const selectCarsData = (state: any): CarsDataType => state.carReducer.carsData;
export const selectCarWSChannel = (state: any) => state.carReducer.carWSChannel;
export const selectIsOpenCarWSChannel = (state: any) => state.carReducer.isOpenCarWSChannel;
