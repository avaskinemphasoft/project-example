import { Application, Graphics } from 'pixi.js';

import { Car } from 'src/modules/carAndBetModule/graphics/carGraphics';
import { Row } from 'src/modules/carAndBetModule/graphics/rowGraphics';
import { CarsDataType } from 'src/managers/carManager/types';
import { CarType, TimeType } from 'src/modules/carAndBetModule/graphics/types';
import anime from 'animejs';

export let application: Application;
export const car_scale = 0.3;

let car: Car;
let car1: Car;
let car2: Car;
let car3: Car;

const chooseTimeType = (distance: number): TimeType => {
  if (distance < 33.333) {
    return TimeType.DAY;
  } else {
    if (distance < 66.666) {
      return TimeType.EVENING;
    } else {
      return TimeType.NIGHT;
    }
  }
};

const CAR_TYPES_ARRAY: CarType[] = [
  CarType.DODGE,
  CarType.MITSUBISHI,
  CarType.NISSAN,
  CarType.TOYOTA,
];

export class CarRowGraphics {
  car: Car;
  row: Row;
  scale: number;
  canvas: HTMLCanvasElement;
  timeType: TimeType;
  carNumber: number;
  application: Application;

  constructor(carNumber: number, carsData: CarsDataType, scale: number) {
    this.canvas = document.getElementById(`CarsUI_${carNumber}`) as HTMLCanvasElement;
    this.application = new Application({
      view: this.canvas,
      width: this.canvas.width,
      height: this.canvas.height,
    });

    this.scale = scale;
    this.carNumber = carNumber;

    this.application.renderer.backgroundColor = 0x3c3f41;
    // application.renderer.backgroundColor = '#33aa44';
    // application.renderer.backgroundAlpha = 0.1;

    this.timeType = chooseTimeType(carsData.cars[carNumber].distance);
    // this.timeType = TimeType.EVENING;

    this.car = new Car(this.application, scale, CAR_TYPES_ARRAY[carNumber], this.timeType, {
      stage: carsData.stage,
      boosted: carsData.cars[carNumber].boosted,
      distance: carsData.cars[carNumber].distance,
      totalBet: carsData.cars[carNumber].totalBet,
    });
    this.car.carContainer.position.y = 45;
    if (carNumber === 0) {
      this.car.carContainer.position.y = 55;
    }

    this.row = new Row(this.application, this.timeType, carsData.stage);
    this.row.locationsSprite.tilePosition.x -= anime.random(0, 5000);

    // this.application.stage.addChild(this.row.rowContainer);
    this.application.stage.addChild(this.row.rowContainer, this.car.carContainer);
    // this.application.stage.filters = [new BlurFilter()];
    // this.application.stage.scale.y = scale;
  }

  update(carsData: CarsDataType, canvasWidth: number, graphicsScale: number): void {
    this.canvas.width = canvasWidth;
    this.scale = graphicsScale;
    this.car.setScale(this.scale);
    const distance = carsData.cars[this.carNumber].distance;
    this.car.moveCar({
      stage: carsData.stage,
      boosted: carsData.cars[this.carNumber].boosted,
      distance: distance,
      totalBet: carsData.cars[this.carNumber].totalBet,
    });
    const lastTimeType: TimeType = this.timeType;
    if (distance < 33.333 && this.timeType === TimeType.NIGHT) {
      this.timeType = TimeType.DAY;
    }
    if (distance >= 33.333 && distance < 66.666 && this.timeType === TimeType.DAY) {
      this.timeType = TimeType.EVENING;
    }
    if (
      distance >= 66.666 &&
      (this.timeType === TimeType.EVENING || this.timeType === TimeType.DAY)
    ) {
      this.timeType = TimeType.NIGHT;
    }
    if (lastTimeType !== this.timeType) {
      this.row.updateSky(this.timeType);
    }
    this.row.updateTicker(carsData.stage);
    // TODO remove
    /*this.scale -= 0.001;
    if (this.scale < 0.15) {
      this.scale = 0.15;
    }
    this.car.setScale(this.scale);*/
    // -------------
  }
}

// v------------- OLD VERSION ---------------------------------------------------------v
export const startGraphics = (carsData: CarsDataType): void => {
  const canvas: HTMLCanvasElement = document.getElementById('CarsUI') as HTMLCanvasElement;
  application = new Application({ view: canvas, width: canvas.width, height: canvas.height });
  application.renderer.backgroundColor = 0x3c3f41;
  // application.renderer.backgroundColor = '#33aa44';
  // application.renderer.backgroundAlpha = 0.1;
  const timeType = chooseTimeType(carsData.cars[0].distance);
  car = new Car(application, car_scale, CarType.DODGE, timeType, {
    stage: carsData.stage,
    boosted: carsData.cars[0].boosted,
    distance: carsData.cars[0].distance,
    totalBet: carsData.cars[0].totalBet,
  });
  car1 = new Car(application, car_scale, CarType.MITSUBISHI, timeType, {
    stage: carsData.stage,
    boosted: carsData.cars[1].boosted,
    distance: carsData.cars[1].distance,
    totalBet: carsData.cars[1].totalBet,
  });
  car2 = new Car(application, car_scale, CarType.NISSAN, timeType, {
    stage: carsData.stage,
    boosted: carsData.cars[2].boosted,
    distance: carsData.cars[2].distance,
    totalBet: carsData.cars[2].totalBet,
  });
  car3 = new Car(application, car_scale, CarType.TOYOTA, timeType, {
    stage: carsData.stage,
    boosted: carsData.cars[3].boosted,
    distance: carsData.cars[3].distance,
    totalBet: carsData.cars[3].totalBet,
  });
  car.carContainer.position.y = 10;
  car1.carContainer.position.y = 150;
  car2.carContainer.position.y = 310;
  car3.carContainer.position.y = 470;
  application.stage.addChild(
    car.carContainer,
    car1.carContainer,
    car2.carContainer,
    car3.carContainer
  );
  drawLines();
  /*setTimeout(() => {
    const minus_width = canvas.width * 0.01;
    const minus_height = canvas.height * 0.01;
    let minus_scale = 0.01;
    setInterval(() => {
      canvas.width -= minus_width;
      canvas.height -= minus_height;
      application.stage.scale.set(1 - minus_scale, 1 - minus_scale);
      minus_scale += 0.01;
    }, 1000);
  }, 2000);*/
};

const drawLines = (): void => {
  const graphics = new Graphics();
  graphics.lineStyle(4, 0x999999);
  graphics.moveTo(0, 120).lineTo(1100, 120);
  graphics.moveTo(0, 290).lineTo(1100, 290);
  graphics.moveTo(0, 450).lineTo(1100, 450);

  application.stage.addChild(graphics);
};

export const updateGraphics = (carsData: CarsDataType): void => {
  car.moveCar({
    stage: carsData.stage,
    boosted: carsData.cars[0].boosted,
    distance: carsData.cars[0].distance,
    totalBet: carsData.cars[0].totalBet,
  });
  car1.moveCar({
    stage: carsData.stage,
    boosted: carsData.cars[1].boosted,
    distance: carsData.cars[1].distance,
    totalBet: carsData.cars[1].totalBet,
  });
  car2.moveCar({
    stage: carsData.stage,
    boosted: carsData.cars[2].boosted,
    distance: carsData.cars[2].distance,
    totalBet: carsData.cars[2].totalBet,
  });
  car3.moveCar({
    stage: carsData.stage,
    boosted: carsData.cars[3].boosted,
    distance: carsData.cars[3].distance,
    totalBet: carsData.cars[3].totalBet,
  });
};

export const stopGraphics = (): void => {
  if (application) {
    application.destroy();
  }
};
