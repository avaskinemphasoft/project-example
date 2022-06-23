import React, { FC } from 'react';
import { Box, chakra } from '@chakra-ui/react';

export interface CarResultBlockProps {
  carType: string;
  carAmount: number;
}

export const CarResultBlock: FC<CarResultBlockProps> = ({ carType, carAmount }) => {
  return (
    <Box
      w="200px"
      h="245px"
      background={'rgba(0, 0, 0, 0.24)'}
      backdropFilter="blur(12px)"
      borderRadius="9px"
      p="23px 26px 27px 23px"
    >
      <Box>
        <chakra.span>{carType}</chakra.span>
        <chakra.span>{carAmount}</chakra.span>
      </Box>
      <Box></Box>
    </Box>
  );
};
