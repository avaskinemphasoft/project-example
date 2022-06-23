import React, { FC } from 'react';
import { chakra } from '@chakra-ui/react';
import 'src/components/BackgroundImages/background_images.css';

export const BackgroundImages: FC = () => (
  <chakra.span zIndex={2} position={'absolute'} w={'100%'} overflow={'hidden'} minH={'100%'}>
    <chakra.span className="bg-img-engine" display={{ base: 'none', sm: 'block' }} />
    <chakra.span className="bg-img-wheel-2" display={{ base: 'none', sm: 'block' }} />
    <chakra.span className="bg-img-muffler" display={{ base: 'none', sm: 'block' }} />
    <chakra.span className="bg-img-vector-top-left" display={{ base: 'none', sm: 'block' }} />
    <chakra.span className="bg-img-vector-top-right" display={{ base: 'none', sm: 'block' }} />
  </chakra.span>
);
