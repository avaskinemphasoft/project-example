import { TilingSprite, Application, TickerCallback, Container } from 'pixi.js';

import { createRoadContainer } from 'src/modules/carAndBetModule/graphics/roadUtils';
import { LocationType, TimeType } from 'src/modules/carAndBetModule/graphics/types';
import anime from 'animejs';

// Sprites
import SkyDay from 'src/assets/carAssets/locations/day/sky.png';
import SkyNight from 'src/assets/carAssets/locations/night/sky_night.png';
import SkyEvening from 'src/assets/carAssets/locations/evening/sky_evening.png';

import LocationsDay from 'src/assets/carAssets/locations/day/location elements.png';
import LocationsNight from 'src/assets/carAssets/locations/night/location elements_night.png';
import LocationsEvening from 'src/assets/carAssets/locations/evening/location elements_evening.png';

import CityRoadDay from 'src/assets/carAssets/locations/day/city_road_2.png';
import CityRoadNight from 'src/assets/carAssets/locations/night/city_road_2_night.png';
import CityRoadEvening from 'src/assets/carAssets/locations/evening/city_road_2_evening.png';

export class Row {
  ticker: TickerCallback<any>;
  timeType: TimeType;
  skySprite: TilingSprite;
  roadSpeed: number;
  roadSprite: TilingSprite;
  application: Application;
  rowContainer: Container;
  isTickerGoing: boolean;
  locationsSprite: TilingSprite;
  roadContainer: Container;
  lastRoad: Container;

  constructor(application: Application, timeType: TimeType = TimeType.DAY, stage: number) {
    this.timeType = timeType;
    this.application = application;
    this.roadSpeed = 10.0;
    this.skySprite = this.selectSkySprite();
    this.roadSprite = this.selectRoadSprite();
    this.locationsSprite = this.selectLocationsSprite();
    this.roadContainer = new Container();
    this.lastRoad = new Container();
    this.lastRoad.position.x = 0;
    this.ticker = () => {
      this.skySprite.tilePosition.x -= 0.3;
      this.locationsSprite.tilePosition.x -= 0.6;
      this.roadSprite.tilePosition.x -= 10.0;
      this.roadContainer.children.forEach((road) => {
        road.position.x -= 10.0;
        if (road.position.x < -2000) {
          this.roadContainer.removeChild(road);
          this.roadContainer.addChild(this.createRandomRoad());
        }
      });
    };
    // Using loader
    // this.application.loader.add(
    //   'city_lamp',
    //   '../../../assets/carAssets/locations/day/city_lamp.png'
    // );
    // this.application.loader.load((_loader, resources) => {
    //   resources.city_lamp.texture &&
    //     this.application.stage.addChild(Sprite.from(resources.city_lamp.texture));
    // });
    this.rowContainer = new Container();
    this.initContainer();

    this.isTickerGoing = false;
    this.addTicker(); // TODO remove when server is on
    if (stage === 1) {
      this.addTicker();
    }
  }

  private initContainer(): void {
    const road1: Container = this.createRandomRoad();
    const road2: Container = this.createRandomRoad();
    const road3: Container = this.createRandomRoad();
    console.log(road1.position.x, 'position 1');
    console.log(road1.width, 'width 1');
    console.log(road2.position.x, 'position 2');
    console.log(road2.width, 'width 2');
    console.log(road3.position.x, 'position 3');
    console.log(road3.width, 'width 3');
    this.roadContainer.addChild(road1, road2, road3);

    // this.rowContainer.addChild(this.skySprite, this.locationsSprite, this.roadSprite);
    this.rowContainer.addChild(this.skySprite, this.locationsSprite, this.roadContainer);
  }

  private createRandomRoad(): Container {
    const newRoad = createRoadContainer(
      this.timeType,
      Object.values(LocationType)[anime.random(0, 4)]
    );
    newRoad.position.x = this.lastRoad.position.x + this.lastRoad.width;
    this.lastRoad = newRoad;
    return newRoad;
  }

  private selectRoadSprite(): TilingSprite {
    let sprite;
    const scale = 35 / 45;
    switch (this.timeType) {
      case TimeType.DAY:
        sprite = TilingSprite.from(CityRoadDay, {
          width: this.application.screen.width / scale,
          height: 45,
        });
        break;
      case TimeType.EVENING:
        sprite = TilingSprite.from(CityRoadEvening, {
          width: this.application.screen.width / scale,
          height: 45,
        });
        break;
      case TimeType.NIGHT:
        sprite = TilingSprite.from(CityRoadNight, {
          width: this.application.screen.width / scale,
          height: 45,
        });
        break;
    }
    sprite.scale.set(scale, scale);
    sprite.position.y = 105;
    return sprite;
  }

  private selectLocationsSprite(): TilingSprite {
    let sprite;
    const scale = 105 / 117;
    switch (this.timeType) {
      case TimeType.DAY:
        sprite = TilingSprite.from(LocationsDay, {
          width: this.application.screen.width / scale,
          height: this.application.screen.height * (10 / 10),
        });
        break;
      case TimeType.EVENING:
        sprite = TilingSprite.from(LocationsEvening, {
          width: this.application.screen.width / scale,
          height: this.application.screen.height * (10 / 10),
        });
        break;
      case TimeType.NIGHT:
        sprite = TilingSprite.from(LocationsNight, {
          width: this.application.screen.width / scale,
          height: this.application.screen.height * (10 / 10),
        });
        break;
    }
    sprite.scale.set(scale, scale);
    return sprite;
  }

  private selectSkySprite(): TilingSprite {
    let sprite;
    switch (this.timeType) {
      case TimeType.DAY:
        sprite = TilingSprite.from(SkyDay, {
          width: this.application.screen.width,
          height: this.application.screen.height,
        });
        break;
      case TimeType.EVENING:
        sprite = TilingSprite.from(SkyEvening, {
          width: this.application.screen.width,
          height: this.application.screen.height,
        });
        break;
      case TimeType.NIGHT:
        sprite = TilingSprite.from(SkyNight, {
          width: this.application.screen.width,
          height: this.application.screen.height,
        });
        break;
    }
    return sprite;
  }

  private addTicker(): void {
    this.application.ticker.add(this.ticker);
    this.isTickerGoing = true;
  }

  private removeTicker(): void {
    this.application.ticker.remove(this.ticker);
    this.isTickerGoing = false;
  }

  updateSky(timeType: TimeType): void {
    this.timeType = timeType;
    this.skySprite = this.selectSkySprite();
    this.roadSprite = this.selectRoadSprite();
    this.locationsSprite = this.selectLocationsSprite();

    this.rowContainer.removeChildAt(0);
    this.rowContainer.removeChildAt(0);
    // this.rowContainer.removeChildAt(0);
    this.initContainer();
  }

  updateTicker(stage: number): void {
    if (stage === 1) {
      if (!this.isTickerGoing) {
        this.addTicker();
      }
    } else {
      if (this.isTickerGoing) {
        this.removeTicker();
      }
    }
  }
}
