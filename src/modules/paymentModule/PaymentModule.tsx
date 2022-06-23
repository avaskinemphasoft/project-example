import React, { FC, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { IoMdClose } from 'react-icons/io';
import * as paymentManagerActions from 'src/managers/paymentManager/actions';
import { AvailablePaymentMethods } from 'src/modules/paymentModule/components/availablePaymentMethods/AvailablePaymentMethods';
import { useDispatch, useSelector } from 'react-redux';
import { ReplenishBalance } from 'src/modules/paymentModule/components/replenishBalance/ReplenishBalance';
import * as paymentManagerSelectors from 'src/managers/paymentManager/selectors';

export interface PaymentModuleProps {
  isOpen: any;
  onClose: any;
}

export const PaymentModule: FC<PaymentModuleProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const selectedPaymentMethod = useSelector(paymentManagerSelectors.selectCurrentPaymentMethod);

  useEffect(() => {
    dispatch(paymentManagerActions.getAvailablePaymentMethods());
  }, []);

  return (
    <>
      {/* TODO сделать обработку, когда прилетает ошибка с сервака и нет currencies, что-то типа модалки с "В данный момент оплата недоступна"*/}
      <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom" size="full">
        <ModalOverlay />
        <ModalContent background={'rgba(25, 40, 63, 0.8)'} backdropFilter={'blur(25px)'}>
          <ModalHeader />
          <ModalCloseButton boxSize="24px" background={'#3e4b53'} color="#fff" borderRadius="12px">
            <Icon as={IoMdClose} />
          </ModalCloseButton>
          <ModalBody>
            <Flex w="100%" h="100%">
              <AvailablePaymentMethods />
              <ReplenishBalance
                paymentMethod={selectedPaymentMethod.name}
                minAmount={selectedPaymentMethod.limits.min}
                maxAmount={selectedPaymentMethod.limits.max}
              />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
