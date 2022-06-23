import React, { FC } from 'react';

import { Flex } from '@chakra-ui/react';
import * as carManagerSelectors from 'src/managers/carManager/selectors';
import { BetResultItem } from 'src/modules/betResultsModule/components/BetResultItem';
import { useSelector } from 'react-redux';
import { CarsDataType } from 'src/managers/carManager/types';

const carsType = ['Машина 1', 'Машина 2', 'Машина 3', 'Машина 4'];

export const BetResultsModule: FC = () => {
  const carsData: CarsDataType = useSelector(carManagerSelectors.selectCarsData);
  return (
    <Flex flexWrap={'wrap'}>
      {carsData.cars.map((item: any, index: number) => (
        <BetResultItem
          key={index}
          bets={item.bets}
          title={carsType[index]}
          totalAmount={item.totalBet}
          index={index}
        />
      ))}
    </Flex>
  );
};
