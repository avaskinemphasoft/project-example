import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { MainChat } from 'src/modules/chatModules/mainChat/MainChat';
import { BetsModule } from 'src/modules/betsModule/BetsModule';
import { Flex, Spacer } from '@chakra-ui/react';
import * as authManagerActions from 'src/managers/authManager/actions';
import * as mainChatManagerActions from 'src/managers/chatManager/mainChat/actions';
import { CarAndBetModule } from 'src/modules/carAndBetModule/CarAndBetModule';
import { BetResultsModule } from 'src/modules/betResultsModule/BetResultsModule';
import { HeatText } from 'src/components/HeatText';
import { WinText } from 'src/components/WinText';

export const MainPage: FC = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const urlParams = new URLSearchParams(search);
  const oauthCode = urlParams.get('code');

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    const userId = localStorage.getItem('user_id');
    if (jwt && userId) {
      dispatch(authManagerActions.isAuthorized(true));
      dispatch(authManagerActions.getUserInfo({ jwt, user: { id: parseInt(userId) } }));
    }
  }, []);

  useEffect(() => {
    dispatch(mainChatManagerActions.createMainChatWSChannel());
  }, []);

  useEffect(() => {
    oauthCode && dispatch(authManagerActions.vkOAuthToken(oauthCode));
  }, [oauthCode]);

  return (
    <Flex w="100%" h="100%" flexDir="column">
      <Flex
        w="100%"
        mt={{ base: '0', sm: '13px' }}
        flexWrap={'wrap'}
        // flexWrap={'wrap-reverse'}
        // alignItems={'flex-end'}
      >
        <BetsModule />
        <Spacer />
        <CarAndBetModule />
        <Spacer />
        <MainChat />
      </Flex>
      <Flex w="100%" mt="17px" alignItems={'flex-start'} justifyContent={'center'}>
        <HeatText />
        <BetResultsModule />
        <WinText />
      </Flex>
    </Flex>
  );
};
