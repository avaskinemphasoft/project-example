import React, { FC, useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Icon,
  Input,
  Flex,
  Text,
  chakra,
  Button,
} from '@chakra-ui/react';
import { IoMdClose } from 'react-icons/io';
import * as paymentManagerActions from 'src/managers/paymentManager/actions';
import { AvailablePaymentMethods } from 'src/modules/paymentModule/components/availablePaymentMethods/AvailablePaymentMethods';
import { useDispatch } from 'react-redux';
import { ReplenishBalanceInput } from './components/ReplenishBalanceInput';
import { AmountLabels } from './components/amountLabels/AmountLabels';

export interface ReplenishBalanceProps {
  minAmount: number;
  maxAmount: number;
  paymentMethod: string;
}

export const ReplenishBalance: FC<ReplenishBalanceProps> = ({
  paymentMethod,
  maxAmount,
  minAmount,
}) => {
  const [value, setValue] = useState('');

  return (
    <Flex flexDir="column" ml="20%">
      <Flex flexDir="column">
        <Text fontSize="34px" color="#fff">
          Пополнить баланс
        </Text>
        <Text fontSize="29px" color="#FB9F33" lineHeight="49px" mt="8px">
          {paymentMethod}
        </Text>
        <chakra.span color="#fff" fontSize="18px" lineHeight="28px">
          Укажите сумму слитков
        </chakra.span>
      </Flex>
      <Flex flexDir="column">
        <ReplenishBalanceInput inputValue={value} setInputValue={setValue} />
        <AmountLabels />
      </Flex>
      <Flex flexDir="column" mt="45px">
        <Flex>
          <chakra.span color="#A3A3A3" fontSize="18px" lineHeight="28px">
            Сумма к оплате:
          </chakra.span>
          <chakra.span color="#fff" fontSize="18px" lineHeight="28px" ml="3px">
            {value ? value : 0} руб
          </chakra.span>
        </Flex>
        <Flex>
          <chakra.span color="#A3A3A3" fontSize="18px" lineHeight="28px">
            Будет зачислено:
          </chakra.span>
          <chakra.span color="#fff" fontSize="18px" lineHeight="28px" ml="3px">
            {value ? value : 0} слитков
          </chakra.span>
        </Flex>
      </Flex>
      <Flex mt="38px" fontSize="24px" color="#FB9F33" lineHeight="28px" cursor="pointer">
        У меня есть промокод
      </Flex>
      <Flex flexDir="column" mt="39px">
        <Flex>
          <chakra.span color="#fff" fontSize="18px" lineHeight="28px">
            Минимальная сумма пополнение:
          </chakra.span>
          <chakra.span color="#A3A3A3" fontSize="18px" lineHeight="28px" ml="3px">
            {minAmount}
          </chakra.span>
        </Flex>
        <Flex>
          <chakra.span color="#fff" fontSize="18px" lineHeight="28px">
            Максимальна сумма пополнения:
          </chakra.span>
          <chakra.span color="#A3A3A3" fontSize="18px" lineHeight="28px" ml="3px">
            {maxAmount}
          </chakra.span>
        </Flex>
      </Flex>
      <Button
        w={{ base: '50%', sm: '388px' }}
        h="55px"
        mt="28px"
        color="#fff"
        _hover={{}}
        cursor="pointer"
        display="flex"
        bgColor="#FB9F33"
        alignItems="center"
        borderRadius={{ sm: '6px' }}
        justifyContent="center"
        fontSize="18px"
        line-height="22px"
        // onClick={() => {
        //   onClick();
        //   setInputValue('');
        // }}
      >
        Продолжить
      </Button>
    </Flex>
  );
};
