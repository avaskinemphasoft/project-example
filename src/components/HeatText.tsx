import React, { FC } from 'react';
import { chakra, Flex, Text, Box } from '@chakra-ui/react';

export const HeatText: FC = () => (
  <Box
    pl="40px"
    pt="30px"
    ml="-10px"
    mr={{ base: '30px', '3xl': '10%' }}
    display={{ base: 'none', sm: 'block' }}
  >
    <Flex w="200px" pos="relative" flexDir="column" transform="rotate(-25.28deg)">
      <chakra.span className="bg-img-heat-text-thermometer" />
      <Text fontSize="36px" lineHeight="30px" color="#fff">
        Следи за перегревом
      </Text>
      <Text fontSize="18px" lineHeight="22px" color="#FB9F33" pt="15px">
        больше буста - выше шанс перегрева (он негативно сказывается на скорости машины)
      </Text>
    </Flex>
  </Box>
);
