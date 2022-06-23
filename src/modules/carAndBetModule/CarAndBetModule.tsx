import React, { FC, useEffect, useState } from 'react';
import { Flex, Box, chakra, Text } from '@chakra-ui/react';

import anime from 'animejs';
import { CarRow } from 'src/modules/carAndBetModule/components/CarRow';
import { BetInputWrapper } from 'src/modules/carAndBetModule/components/BetInputWrapper';
import * as carModuleActions from 'src/managers/carManager/actions';
import { useDispatch, useSelector } from 'react-redux';
import * as CarManagerSelectors from 'src/managers/carManager/selectors';

const carNumbers = [0, 1, 2, 3];

export const CarAndBetModule: FC = () => {
  const dispatch = useDispatch();
  const announce: string = useSelector(CarManagerSelectors.selectAnnounce);
  const [lastAnnounce, setLastAnnounce] = useState('');

  useEffect(() => {
    dispatch(carModuleActions.createCarWSChannel());
    return () => {
      dispatch(carModuleActions.closeCarWsChannel());
    };
  }, []);

  useEffect(() => {
    if (announce.split(' ')[1] === 'Победитель') {
      anime({
        targets: '#announceBox',
        background: 'rgba(0, 0, 0, 0.8)',
        opacity: 1,
        duration: 1000,
        easing: 'easeInExpo',
      });
    }
    anime
      .timeline({ delay: announce.split(' ')[1] === 'Победитель' ? 1000 : 0 })
      .add({
        targets: '#lastAnnounceText',
        opacity: 0,
        scale: 3,
        duration: 500,
        easing: 'easeInExpo',
      })
      .add({
        targets: '#announceText',
        opacity: [0, 1],
        scale: [0.2, 1],
        duration: 300,
        complete: () => {
          setLastAnnounce(announce);
          anime
            .timeline()
            .add({
              targets: '#lastAnnounceText',
              scale: 1,
              duration: 10,
            })
            .add(
              {
                targets: '#lastAnnounceText',
                opacity: 1,
                duration: 10,
              },
              '+=50'
            )
            .add({
              targets: '#announceText',
              opacity: 0,
              duration: 10,
            });
        },
      });
    /*setLastAnnounce(announce);
    anime
      .timeline({ delay: 800 })
      .add({
        targets: '#lastAnnounceText',
        scale: 1,
        duration: 100,
      })
      .add(
        {
          targets: '#lastAnnounceText',
          opacity: 1,
          duration: 10,
        },
        '+=50'
      )
      .add({
        targets: '#announceText',
        opacity: 0,
        duration: 10,
      });*/
    if (announce.split(' ')[0] === 'Старт!') {
      anime({
        targets: '#announceBox',
        background: 'rgba(0, 0, 0, 0)',
        opacity: 0,
        duration: 1000,
        easing: 'easeInExpo',
      });
    }
  }, [announce]);

  useEffect(() => {
    if (announce === '') {
      anime({
        targets: '#announceBox',
        background: 'rgba(0, 0, 0, 0)',
        duration: 1500,
        easing: 'easeInExpo',
        delay: 2000,
      });
    }
  }, []);

  const announceTextProps = {
    w: 500,
    top: 'calc(50% - 20px)',
    left: 'calc(50% - 250px)',
    color: '#bbbbbb',
    opacity: 0,
    fontSize: '40px',
  };

  return (
    <Box w={{ base: '100%', sm: 'fit-content' }} pos={'relative'}>
      <Box id="announceBox" pos="absolute" w="100%" h="100%" bgColor={'rgba(0, 0, 0, 0.8)'}>
        <Text id="announceText" pos={'absolute'} textAlign={'center'} {...announceTextProps}>
          {announce}
        </Text>
        <Text id="lastAnnounceText" pos={'absolute'} textAlign={'center'} {...announceTextProps}>
          {lastAnnounce}
        </Text>
      </Box>
      {carNumbers.map((carNumber) => (
        <Flex key={carNumber} flexDir={'column'} flexWrap={'nowrap'}>
          <CarRow carNumber={carNumber} />
          <chakra.span display={{ base: 'block', sm: 'none' }}>
            <BetInputWrapper carNumber={carNumber} />
          </chakra.span>
        </Flex>
      ))}
    </Box>
  );
};
