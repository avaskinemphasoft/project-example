import React, { FC, useState } from 'react';

import { Box, Flex, chakra } from '@chakra-ui/react';
import { BetResultType } from 'src/modules/betResultsModule/types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { BottomArrowIcon } from 'src/assets/svg/BottomArrowIcon';

export interface BetResultItemProps {
  bets: BetResultType[];
  title: string;
  totalAmount: number;
  index: number;
}

export const BetResultItem: FC<BetResultItemProps> = ({ title, totalAmount, bets, index }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Flex
      w={{ base: '100%', sm: '208px' }}
      h={isOpen ? '245px' : '100px'}
      d="flex"
      background={'rgba(0, 0, 0, 0.24)'}
      backdropFilter="blur(12px)"
      borderRadius={{ base: 0, sm: '9px' }}
      flexDir="column"
      p="23px 23px 27px 23px"
      mr={{ base: 0, sm: index !== 3 ? '21px' : '0px' }}
    >
      <Flex h="82px" justifyContent="space-between">
        <Flex flexDir="column">
          <chakra.span fontSize="34px" lineHeight="27px" color="#fff">
            {title}
          </chakra.span>
          <chakra.span color="#FB9F33" fontSize="24px" display={isOpen ? '' : 'none'}>
            {totalAmount}$
          </chakra.span>
        </Flex>
        <BottomArrowIcon
          ml="7px"
          mt="20px"
          boxSize="16px"
          transition="0.3s"
          transform={`rotate(-${isOpen ? 180 : 0}deg)`}
          d={{ base: 'block', sm: 'none' }}
          onClick={() => setIsOpen(!isOpen)}
        />
      </Flex>
      <Box h="118px" w="100%" flexDir="column" mt="17px" display={isOpen ? 'flex' : 'none'}>
        <PerfectScrollbar
          style={{ height: '118px' }}
          options={{
            wheelSpeed: 3.1,
            minScrollbarLength: 10,
          }}
        >
          {bets?.map((item: BetResultType, index: number) => (
            <Flex
              key={item.value + index}
              w="100%"
              h="26px"
              fontSize="18px"
              borderBottom="1px solid #3C3C3D"
              alignItems="center"
              justifyContent="space-between"
            >
              <chakra.span color="#fff">{item.userName}</chakra.span>
              <chakra.span color="#A3A3A3">{item.value}</chakra.span>
            </Flex>
          ))}
        </PerfectScrollbar>
      </Box>
    </Flex>
  );
};
