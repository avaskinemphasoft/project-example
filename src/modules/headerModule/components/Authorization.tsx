import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { VkIcon } from 'src/assets/svg/VkIcon';
import { OAuthMenu } from 'src/modules/headerModule/components/OAuthMenu';
import { getVkOAuthUrl } from 'src/api/oauth/vk/urls';
import { AiOutlineExport } from 'react-icons/all';
import * as authManagerActions from 'src/managers/authManager/actions';
import * as authManagerSelectors from 'src/managers/authManager/selectors';
import {
  Box,
  Link as ChakraLink,
  Menu,
  Flex,
  Text,
  Icon,
  Avatar,
  MenuList,
  MenuItem,
  MenuButton,
} from '@chakra-ui/react';

export const Authorization: FC = () => {
  const dispatch = useDispatch();
  const userProfileData = useSelector(authManagerSelectors.getUserProfileInfo);
  const isUserAuthorized = useSelector(authManagerSelectors.getIsAuthorized);

  return (
    <>
      {isUserAuthorized ? (
        <Menu>
          <MenuButton as={Flex} h="44px">
            <Flex
              p="7px"
              h="44px"
              ml="6px"
              cursor="pointer"
              userSelect="none"
              alignItems="center"
              borderRadius="9px"
              justifyContent="center"
              background={'rgb(97 156 217 / 24%)'}
            >
              <Avatar src={userProfileData.photo} w="31px" h="31px" mr="5px" borderRadius="9px" />
              <Text fontSize="13px" lineHeight="16px">
                {userProfileData.name}
              </Text>
            </Flex>
          </MenuButton>
          <MenuList bgColor={'#2d3644'} border={'1px solid #1d2634'}>
            <MenuItem
              onClick={() => {
                dispatch(authManagerActions.logOut());
              }}
              color={'#fff'}
              _focus={{ backgroundColor: 'inherit' }}
              _hover={{ backgroundColor: 'rgba(0, 0, 0, 0.24)' }}
            >
              <Icon as={AiOutlineExport} w={5} h={5} mr="6px" />
              <Text fontSize="16px" lineHeight="20px">
                Выйти
              </Text>
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <>
          <ChakraLink
            w="49px"
            h="44px"
            ml="6px"
            href={getVkOAuthUrl()}
            _focus={{ backgroundColor: 'rgba(255, 255, 255, 0.23)' }}
            transition="0.7s"
            borderRadius="9px"
          >
            <Box
              w="100%"
              h="100%"
              p="1px"
              bgGradient="linear(142.69deg, rgba(255, 255, 255, 0.23) -0.45%, rgba(0, 0, 0, 0) 52.68%)"
              borderRadius="9px"
            >
              <Flex
                w="47px"
                h="42px"
                alignItems="center"
                borderRadius="9px"
                justifyContent="center"
                backgroundColor="rgba(0, 0, 0, 0.24)"
              >
                <VkIcon />
              </Flex>
            </Box>
          </ChakraLink>
          <OAuthMenu />
        </>
      )}
    </>
  );
};
