import React, { FC } from 'react';

import { Path } from 'src/core/router/paths';
import { Link as RouterLink } from 'react-router-dom';
import { Spacer, Flex, Text } from '@chakra-ui/react';
import { LogoIcon } from 'src/assets/svg/LogoIcon';

export const PageFooter: FC = () => (
  <Flex
    flexWrap={'wrap'}
    justifyContent={'center'}
    alignItems={'center'}
    padding={{ base: '47px 0 19px 0', sm: '48px 34px 29px 33px' }}
  >
    <Flex w={{ base: '100%', sm: 'fit-content' }} justifyContent={'center'} alignItems={'center'}>
      <LogoIcon color_1={'#586354'} color_2={'#838383'} w={'24px'} h={'24px'} />
      <Text
        color={'#586354'}
        fontFamily={'Roboto'}
        fontSize={'18px'}
        lineHeight={'14px'}
        ml={'19px'}
      >
        GameCar
      </Text>
    </Flex>
    <Spacer display={{ base: 'none', sm: 'flex' }} />
    <Flex
      w={{ base: '100%', sm: 'fit-content' }}
      mt={{ base: '14px', sm: 0 }}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <RouterLink to={Path.ERROR_404}>
        <Text color={'#838383'} fontSize={'12px'} lineHeight={'15px'} textDecor={'underline'}>
          Пользовательское соглашение
        </Text>
      </RouterLink>
    </Flex>
  </Flex>
);
