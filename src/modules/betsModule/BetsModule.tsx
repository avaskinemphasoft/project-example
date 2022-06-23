import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import * as types from 'src/modules/betsModule/types';
import { BetInput } from 'src/modules/betsModule/components/BetInput';
import { Flex, Text, useDisclosure, chakra } from '@chakra-ui/react';
import * as betsManagerActions from 'src/managers/betsManager/actions';
import { PaymentModule } from 'src/modules/paymentModule/PaymentModule';

export const BetsModule: FC = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [firstCarBet, setFirstCarBet] = useState('');
  const [secondCarBet, setSecondCarBet] = useState('');
  const [thirdCarBet, setThirdCarBet] = useState('');
  const [fourthCarBet, setFourthCarBet] = useState('');

  const sendBetData = (betData: types.CarBetValue) => {
    dispatch(betsManagerActions.betOnCar(betData));
  };

  return (
    <Flex
      w={250}
      pl="39px"
      pos={'relative'}
      flexDir="column"
      display={{ base: 'none', sm: 'flex' }}
    >
      <chakra.span className="bg-img-bets-arrow" />
      <Text fontSize="36px" lineHeight="28px" color="#fff" mb="8px">
        Ставки
      </Text>
      <Text fontSize="18px" lineHeight="22px" color="#FB9F33">
        На любую машину
      </Text>
      <Text fontSize="18px" lineHeight="22px" color="#FB9F33" mb="14px">
        сколько угодно раз
      </Text>
      <BetInput
        onClick={onOpen}
        // onClick={() => sendBetData({ car: 0, amount: +firstCarBet })}
        inputValue={firstCarBet}
        setInputValue={setFirstCarBet}
      />
      <BetInput
        onClick={() => sendBetData({ car: 1, amount: +secondCarBet })}
        inputValue={secondCarBet}
        setInputValue={setSecondCarBet}
      />
      <BetInput
        onClick={() => sendBetData({ car: 2, amount: +thirdCarBet })}
        inputValue={thirdCarBet}
        setInputValue={setThirdCarBet}
      />
      <BetInput
        onClick={() => sendBetData({ car: 3, amount: +fourthCarBet })}
        inputValue={fourthCarBet}
        setInputValue={setFourthCarBet}
        carNumber={3}
      />
      <PaymentModule isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};
