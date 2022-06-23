import React, { FC } from 'react';

import { VkIcon } from 'src/assets/svg/VkIcon';
import { SteamIcon } from 'src/assets/svg/SteamIcon';
import { GoogleIcon } from 'src/assets/svg/GoogleIcon';
import { getVkOAuthUrl } from 'src/api/oauth/vk/urls';
import { OAuthMenuItem } from 'src/modules/headerModule/components/OAuthMenuItem';
import { BottomArrowIcon } from 'src/assets/svg/BottomArrowIcon';
import { OdnoklassnikiIcon } from 'src/assets/svg/OdnoklassnikiIcon';
import { Box, Menu, Flex, Text, chakra, MenuList, MenuButton } from '@chakra-ui/react';

export const OAuthMenu: FC = () => (
  <Menu>
    {({ isOpen }) => (
      <>
        <MenuButton as={Flex} h="44px" cursor="pointer">
          <Box
            p="1px"
            h="44px"
            ml="6px"
            bgGradient="linear(165.69deg, rgba(255, 255, 255, 0.23) -0.45%, rgba(0, 0, 0, 0) 30.68%)"
            borderRadius="9px"
          >
            <Flex
              p="10px 8px 10px 12px"
              h="42px"
              cursor="pointer"
              userSelect="none"
              alignItems="center"
              borderRadius="9px"
              justifyContent="center"
              background={'rgba(0, 0, 0, 0.24)'}
            >
              <Text fontSize="13px" lineHeight="16px">
                Войти&nbsp;
                <chakra.span display={{ base: 'none', sm: 'inline-block' }}>через</chakra.span>
              </Text>
              <SteamIcon ml="7px" display={{ base: 'none', sm: 'block' }} />
              <BottomArrowIcon
                ml="7px"
                transition="0.3s"
                transform={`rotate(-${isOpen ? 180 : 0}deg)`}
              />
            </Flex>
          </Box>
        </MenuButton>
        <MenuList bgColor={'#2d3644'} border={'1px solid #1d2634'} minWidth={{}}>
          <OAuthMenuItem text={'Steam'} href={getVkOAuthUrl()} Icon={SteamIcon} />
          <OAuthMenuItem text={'Вконтакте'} href={getVkOAuthUrl()} Icon={VkIcon} />
          <OAuthMenuItem text={'Google'} href={getVkOAuthUrl()} Icon={GoogleIcon} />
          <OAuthMenuItem text={'ОК'} href={getVkOAuthUrl()} Icon={OdnoklassnikiIcon} />
        </MenuList>
      </>
    )}
  </Menu>
);
