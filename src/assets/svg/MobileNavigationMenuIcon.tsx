import React, { FC } from 'react';
import { Icon } from '@chakra-ui/react';
import { IconProps } from '@chakra-ui/icon/src/icon';

export const MobileNavigationMenuIcon: FC<IconProps> = (props) => (
  <Icon w="15px" h="12px" viewBox="0 0 15 12" {...props}>
    <rect width="15" height="2" fill="white" />
    <rect y="5" width="15" height="2" fill="white" />
    <rect y="10" width="15" height="2" fill="white" />
  </Icon>
);
