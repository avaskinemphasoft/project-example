import React, { FC } from 'react';
import { Flex } from '@chakra-ui/react';

export interface AmountLabelsItemProps {
  amount: number;
}

export const AmountLabelsItem: FC<AmountLabelsItemProps> = ({ amount }) => {
  return (
    <Flex
      h="31px"
      border="1px solid #A3A3A3"
      w="57px"
      justifyContent="center"
      borderRadius="6px"
      alignItems="center"
      mr="9px"
      fontSize="14px"
      cursor="pointer"
      lineHeight="28px"
      color="#A3A3A3"
    >
      {amount}
    </Flex>
  );
};
