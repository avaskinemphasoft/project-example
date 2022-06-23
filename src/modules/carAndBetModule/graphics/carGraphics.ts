import { Container, Sprite, Text, Application } from 'pixi.js'; // TODO remove Text

import { Wheel } from 'src/modules/carAndBetModule/graphics/wheelGrahics';
import { CarData, CarType, TimeType, WheelType } from 'src/modules/carAndBetModule/graphics/types';

// Sprites
import DodgeDay from 'src/assets/carAssets/cars/day/dodge/dodge.png';
import DodgeNight from 'src/assets/carAssets/cars/night/dodge/dodge_night.png';
import DodgeShadow from 'src/assets/carAssets/cars/day/dodge/dodge_shadow.png';
import DodgeEvening from 'src/assets/carAssets/cars/evening/dodge/dodge_evening.png';
import DodgeBlackPart from 'src/assets/carAssets/cars/day/dodge/dodge_black.png';

import NissanDay from 'src/assets/carAssets/cars/day/nissan GT-R/nissan GT-R.png';
import NissanNight from 'src/assets/carAssets/cars/night/nissan GT-R/nissan GT-R_night.png';
import NissanShadow from 'src/assets/carAssets/cars/day/nissan GT-R/nissan GT-R_shadow.png';
import NissanEvening from 'src/assets/carAssets/cars/evening/nissan GT-R/nissan GT-R_evening.png';
import NissanBlackPart from 'src/assets/carAssets/cars/day/nissan GT-R/nissan GT-R_black.png';

import ToyotaDay from 'src/assets/carAssets/cars/day/toyota supra/toyota supra.png';
import ToyotaNight from 'src/assets/carAssets/cars/night/toyota supra/toyota supra_night.png';
import ToyotaShadow from 'src/assets/carAssets/cars/day/toyota supra/toyota supra_shadow.png';
import ToyotaEvening from 'src/assets/carAssets/cars/evening/toyota supra/toyota supra.png';
import ToyotaBlackPart from 'src/assets/carAssets/cars/day/toyota supra/toyota supra_black.png';

import MitsubishiDay from 'src/assets/carAssets/cars/day/mitsubishi Eclipse/mitsubishi Eclipse.png';
import MitsubishiNight from 'src/assets/carAssets/cars/night/mitsubishi Eclipse/mitsubishi Eclipse_night.png';
import MitsubishiShadow from 'src/assets/carAssets/cars/day/mitsubishi Eclipse/mitsubishi Eclipse_shadow.png';
import MitsubishiEvening from 'src/assets/carAssets/cars/evening/mitsubishi Eclipse/mitsubishi Eclipse_evening.png';
import MitsubishiBlackPart from 'src/assets/carAssets/cars/day/mitsubishi Eclipse/mitsubishi Eclipse_black.png';

export class Car {
  scale: number;
  carData: CarData;
  carType: CarType;
  distance: number;
  timeType: TimeType;
  carSprite: Sprite;
  wheelBack: Wheel;
  moveSpeed: number;
  wheelFront: Wheel;
  application: Application;
  totalBetText: Text; // TODO remove
  shadowSprite: Sprite;
  carContainer: Container;
  blackPartSprite: Sprite;
  isWheelsStarted: boolean;
  expectedContainerPosition: number;
  hardcodedCarContainerWidth: number;

  constructor(
    application: Application,
    scale: number,
    carType: CarType = CarType.DODGE,
    timeType: TimeType = TimeType.DAY,
    carData: CarData
  ) {
    this.application = application;
    this.scale = scale;
    this.carData = carData;
    this.carType = carType;
    this.timeType = timeType;
    this.distance = 0;
    this.moveSpeed = 1;
    this.carSprite = Car.createCarSprite(carType, timeType);
    this.wheelBack = new Wheel(application, carType, timeType, WheelType.BACK);
    this.wheelFront = new Wheel(application, carType, timeType, WheelType.FRONT);
    this.totalBetText = new Text(`$${carData.totalBet}`); // TODO remove
    this.totalBetText.style.fill = '#ddd'; // TODO remove
    this.totalBetText.style.fontSize = '64px'; // TODO remove
    [this.shadowSprite, this.blackPartSprite] = Car.createShadowAndBlackPartSprites(carType);
    this.isWheelsStarted = false;
    this.expectedContainerPosition = 0;
    this.hardcodedCarContainerWidth = 0;
    this.carContainer = new Container();
    this.carContainer.scale.set(scale, scale);
    this.setUpCarContainer(true, this.carSprite);
    this.moveCar(carData);
    this.setUpMoveFunction();
  }

  public getCarContainerWidth(): number {
    return Math.max(this.hardcodedCarContainerWidth, this.carContainer.width);
  }

  private setUpCarContainer(isFirstSetUp: boolean, carSprite: Sprite): void {
    this.setUpPositions(carSprite);
    if (isFirstSetUp) {
      this.carContainer.addChild(
        this.shadowSprite,
        this.blackPartSprite,
        this.wheelBack.wheelContainer,
        this.wheelFront.wheelContainer,
        this.totalBetText // TODO remove
      );
    }
    this.carContainer.addChild(carSprite);
    if (isFirstSetUp) {
      this.carContainer.position.x = this.calcContainerPosition(this.carData);
    }
  }

  private setUpPositions(carSprite: Sprite): void {
    carSprite.position.set(0, 0);
    this.totalBetText.position.set(800, 10); // TODO remove
    switch (this.carType) {
      case CarType.DODGE:
        this.shadowSprite.position.set(5, 190);
        this.blackPartSprite.position.set(147, 170);
        this.wheelBack.wheelContainer.position.set(200, 184);
        this.wheelFront.wheelContainer.position.set(752, 185);
        this.totalBetText.position.set(800, -20); // TODO remove
        switch (this.timeType) {
          case TimeType.DAY:
            this.hardcodedCarContainerWidth = 1053 * this.scale;
            break;
          case TimeType.EVENING:
            this.hardcodedCarContainerWidth = 1251 * this.scale;
            break;
          case TimeType.NIGHT:
            this.hardcodedCarContainerWidth = 1301 * this.scale;
            break;
        }
        break;
      case CarType.NISSAN:
        this.shadowSprite.position.set(55, 210);
        this.blackPartSprite.position.set(65, 205);
        this.wheelBack.wheelContainer.position.set(107, 201);
        this.wheelFront.wheelContainer.position.set(723, 201);
        switch (this.timeType) {
          case TimeType.DAY:
            this.hardcodedCarContainerWidth = 986 * this.scale;
            break;
          case TimeType.EVENING:
            this.hardcodedCarContainerWidth = 1301 * this.scale;
            break;
          case TimeType.NIGHT:
            this.hardcodedCarContainerWidth = 1303 * this.scale;
            break;
        }
        break;
      case CarType.TOYOTA:
        this.shadowSprite.position.set(15, 225);
        this.blackPartSprite.position.set(150, 200);
        this.wheelBack.wheelContainer.position.set(171, 224);
        this.wheelFront.wheelContainer.position.set(737, 220);
        switch (this.timeType) {
          case TimeType.DAY:
            this.hardcodedCarContainerWidth = 999 * this.scale;
            break;
          case TimeType.EVENING:
            this.hardcodedCarContainerWidth = 1222 * this.scale;
            break;
          case TimeType.NIGHT:
            this.hardcodedCarContainerWidth = 1200 * this.scale;
            break;
        }
        break;
      case CarType.MITSUBISHI:
        this.shadowSprite.position.set(60, 240);
        this.blackPartSprite.position.set(110, 210);
        this.wheelBack.wheelContainer.position.set(150, 252);
        this.wheelFront.wheelContainer.position.set(722, 251);
        switch (this.timeType) {
          case TimeType.DAY:
            this.hardcodedCarContainerWidth = 990 * this.scale;
            break;
          case TimeType.EVENING:
            this.hardcodedCarContainerWidth = 1310 * this.scale;
            break;
          case TimeType.NIGHT:
            this.hardcodedCarContainerWidth = 1293 * this.scale;
            break;
        }
        break;
    }
  }

  private static createShadowAndBlackPartSprites(carType: CarType): [Sprite, Sprite] {
    let shadowSprite: Sprite;
    let blackPartSprite: Sprite;
    switch (carType) {
      case CarType.DODGE:
        shadowSprite = Sprite.from(DodgeShadow);
        blackPartSprite = Sprite.from(DodgeBlackPart);
        break;
      case CarType.NISSAN:
        shadowSprite = Sprite.from(NissanShadow);
        blackPartSprite = Sprite.from(NissanBlackPart);
        break;
      case CarType.TOYOTA:
        shadowSprite = Sprite.from(ToyotaShadow);
        blackPartSprite = Sprite.from(ToyotaBlackPart);
        break;
      case CarType.MITSUBISHI:
        shadowSprite = Sprite.from(MitsubishiShadow);
        blackPartSprite = Sprite.from(MitsubishiBlackPart);
        break;
    }
    return [shadowSprite, blackPartSprite];
  }

  private static createCarSprite(carType: CarType, timeType: TimeType): Sprite {
    let carSprite: Sprite;
    switch (carType) {
      case CarType.DODGE:
        switch (timeType) {
          case TimeType.DAY:
            carSprite = Sprite.from(DodgeDay);
            break;
          case TimeType.EVENING:
            carSprite = Sprite.from(DodgeEvening);
            break;
          case TimeType.NIGHT:
            carSprite = Sprite.from(DodgeNight);
            break;
        }
        break;
      case CarType.NISSAN:
        switch (timeType) {
          case TimeType.DAY:
            carSprite = Sprite.from(NissanDay);
            break;
          case TimeType.EVENING:
            carSprite = Sprite.from(NissanEvening);
            break;
          case TimeType.NIGHT:
            carSprite = Sprite.from(NissanNight);
            break;
        }
        break;
      case CarType.TOYOTA:
        switch (timeType) {
          case TimeType.DAY:
            carSprite = Sprite.from(ToyotaDay);
            break;
          case TimeType.EVENING:
            carSprite = Sprite.from(ToyotaEvening);
            break;
          case TimeType.NIGHT:
            carSprite = Sprite.from(ToyotaNight);
            break;
        }
        break;
      case CarType.MITSUBISHI:
        switch (timeType) {
          case TimeType.DAY:
            carSprite = Sprite.from(MitsubishiDay);
            break;
          case TimeType.EVENING:
            carSprite = Sprite.from(MitsubishiEvening);
            break;
          case TimeType.NIGHT:
            carSprite = Sprite.from(MitsubishiNight);
            break;
        }
        break;
    }
    return carSprite;
  }

  updateCarType(timeType: TimeType): void {
    this.timeType = timeType;
    const newCarSprite = Car.createCarSprite(this.carType, timeType);
    this.setUpCarContainer(false, newCarSprite);
    this.destroyCar();
    this.carSprite = newCarSprite;
    this.updateWheelsType(timeType);
  }

  setScale(scale: number): void {
    this.scale = scale;
    this.carContainer.scale.set(scale, scale);
    this.setUpPositions(this.carSprite);
  }

  private updateWheelsType(timeType: TimeType): void {
    this.wheelBack.updateWheelType(timeType);
    this.wheelFront.updateWheelType(timeType);
  }

  private destroyCar(): void {
    this.carSprite.destroy();
  }

  private setUpMoveFunction(): void {
    this.application.ticker.add(() => {
      if (this.carContainer.position.x < this.expectedContainerPosition) {
        this.moveSpeed =
          ((this.expectedContainerPosition - this.carContainer.position.x) /
            this.application.ticker.FPS) *
          3;
        this.wheelBack.setRotationSpeed(this.moveSpeed);
        this.wheelFront.setRotationSpeed(this.moveSpeed);
        if (this.carContainer.position.x + this.moveSpeed > this.expectedContainerPosition) {
          this.carContainer.position.x = this.expectedContainerPosition;
        } else {
          this.carContainer.position.x += this.moveSpeed;
        }
      }
    });
  }

  moveCar(carData: CarData): void {
    this.carData = carData;
    this.distance = carData.distance;
    this.totalBetText.text = `$${carData.totalBet}`; // TODO remove
    if (carData.boosted) {
      this.totalBetText.style.fill = 'red'; // TODO remove
    } else {
      this.totalBetText.style.fill = '#ddd'; // TODO remove
      if (carData.distance < 33.333) {
        this.totalBetText.style.fill = 'black';
      }
    }
    this.expectedContainerPosition = this.calcContainerPosition(carData);
    if (carData.distance < 33.333 && this.timeType === TimeType.NIGHT) {
      this.totalBetText.style.fill = '#888888';
      this.updateCarType(TimeType.DAY);
      // this.application.renderer.backgroundAlpha = 0.1;
    }
    if (carData.distance >= 33.333 && carData.distance < 66.666 && this.timeType === TimeType.DAY) {
      this.updateCarType(TimeType.EVENING);
      // this.application.renderer.backgroundAlpha = 0.3;
    }
    if (
      carData.distance >= 66.666 &&
      (this.timeType === TimeType.EVENING || this.timeType === TimeType.DAY)
    ) {
      this.updateCarType(TimeType.NIGHT);
      // this.application.renderer.backgroundAlpha = 0.5;
    }
    if (carData.stage === 1) {
      if (!this.isWheelsStarted) {
        this.startWheels();
      }
    } else {
      if (this.isWheelsStarted) {
        this.stopWheels();
      }
    }
    if (carData.stage === 0 && this.carContainer.position.x !== 0) {
      this.carContainer.position.x = 0;
    }
  }

  private calcContainerPosition(carData: CarData): number {
    return (
      (carData.distance *
        (this.application.screen.width -
          (this.getCarContainerWidth() - this.calcFlashlightsWidth()))) /
      100
    );
  }

  private calcFlashlightsWidth(): number {
    let flashlightsWidth = 0;
    switch (this.carType) {
      case CarType.DODGE:
        switch (this.timeType) {
          case TimeType.EVENING:
            flashlightsWidth = 262 * this.scale;
            break;
          case TimeType.NIGHT:
            flashlightsWidth = 312 * this.scale;
            break;
        }
        break;
      case CarType.NISSAN:
        switch (this.timeType) {
          case TimeType.EVENING:
            flashlightsWidth = 315 * this.scale;
            break;
          case TimeType.NIGHT:
            flashlightsWidth = 317 * this.scale;
            break;
        }
        break;
      case CarType.TOYOTA:
        switch (this.timeType) {
          case TimeType.EVENING:
            flashlightsWidth = 237 * this.scale;
            break;
          case TimeType.NIGHT:
            flashlightsWidth = 223 * this.scale;
            break;
        }
        break;
      case CarType.MITSUBISHI:
        switch (this.timeType) {
          case TimeType.EVENING:
            flashlightsWidth = 320 * this.scale;
            break;
          case TimeType.NIGHT:
            flashlightsWidth = 303 * this.scale;
            break;
        }
        break;
    }
    return flashlightsWidth;
  }

  startWheels(): void {
    this.isWheelsStarted = true;
    this.wheelBack.startWheel();
    this.wheelFront.startWheel();
  }

  stopWheels(): void {
    this.isWheelsStarted = false;
    this.wheelBack.stopWheel();
    this.wheelFront.stopWheel();
  }
}
