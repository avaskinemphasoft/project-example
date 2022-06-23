import { Avatar, Box, Flex, Icon, Input, Text, chakra } from '@chakra-ui/react';
import React, { FC } from 'react';

export interface MessageProps {
  time: string;
  message: string;
  userName: string;
  userPhoto: string;
}

export const Message: FC<MessageProps> = ({ time, message, userName, userPhoto }) => {
  return (
    <Flex
      w="224px"
      h="93px"
      mt="9px"
      p="5px 8px 7px 5px"
      background="rgba(0, 0, 0, 0.24)"
      borderRadius="9px"
      backdropFilter="blur(12px)"
      flexDir="column"
    >
      <Flex w="100%" h="28px">
        <Avatar w="26px" h="26px" mr="8px" src={userPhoto} />
        <chakra.span fontSize="14px" color="#FFAE4E">
          {userName}
        </chakra.span>
      </Flex>
      <Flex w="100%" h="100%" justifyContent="space-between">
        <Flex
          w="70%"
          h="100%"
          ml="16%"
          alignItems="flex-start"
          color="#D4D4D4"
          fontSize="13px"
          justifyContent="center"
        >
          <chakra.span>{message}</chakra.span>
        </Flex>
        <Flex
          w="auto"
          h="100%"
          alignItems="flex-end"
          color="#CFCFCF"
          fontSize="9px"
          justifyContent="flex-end"
        >
          <chakra.span>{time}</chakra.span>
        </Flex>
      </Flex>
    </Flex>
  );
};
