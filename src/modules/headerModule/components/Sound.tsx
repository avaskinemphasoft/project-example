import React, { FC, useEffect, useState } from 'react';
import music from 'src/assets/music/justin_bieber-sorry.mp3';

import { Flex, Box } from '@chakra-ui/react';
import { SoundOnIcon } from 'src/assets/svg/SoundOnIcon';
import { SoundOffIcon } from 'src/assets/svg/SoundOffIcon';

const audio = new Audio(music);
audio.muted = true;

export const Sound: FC = () => {
  const [isSoundOn, setIsSoundOn] = useState(false); // change to false for not playing on page load
  const [isSoundReady, setIsSoundReady] = useState(false);
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);

  const playSound = () => {
    if (!isSoundPlaying) {
      unmuteSound();
      audio.play().then(() => setIsSoundPlaying(true));
    }
  };

  const unmuteSound = () => {
    if (audio.muted) {
      audio.muted = false;
    }
  };

  const muteSound = () => {
    if (!audio.muted) {
      audio.muted = true;
    }
  };

  useEffect(() => {
    audio.addEventListener('canplaythrough', () => {
      isSoundOn && playSound();
      setIsSoundReady(true);
    });
  }, []);

  useEffect(() => {
    isSoundOn ? unmuteSound() : muteSound();
    if (isSoundOn && !isSoundPlaying && isSoundReady) {
      playSound();
    }
  }, [isSoundOn]);

  return (
    <Box
      w="49px"
      h="44px"
      p="1px"
      ml={{ base: '6px', md: '16px' }}
      cursor="pointer"
      bgGradient="linear(142.69deg, rgba(255, 255, 255, 0.23) -0.45%, rgba(0, 0, 0, 0) 52.68%)"
      borderRadius="9px"
      onClick={() => {
        setIsSoundOn(!isSoundOn);
      }}
    >
      <Flex
        w="47px"
        h="42px"
        alignItems="center"
        borderRadius="9px"
        justifyContent="center"
        backgroundColor="rgba(0, 0, 0, 0.24)"
      >
        {isSoundOn ? <SoundOnIcon /> : <SoundOffIcon />}
      </Flex>
    </Box>
  );
};
