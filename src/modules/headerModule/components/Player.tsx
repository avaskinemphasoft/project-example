import React, { FC } from 'react';
import { PlayerType } from 'src/modules/headerModule/types';
import { Avatar, Flex, Text } from '@chakra-ui/react';

export const Player: FC<PlayerType> = ({ playerData: { name, photo, money } }) => {
  return (
    <Flex
      ml="16px"
      cursor="pointer"
      userSelect="none"
      alignItems="center"
      borderRadius="9px"
      justifyContent="center"
    >
      <Avatar src={photo} w="31px" h="31px" mr="5px" borderRadius="9px" />
      <Flex flexDir="column">
        <Text fontSize="14px" lineHeight="18px" color="rgb(251, 157, 33)">
          {name}
        </Text>
        <Text fontSize="14px" lineHeight="18px" color="rgb(131, 144, 148)">
          {`${money}$`}
        </Text>
      </Flex>
    </Flex>
  );
};
