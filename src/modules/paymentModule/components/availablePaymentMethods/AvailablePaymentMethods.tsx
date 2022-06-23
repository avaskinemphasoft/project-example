import React, { FC, useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import * as paymentManagerSelectors from 'src/managers/paymentManager/selectors';
import * as paymentManagerActions from 'src/managers/paymentManager/actions';
import { useDispatch, useSelector } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import * as paymentManagerTypes from 'src/managers/paymentManager/types/types';
import { PaymentMethod } from 'src/modules/paymentModule/components/availablePaymentMethods/components/PaymentMethod';

// export interface AvailablePaymentMethodProps {}

export const AvailablePaymentMethods: FC = () => {
  const dispatch = useDispatch();
  const paymentMethods = useSelector(paymentManagerSelectors.selectPaymentMethods);
  const [isActive, setIsActive] = useState(paymentMethods[0].id);

  useEffect(() => {
    dispatch(paymentManagerActions.selectedPaymentMethod(paymentMethods[0]));
  }, []);

  return (
    <Flex w="360px" maxHeight="820px" fontSize="29px" p="8px" flexDir="column" color="#fff">
      <PerfectScrollbar
        options={{
          wheelSpeed: 3.1,
          minScrollbarLength: 10,
        }}
      >
        {paymentMethods?.map((item: paymentManagerTypes.PaymentMethodType) => (
          <PaymentMethod
            name={item.name}
            key={item.id}
            selectedMethod={item}
            isActive={item.id === isActive}
            setIsActive={setIsActive}
          />
        ))}
      </PerfectScrollbar>
    </Flex>
  );
};
