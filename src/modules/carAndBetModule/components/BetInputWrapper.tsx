import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as types from 'src/modules/betsModule/types';
import * as betsManagerActions from 'src/managers/betsManager/actions';
import { BetInput } from 'src/modules/betsModule/components/BetInput';

type BetInputWrapperProps = {
  carNumber: number;
};

export const BetInputWrapper: FC<BetInputWrapperProps> = ({ carNumber }) => {
  const dispatch = useDispatch();
  const [carBet, setCarBet] = useState('');

  const sendBetData = (betData: types.CarBetValue) => {
    dispatch(betsManagerActions.betOnCar(betData));
  };

  return (
    <BetInput
      onClick={() => sendBetData({ car: carNumber, amount: +carBet })}
      inputValue={carBet}
      setInputValue={setCarBet}
    />
  );
};
