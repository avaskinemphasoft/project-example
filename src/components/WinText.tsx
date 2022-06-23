import React, { FC } from 'react';
import { Box, chakra, Flex, Text, Image } from '@chakra-ui/react';
import FlagsImage from 'src/assets/carAssets/icons/png/flags.png';

export const WinText: FC = () => (
  <Box mt="-30px" ml={{ base: '50px', '3xl': '10%' }} display={{ base: 'none', sm: 'block' }}>
    <Flex w="230px" pos="relative" flexDir="column" transform="rotate(28.18deg)">
      <Image boxSize="105px" src={FlagsImage} />
      <chakra.span className="bg-img-win-text-arrow-top" />
      <chakra.span className="bg-img-win-text-arrow-bottom" />
      <Text fontSize="36px" lineHeight="30px" color="#fff">
        Победившая машина забирает банк
      </Text>
      <Text fontSize="18px" lineHeight="22px" color="#FB9F33">
        со всех машин
      </Text>
    </Flex>
  </Box>
);
