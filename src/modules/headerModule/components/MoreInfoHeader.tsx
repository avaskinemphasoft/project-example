import React, { FC, useState } from 'react';

import { CloseButtonIcon } from 'src/assets/svg/CloseButtonIcon';
import { Box, Flex, chakra } from '@chakra-ui/react';

export const MoreInfoHeader: FC = () => {
  const [isInfoHeaderClose, setIsInfoHeaderClose] = useState(false);

  return (
    <Box
      w="100%"
      h={{ base: '44px', sm: '51px' }}
      p={{ base: '0 10px 0 8px', sm: '15px' }}
      color="#fff"
      background={'#222A36'}
      display={isInfoHeaderClose ? 'none' : 'flex'}
      alignItems="center"
    >
      <Flex
        w="100%"
        fontSize={{ base: '14px', sm: '16px' }}
        lineHeight={{ base: '16px', sm: '20px' }}
        justifyContent="center"
        alignItems="center"
      >
        <chakra.span mr="6px">
          Получи&nbsp;&nbsp;
          <chakra.span color="#FB9D21">50 слитков</chakra.span>
          &nbsp;&nbsp;на баланс прямо сейчас!&nbsp;
        </chakra.span>
        <chakra.span borderBottom="1px solid #7C6C6C" cursor="pointer" h={'fit-content'}>
          Подробнее
        </chakra.span>
      </Flex>
      <CloseButtonIcon
        cursor="pointer"
        onClick={() => setIsInfoHeaderClose(true)}
        ml={{ base: '12px', sm: '0' }}
      />
    </Box>
  );
};
