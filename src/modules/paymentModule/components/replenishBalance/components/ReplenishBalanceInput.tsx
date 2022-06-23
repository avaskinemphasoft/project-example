import React, { Dispatch, FC, SetStateAction } from 'react';
import { Button, Flex, Input } from '@chakra-ui/react';

export type ReplenishBalanceInput = {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
};

export const ReplenishBalanceInput: FC<ReplenishBalanceInput> = ({ inputValue, setInputValue }) => {
  return (
    <Flex h="50px">
      <Button
        w={{ base: '50%', sm: '50px' }}
        h="46px"
        color="#fff"
        _hover={{}}
        display="flex"
        bgColor="#FB9F33"
        alignItems="center"
        borderRadius={{ sm: '6px' }}
        justifyContent="center"
        // onClick={() => {
        //   onClick();
        //   setInputValue('');
        // }}
      >
        -
      </Button>
      <Input
        w={{ base: '50%', sm: '276px' }}
        h="46px"
        borderRadius={{ sm: '6px' }}
        type="number"
        bgColor="#fff"
        mr={{ sm: '5px' }}
        ml={{ sm: '5px' }}
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
      />
      <Button
        w={{ base: '50%', sm: '50px' }}
        h="46px"
        color="#fff"
        _hover={{}}
        display="flex"
        bgColor="#FB9F33"
        alignItems="center"
        borderRadius={{ sm: '6px' }}
        justifyContent="center"
        // onClick={() => {
        //   onClick();
        //   setInputValue('');
        // }}
      >
        +
      </Button>
    </Flex>
  );
};
