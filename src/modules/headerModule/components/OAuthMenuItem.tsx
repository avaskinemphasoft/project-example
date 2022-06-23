import React, { FC } from 'react';
import { Link as ChakraLink, Flex, Text, MenuItem } from '@chakra-ui/react';

type OAuthMenuItemProps = {
  Icon: any;
  text: string;
  href: string;
};

export const OAuthMenuItem: FC<OAuthMenuItemProps> = ({ Icon, text, href }) => (
  <MenuItem
    w="150px"
    as={Flex}
    color={'#fff'}
    _focus={{ backgroundColor: 'inherit' }}
    _hover={{ backgroundColor: 'rgba(0, 0, 0, 0.24)' }}
  >
    <ChakraLink href={href} w="100%" _hover={{ textDecoration: 'none' }}>
      <Flex>
        <Text fontSize="16px" lineHeight="20px">
          {text}
        </Text>
        <Icon ml="auto" color="#E4E7E8" />
      </Flex>
    </ChakraLink>
  </MenuItem>
);
