import React, { FC } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import * as paymentManagerTypes from 'src/managers/paymentManager/types/types';
import * as paymentManagerActions from 'src/managers/paymentManager/actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectedPaymentMethod } from 'src/managers/paymentManager/actions';

export interface PaymentMethodProps {
  name: string;
  isActive: boolean;
  setIsActive: any;
  selectedMethod: paymentManagerTypes.PaymentMethodType;
}

export const PaymentMethod: FC<PaymentMethodProps> = ({
  name,
  selectedMethod,
  isActive,
  setIsActive,
}) => {
  const dispatch = useDispatch();

  return (
    <Flex
      w="319px"
      h="45px"
      p="8px 16px"
      mb="14px"
      cursor="pointer"
      fontSize="29px"
      alignItems="center"
      userSelect="none"
      justifyContent="space-between"
      onClick={() => {
        dispatch(paymentManagerActions.selectedPaymentMethod(selectedMethod));
        setIsActive(selectedMethod.id);
      }}
      backgroundColor={isActive ? '#234965' : 'none'}
      borderRadius={isActive ? '6px' : 'none'}
      color={isActive ? '#FB9F33' : 'none'}
      _hover={{ color: '#FB9F33', background: '#234965', borderRadius: '6px' }}
    >
      <Box>
        <Text>{name}</Text>
      </Box>
    </Flex>
  );
};
