import React, { FC } from 'react';
import { Flex, Text } from '@chakra-ui/react';

import { Player } from 'src/modules/headerModule/components/Player';
import { PlayerDataType } from 'src/modules/headerModule/types';

export const TopPlayers: FC = () => {
  // TODO add selector and api to get top players
  const topPlayers: PlayerDataType[] = [
    {
      name: 'Gusli201',
      money: 20,
    },
    {
      name: 'Gusli201',
      money: 140,
    },
    {
      name: 'Gusli201',
      money: 70,
    },
  ];

  return (
    <Flex
      h="44px"
      p="4px 30px 7px 15px"
      alignItems="center"
      borderRadius="9px"
      justifyContent="center"
      backgroundColor="rgba(0, 0, 0, 0.24)"
      display={{ base: 'none', xl: 'flex' }}
    >
      <Text fontSize="14px" lineHeight="18px" w="99px">
        Последние ТОП победители
      </Text>
      {topPlayers.map((player, index) => (
        <Player key={index} playerData={player} />
      ))}
    </Flex>
  );
};
