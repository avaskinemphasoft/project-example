import React, { FC } from 'react';
import { Redirect, useParams } from 'react-router-dom';

import { Path } from 'src/core/router/paths';
import { error_code_regexp } from 'src/components/ErrorPage/utils';
import { ErrorPageParamsType } from 'src/components/ErrorPage';

export const ErrorPage: FC = () => {
  const { error_code } = useParams<ErrorPageParamsType>();

  return error_code.match(error_code_regexp) ? (
    <>This is {error_code} Error Page</>
  ) : (
    <Redirect to={Path.ERROR_404} />
  );
};
