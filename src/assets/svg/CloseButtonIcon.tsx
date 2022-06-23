import React, { FC } from 'react';
import { Icon } from '@chakra-ui/react';
import { IconProps } from '@chakra-ui/icon/src/icon';

export const CloseButtonIcon: FC<IconProps> = (props) => (
  <Icon width="24px" height="24px" viewBox="0 0 24 24" color="none" {...props}>
    <circle cx="12" cy="12" r="12" fill="#3E4B53" />
    <path
      d="M8.46445 15.5355L15.5355 8.46448"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M8.46446 8.46445L15.5355 15.5355"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </Icon>
);
