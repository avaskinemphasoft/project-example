import { Sprite, TickerCallback, Container, Application } from 'pixi.js';

import { CarType, TimeType, WheelType } from 'src/modules/carAndBetModule/graphics/types';

// Sprites
import DodgeWheelDay from 'src/assets/carAssets/cars/day/dodge/dodge_wheel_front.png';
import DodgeWheelNight from 'src/assets/carAssets/cars/night/dodge/dodge_wheel_night_front.png';
import DodgeWheelEvening from 'src/assets/carAssets/cars/evening/dodge/dodge_wheel_evening_front.png';
import DodgeWheelBackDay from 'src/assets/carAssets/cars/day/dodge/dodge_wheel_back.png';
import DodgeWheelBackNight from 'src/assets/carAssets/cars/night/dodge/dodge_wheel_night_back.png';
import DodgeWheelBackEvening from 'src/assets/carAssets/cars/evening/dodge/dodge_wheel_evening_back.png';

import NissanWheelDay from 'src/assets/carAssets/cars/day/nissan GT-R/nissan GT-R_wheel_front.png';
import NissanWheelNight from 'src/assets/carAssets/cars/night/nissan GT-R/nissan GT-R_wheel_night_front.png';
import NissanWheelEvening from 'src/assets/carAssets/cars/evening/nissan GT-R/nissan GT-R_wheel_evening_front.png';
import NissanWheelBackDay from 'src/assets/carAssets/cars/day/nissan GT-R/nissan GT-R_wheel_back.png';
import NissanWheelBackNight from 'src/assets/carAssets/cars/night/nissan GT-R/nissan GT-R_wheel_night_back.png';
import NissanWheelBackEvening from 'src/assets/carAssets/cars/evening/nissan GT-R/nissan GT-R_wheel_evening_back.png';

import ToyotaWheelDay from 'src/assets/carAssets/cars/day/toyota supra/toyota supra_wheel_front.png';
import ToyotaWheelNight from 'src/assets/carAssets/cars/night/toyota supra/toyota supra_wheel_night_front.png';
import ToyotaWheelEvening from 'src/assets/carAssets/cars/evening/toyota supra/toyota supra_wheel_evening_front.png';
import ToyotaWheelBackDay from 'src/assets/carAssets/cars/day/toyota supra/toyota supra_wheel_back.png';
import ToyotaWheelBackNight from 'src/assets/carAssets/cars/night/toyota supra/toyota supra_wheel_night_back.png';
import ToyotaWheelBackEvening from 'src/assets/carAssets/cars/evening/toyota supra/toyota supra_wheel_evening_back.png';

import MitsubishiWheelDay from 'src/assets/carAssets/cars/day/mitsubishi Eclipse/mitsubishi Eclipse_wheel_front.png';
import MitsubishiWheelNight from 'src/assets/carAssets/cars/night/mitsubishi Eclipse/mitsubishi Eclipse_wheel_night_front.png';
import MitsubishiWheelEvening from 'src/assets/carAssets/cars/evening/mitsubishi Eclipse/mitsubishi Eclipse_wheel_evening_front.png';
import MitsubishiWheelBackDay from 'src/assets/carAssets/cars/day/mitsubishi Eclipse/mitsubishi Eclipse_wheel_back.png';
import MitsubishiWheelBackNight from 'src/assets/carAssets/cars/night/mitsubishi Eclipse/mitsubishi Eclipse_wheel_night_back.png';
import MitsubishiWheelBackEvening from 'src/assets/carAssets/cars/evening/mitsubishi Eclipse/mitsubishi Eclipse_wheel_evening_back.png';

export class Wheel {
  carType: CarType;
  rotation: number;
  timeType: TimeType;
  isRolling: boolean;
  wheelType: WheelType;
  isUpdating: boolean;
  wheelSprite: Sprite;
  application: Application;
  rotationSpeed: number;
  wheelContainer: Container;
  newWheelSprite?: Sprite;
  wheelBackSprite: Sprite;
  wheelRollFunction: TickerCallback<any>;
  newWheelBackSprite?: Sprite;

  constructor(
    application: Application,
    carType: CarType = CarType.DODGE,
    timeType: TimeType = TimeType.DAY,
    wheelType: WheelType
  ) {
    this.application = application;
    this.carType = carType;
    this.rotation = 0;
    this.timeType = timeType;
    this.isRolling = false;
    this.wheelType = wheelType;
    this.isUpdating = false;
    this.rotationSpeed = 0.04;
    [this.wheelSprite, this.wheelBackSprite] = Wheel.createWheelSprites(carType, timeType);
    this.wheelRollFunction = this.createRollFunction();
    this.wheelContainer = new Container();
    this.setUpWheelContainer(this.wheelBackSprite, this.wheelSprite);
  }

  setRotationSpeed(moveSpeed: number): void {
    this.rotationSpeed =
      0.01 +
      (((moveSpeed / 45) * 35) / (this.wheelSprite.scale.x / 1.3)) *
        (this.wheelContainer.width / 150);
  }

  private static createWheelSprites(carType: CarType, timeType: TimeType): [Sprite, Sprite] {
    let wheelSprite: Sprite;
    let wheelBackSprite: Sprite;
    switch (carType) {
      case CarType.DODGE:
        switch (timeType) {
          case TimeType.DAY:
            wheelSprite = Sprite.from(DodgeWheelDay);
            wheelBackSprite = Sprite.from(DodgeWheelBackDay);
            break;
          case TimeType.EVENING:
            wheelSprite = Sprite.from(DodgeWheelEvening);
            wheelBackSprite = Sprite.from(DodgeWheelBackEvening);
            break;
          case TimeType.NIGHT:
            wheelSprite = Sprite.from(DodgeWheelNight);
            wheelBackSprite = Sprite.from(DodgeWheelBackNight);
            break;
        }
        break;
      case CarType.NISSAN:
        switch (timeType) {
          case TimeType.DAY:
            wheelSprite = Sprite.from(NissanWheelDay);
            wheelBackSprite = Sprite.from(NissanWheelBackDay);
            break;
          case TimeType.EVENING:
            wheelSprite = Sprite.from(NissanWheelEvening);
            wheelBackSprite = Sprite.from(NissanWheelBackEvening);
            break;
          case TimeType.NIGHT:
            wheelSprite = Sprite.from(NissanWheelNight);
            wheelBackSprite = Sprite.from(NissanWheelBackNight);
            break;
        }
        break;
      case CarType.TOYOTA:
        switch (timeType) {
          case TimeType.DAY:
            wheelSprite = Sprite.from(ToyotaWheelDay);
            wheelBackSprite = Sprite.from(ToyotaWheelBackDay);
            break;
          case TimeType.EVENING:
            wheelSprite = Sprite.from(ToyotaWheelEvening);
            wheelBackSprite = Sprite.from(ToyotaWheelBackEvening);
            break;
          case TimeType.NIGHT:
            wheelSprite = Sprite.from(ToyotaWheelNight);
            wheelBackSprite = Sprite.from(ToyotaWheelBackNight);
            break;
        }
        break;
      case CarType.MITSUBISHI:
        switch (timeType) {
          case TimeType.DAY:
            wheelSprite = Sprite.from(MitsubishiWheelDay);
            wheelBackSprite = Sprite.from(MitsubishiWheelBackDay);
            break;
          case TimeType.EVENING:
            wheelSprite = Sprite.from(MitsubishiWheelEvening);
            wheelBackSprite = Sprite.from(MitsubishiWheelBackEvening);
            break;
          case TimeType.NIGHT:
            wheelSprite = Sprite.from(MitsubishiWheelNight);
            wheelBackSprite = Sprite.from(MitsubishiWheelBackNight);
            break;
        }
        break;
    }
    wheelSprite.anchor.set(0.5, 0.5);
    wheelBackSprite.anchor.set(0.5, 0.5);
    return [wheelSprite, wheelBackSprite];
  }

  private createRollFunction(): TickerCallback<any> {
    return () => {
      this.rotation += this.rotationSpeed;
      if (this.rotation > Math.PI * 2) {
        this.rotation = 0;
      }
      this.wheelSprite.rotation = this.rotation;
      this.wheelBackSprite.rotation = this.rotation;
      if (this.newWheelSprite && this.newWheelBackSprite) {
        this.newWheelSprite.rotation = this.rotation;
        this.newWheelBackSprite.rotation = this.rotation;
      }
    };
  }

  private setUpWheelContainer(wheelBackSprite: Sprite, wheelSprite: Sprite): void {
    this.setUpPositions(wheelBackSprite, wheelSprite);
    this.wheelContainer.addChild(wheelBackSprite, wheelSprite);
  }

  private setUpPositions(wheelBackSprite: Sprite, wheelSprite: Sprite): void {
    switch (this.carType) {
      case CarType.DODGE:
        switch (this.wheelType) {
          case WheelType.BACK:
            wheelSprite.position.set(0, 6);
            wheelBackSprite.position.set(7, 0);
            // because anchor is 0.5, we need to additionally move sprites
            wheelSprite.position.x += 64;
            wheelSprite.position.y += 64;
            wheelBackSprite.position.x += 64;
            wheelBackSprite.position.y += 64;
            break;
          case WheelType.FRONT:
            wheelSprite.position.set(8, 5);
            wheelBackSprite.position.set(0, 0);
            // because anchor is 0.5, we need to additionally move sprites
            wheelSprite.position.x += 61;
            wheelSprite.position.y += 63;
            wheelBackSprite.position.x += 61;
            wheelBackSprite.position.y += 63;
            break;
        }
        break;
      case CarType.NISSAN:
        switch (this.wheelType) {
          case WheelType.BACK:
            wheelSprite.position.set(0, 8);
            wheelBackSprite.position.set(10, 0);
            // because anchor is 0.5, we need to additionally move sprites
            wheelSprite.position.x += 83;
            wheelSprite.position.y += 81;
            wheelBackSprite.position.x += 83;
            wheelBackSprite.position.y += 81;
            break;
          case WheelType.FRONT:
            wheelSprite.position.set(10, 8);
            wheelBackSprite.position.set(0, 0);
            // because anchor is 0.5, we need to additionally move sprites
            wheelSprite.position.x += 82;
            wheelSprite.position.y += 81;
            wheelBackSprite.position.x += 82;
            wheelBackSprite.position.y += 81;
            break;
        }
        break;
      case CarType.TOYOTA:
        switch (this.wheelType) {
          case WheelType.BACK:
            wheelSprite.position.set(0, 7);
            wheelBackSprite.position.set(9, 0);
            // because anchor is 0.5, we need to additionally move sprites
            wheelSprite.position.x += 75;
            wheelSprite.position.y += 70;
            wheelBackSprite.position.x += 75;
            wheelBackSprite.position.y += 70;
            break;
          case WheelType.FRONT:
            wheelSprite.position.set(12, 9);
            wheelBackSprite.position.set(0, 0);
            // because anchor is 0.5, we need to additionally move sprites
            wheelSprite.position.x += 75;
            wheelSprite.position.y += 70;
            wheelBackSprite.position.x += 75;
            wheelBackSprite.position.y += 70;
            break;
        }
        break;
      case CarType.MITSUBISHI:
        switch (this.wheelType) {
          case WheelType.BACK:
            wheelSprite.position.set(0, 8);
            wheelBackSprite.position.set(11, 0);
            // because anchor is 0.5, we need to additionally move sprites
            wheelSprite.position.x += 80;
            wheelSprite.position.y += 56;
            wheelBackSprite.position.x += 80;
            wheelBackSprite.position.y += 56;
            break;
          case WheelType.FRONT:
            wheelSprite.position.set(12, 9);
            wheelBackSprite.position.set(0, 0);
            // because anchor is 0.5, we need to additionally move sprites
            wheelSprite.position.x += 82;
            wheelSprite.position.y += 56;
            wheelBackSprite.position.x += 82;
            wheelBackSprite.position.y += 56;
            break;
        }
        break;
    }
  }

  updateWheelType(timeType: TimeType): void {
    this.timeType = timeType;
    const [newWheelSprite, newWheelBackSprite] = Wheel.createWheelSprites(this.carType, timeType);
    const wasRolling = this.isRolling;
    this.stopWheel();
    newWheelSprite.rotation = this.rotation;
    newWheelBackSprite.rotation = this.rotation;
    this.setUpWheelContainer(newWheelBackSprite, newWheelSprite);
    this.newWheelSprite = newWheelSprite;
    this.newWheelBackSprite = newWheelBackSprite;
    this.slowlyUpdateOpacity(newWheelSprite, newWheelBackSprite);
    if (wasRolling) {
      this.startWheel();
    }
  }

  private slowlyUpdateOpacity(newWheelSprite: Sprite, newWheelBackSprite: Sprite): void {
    newWheelSprite.alpha = 0;
    newWheelBackSprite.alpha = 0;
    const alphaDelta = 0.02;
    const updateOpacity = () => {
      if (newWheelSprite.alpha < 1) {
        this.wheelSprite.alpha -= alphaDelta;
        this.wheelBackSprite.alpha -= alphaDelta;
        newWheelSprite.alpha += alphaDelta;
        newWheelBackSprite.alpha += alphaDelta;
      } else {
        this.destroyWheel();
        this.wheelSprite = newWheelSprite;
        this.wheelBackSprite = newWheelBackSprite;
        this.newWheelSprite = undefined;
        this.newWheelBackSprite = undefined;
        this.application.ticker.remove(updateOpacity);
      }
    };
    this.application.ticker.add(updateOpacity);
  }

  private destroyWheel(): void {
    this.wheelSprite.destroy();
    this.wheelBackSprite.destroy();
  }

  startWheel(): void {
    this.isRolling = true;
    this.application.ticker.add(this.wheelRollFunction);
  }

  stopWheel(): void {
    this.isRolling = false;
    this.application.ticker.remove(this.wheelRollFunction);
  }
}
