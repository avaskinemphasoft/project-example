import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Message } from 'src/modules/chatModules/components/message';
import { OnlineIcon } from 'src/assets/svg/OnlineIcon';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { RiSendPlaneFill } from 'react-icons/ri';
import * as mainChatActions from 'src/managers/chatManager/mainChat/actions';
import * as mainChatSelectors from 'src/managers/chatManager/mainChat/selectors';
import * as authManagerSelectors from 'src/managers/authManager/selectors';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { Box, Button, Flex, Icon, Input, Text } from '@chakra-ui/react';
import 'react-perfect-scrollbar/dist/css/styles.css';
// import { useWindowScroll } from 'react-use';

export const MainChat: FC = () => {
  // const { y: pageYOffset } = useWindowScroll();
  const dispatch = useDispatch();
  const [isChatVisible, setIsChatVisible] = useState(true);
  const [value, setValue] = useState('');
  // const ws = useSelector(mainChatSelectors.getWs);
  const isAuthorized = useSelector(authManagerSelectors.getIsAuthorized);
  const onlineChatUsers = useSelector(mainChatSelectors.getOnlineUsers);
  const mainChatMessagesData = useSelector(mainChatSelectors.getMessageData);

  const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      dispatch(mainChatActions.sendMessage(value));
      setValue('');
    }
  };

  return isChatVisible ? (
    <Box
      w="274px"
      h="510px"
      background={'rgba(0, 0, 0, 0.24)'}
      backdropFilter="blur(12px)"
      p="5px 5px 17px 5px"
      borderRadius="9px"
    >
      <Flex w="100%" h="46px" color="#fff" justifyContent="space-between">
        <Flex
          w="19px"
          h="37px"
          cursor="pointer"
          alignItems="center"
          borderRadius="4px"
          backdropFilter="blur(12px)"
          justifyContent="center"
          onClick={() => setIsChatVisible(!isChatVisible)}
        >
          <Icon as={AiOutlineRight} boxSize="3" />
        </Flex>
        <Flex h="100%" w="90px" alignItems="center" mr="17px">
          <OnlineIcon />
          <Text m="0px 4px 0px 7px">Online</Text>
          <Text color="gray">{onlineChatUsers}</Text>
        </Flex>
      </Flex>
      <PerfectScrollbar
        style={{ height: '408px' }}
        options={{
          wheelSpeed: 3.1,
          minScrollbarLength: 10,
        }}
      >
        <Flex w="100%" h="408px" flexDir="column" alignItems="center" position="relative">
          {mainChatMessagesData?.map((item: any, index: number) => (
            <Message
              key={index}
              time={item.time}
              message={item.text}
              userName={item.userName}
              userPhoto={item.userPhoto}
            />
          ))}
        </Flex>
      </PerfectScrollbar>
      <Flex w="100%" h="56px" p="0px 21px">
        <Input
          w="180px"
          h="39px"
          borderRadius="6px 0px 0px 6px"
          background={'#fff'}
          placeholder="Сообщение"
          onChange={(event) => setValue(event.target.value)}
          value={value}
          onKeyDown={keyPressHandler}
        />
        <Button
          w="45px"
          h="39px"
          color="#fff"
          display="flex"
          background={'#FB9F33'}
          alignItems="center"
          borderRadius="0px 6px 6px 0px"
          justifyContent="center"
          _hover="none"
          onClick={() => {
            dispatch(mainChatActions.sendMessage(value));
            setValue('');
          }}
          disabled={!isAuthorized}
        >
          <Icon as={RiSendPlaneFill} boxSize="5" />
        </Button>
      </Flex>
    </Box>
  ) : (
    <Flex w="274px" justifyContent="end">
      <Box
        w="23px"
        h="510px"
        background={'rgba(0, 0, 0, 0.24)'}
        backdropFilter="blur(12px)"
        p="5px 5px 17px 5px"
        borderRadius="9px"
      >
        <Flex w="100%" h="46px" color="#fff" justifyContent="space-between">
          <Flex
            w="19px"
            h="37px"
            cursor="pointer"
            alignItems="center"
            borderRadius="4px"
            backdropFilter="blur(12px)"
            justifyContent="center"
            onClick={() => setIsChatVisible(!isChatVisible)}
          >
            <Icon as={AiOutlineLeft} boxSize="3" />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
