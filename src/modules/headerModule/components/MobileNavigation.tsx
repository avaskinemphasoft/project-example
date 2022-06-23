import React, { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import { Path } from 'src/core/router/paths';
import { NavigationLink } from 'src/modules/headerModule/components/NavigationLink';

const mobileNavigationLinksActiveStyle = {
  fontWeight: 800,
};

export const MobileNavigation: FC = () => {
  return (
    <Flex
      w="100%"
      p="15px"
      pt="5px"
      pl="20px"
      color="#fff"
      flexDir="column"
      bgColor="#2d3644"
      justifyContent="center"
      border={'1px solid #1d2634'}
    >
      <NavigationLink
        to={Path.MAIN}
        text="Главная"
        activeStyle={mobileNavigationLinksActiveStyle}
      />
      <NavigationLink
        to={Path.TUTORIAL}
        text="Как играть"
        activeStyle={mobileNavigationLinksActiveStyle}
      />
      <NavigationLink
        to={Path.PAYOUTS}
        text="Выплаты"
        activeStyle={mobileNavigationLinksActiveStyle}
      />
      <NavigationLink
        to={Path.TOP}
        text="Топ игроков"
        activeStyle={mobileNavigationLinksActiveStyle}
      />
    </Flex>
  );
};
