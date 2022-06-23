import React, { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import { AmountLabelsItem } from 'src/modules/paymentModule/components/replenishBalance/components/amountLabels/components/AmountLabelsItem';

const amounts = [200, 500, 1000, 2500, 5000, 10000];

export const AmountLabels: FC = () => {
  return (
    <Flex h="32px" mt="11px">
      {amounts.map((item, index) => (
        <AmountLabelsItem key={index + item} amount={item} />
      ))}
    </Flex>
  );
};
