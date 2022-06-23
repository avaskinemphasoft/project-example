import React, { Dispatch, FC, SetStateAction } from 'react';

import { Path } from 'src/core/router/paths';
import { NavigationLink } from 'src/modules/headerModule/components/NavigationLink';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import { MobileNavigationMenuIcon } from 'src/assets/svg/MobileNavigationMenuIcon';

type NavigationProps = {
  isHeaderDropdownShown: boolean;
  setIsHeaderDropdownShown: Dispatch<SetStateAction<boolean>>;
};

export const Navigation: FC<NavigationProps> = ({
  isHeaderDropdownShown,
  setIsHeaderDropdownShown,
}) => {
  return (
    <>
      <Spacer display={{ base: 'flex', md: 'none' }} />
      <Box
        w="49px"
        h="44px"
        p="1px"
        ml="16px"
        cursor="pointer"
        display={{ base: 'flex', md: 'none' }}
        bgGradient="linear(142.69deg, rgba(255, 255, 255, 0.23) -0.45%, rgba(0, 0, 0, 0) 52.68%)"
        borderRadius="9px"
        onClick={() => {
          setIsHeaderDropdownShown(!isHeaderDropdownShown);
        }}
      >
        <Flex
          w="47px"
          h="42px"
          alignItems="center"
          borderRadius="9px"
          justifyContent="center"
          backgroundColor="rgba(0, 0, 0, 0.24)"
        >
          <MobileNavigationMenuIcon
            transition="0.3s"
            transform={`rotate(${isHeaderDropdownShown ? 90 : 0}deg)`}
          />
        </Flex>
      </Box>
      <Flex ml={{ md: '25px', lg: '55px' }} pt="11px" display={{ base: 'none', md: 'flex' }}>
        <NavigationLink to={Path.MAIN} text="Главная" />
        <NavigationLink to={Path.TUTORIAL} text="Как играть" ml="27px" />
        <NavigationLink to={Path.PAYOUTS} text="Выплаты" ml="28px" />
        <NavigationLink to={Path.TOP} text="Топ игроков" ml="25px" />
      </Flex>
    </>
  );
};
