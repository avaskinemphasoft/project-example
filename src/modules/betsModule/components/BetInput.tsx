import React, { Dispatch, FC, SetStateAction } from 'react';
import { Button, Flex, Input } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import * as authManagerSelectors from 'src/managers/authManager/selectors';

export type BetInputType = {
  carNumber?: number;
  onClick: () => void;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
};

export const BetInput: FC<BetInputType> = ({ inputValue, setInputValue, onClick, carNumber }) => {
  const getIsAuthorized = useSelector(authManagerSelectors.getIsAuthorized);

  return (
    <Flex mb={{ sm: carNumber !== 3 ? '89px' : '0px' }}>
      <Input
        w={{ base: '48%', sm: '84px' }}
        h={{ base: '44px', sm: '39px' }}
        borderRadius={{ sm: '6px' }}
        type="number"
        bgColor="#fff"
        mr={{ sm: '5px' }}
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
      />
      <Button
        w={{ base: '52%', sm: 'fit-content' }}
        p={{ base: '0', sm: '10px 11px 12px 12px' }}
        h={{ base: '44px', sm: 'fit-content' }}
        color="#fff"
        _hover={{}}
        display="flex"
        bgColor="#FB9F33"
        alignItems="center"
        borderRadius={{ sm: '6px' }}
        justifyContent="center"
        fontSize={'14px'}
        lineHeight={'17px'}
        onClick={() => {
          onClick();
          setInputValue('');
        }}
        disabled={!getIsAuthorized}
      >
        Сделать ставку
      </Button>
    </Flex>
  );
};
