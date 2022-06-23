import React, { FC } from 'react';
import { LogoIcon } from 'src/assets/svg/LogoIcon';
import { Box, Flex, Text } from '@chakra-ui/react';

export const Logo: FC = () => (
  <Flex>
    <Box mt="6px">
      <LogoIcon color_1={'white'} color_2={'#FB9F33'} />
    </Box>
    <Box display={{ base: 'none', sm: 'block' }}>
      <Text ml="15px" mt="9px" fontSize="32px" lineHeight="27px">
        GameCar
      </Text>
    </Box>
  </Flex>
);
