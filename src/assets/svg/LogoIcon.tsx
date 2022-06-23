import React, { FC } from 'react';
import { IconProps } from '@chakra-ui/icon/src/icon';
import { Icon } from '@chakra-ui/react';

type LogoIconProps = {
  color_1: string;
  color_2: string;
};

export const LogoIcon: FC<LogoIconProps & IconProps> = ({
  color_1 = 'white',
  color_2 = '#FB9F33',
  ...props
}) => (
  <Icon w="32px" h="32px" viewBox="0 0 32 32" color="none" {...props}>
    <circle cx="8" cy="8" r="8" fill={color_1} />
    <circle cx="24" cy="8" r="8" fill={color_1} />
    <circle cx="24" cy="24" r="8" fill={color_2} />
  </Icon>
);
