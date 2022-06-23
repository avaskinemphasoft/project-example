import React, { FC, useState } from 'react';

import { Logo } from 'src/modules/headerModule/components/Logo';
import { Sound } from 'src/modules/headerModule/components/Sound';
import { Navigation } from 'src/modules/headerModule/components/Navigation';
import { TopPlayers } from 'src/modules/headerModule/components/TopPlayers';
import { Flex, Spacer } from '@chakra-ui/react';
import { Authorization } from 'src/modules/headerModule/components/Authorization';
import { MoreInfoHeader } from 'src/modules/headerModule/components/MoreInfoHeader';
import { MobileNavigation } from 'src/modules/headerModule/components/MobileNavigation';

export const PageHeader: FC = () => {
  const [isHeaderDropdownShown, setIsHeaderDropdownShown] = useState(false);

  return (
    <Flex flexDir="column">
      <Flex
        h="fit-content"
        pl={{ base: '10px', lg: '33px' }}
        pt="14px"
        pr="16px"
        pb={{ base: '10px', md: '18px' }}
        color="#fff"
        background={'#2d3644'}
      >
        <Logo />
        <Navigation
          isHeaderDropdownShown={isHeaderDropdownShown}
          setIsHeaderDropdownShown={setIsHeaderDropdownShown}
        />
        <Spacer display={{ base: 'none', md: 'flex' }} />
        <TopPlayers />
        <Sound />
        <Authorization />
      </Flex>
      {isHeaderDropdownShown && <MobileNavigation />}
      <MoreInfoHeader />
    </Flex>
  );
};
