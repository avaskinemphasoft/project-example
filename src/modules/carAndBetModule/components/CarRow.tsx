import React, { FC, useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import { CarsDataType } from 'src/managers/carManager/types';
import { CarRowGraphics } from 'src/modules/carAndBetModule/graphics';
import * as carManagerSelectors from 'src/managers/carManager/selectors';

const calcCanvasWidthAndGraphicsScale = (
  windowWidth: number
): { canvasWidth: number; graphicsScale: number } => {
  let width = (900 * (windowWidth - 100)) / 1440;
  if (windowWidth < 480) {
    width = windowWidth;
  }
  let scale = (width / 1100) * 0.6;
  if (scale > 0.22) {
    scale = 0.22;
  }
  return {
    canvasWidth: width,
    graphicsScale: scale,
  };
};

/*const calcGraphicsScale = (windowWidth: number): number => {
  let width = (900 * (windowWidth - 100)) / 1440;
  if (windowWidth < 480) {
    width = windowWidth;
  }
  let scale = (width / 1100) * 0.6;
  if (scale > 0.22) {
    scale = 0.22;
  }
  return scale;
};*/

type CarRowProps = {
  carNumber: number;
};

export const CarRow: FC<CarRowProps> = ({ carNumber }) => {
  const [graphics, setGraphics] = useState<CarRowGraphics>();
  const carsData: CarsDataType = useSelector(carManagerSelectors.selectCarsData);
  const isOpenCarWSChannel: boolean = useSelector(carManagerSelectors.selectIsOpenCarWSChannel);
  const [isGraphicsStarted, setIsGraphicsStarted] = useState(false);
  const { canvasWidth, graphicsScale } = calcCanvasWidthAndGraphicsScale(window.innerWidth);
  // console.log({ canvasWidth, graphicsScale });

  useEffect(() => {
    if (isOpenCarWSChannel && carsData && Object.keys(carsData).length > 0) {
      if (isGraphicsStarted && !!graphics) {
        graphics.update(carsData, canvasWidth, graphicsScale);
      } else {
        setGraphics(new CarRowGraphics(carNumber, carsData, graphicsScale));
        setIsGraphicsStarted(true);
      }
    }
  }, [carsData, isOpenCarWSChannel]);

  return (
    <Flex width={'100%'} height={140}>
      <canvas id={`CarsUI_${carNumber}`} width={canvasWidth} height={140} />
    </Flex>
  );
};
