import { Sprite, Container } from 'pixi.js';

import CityRoadDay1 from 'src/assets/carAssets/locations/day/city_road_1.png';
import CityRoadDay2 from 'src/assets/carAssets/locations/day/city_road_2.png';
import CityRoadDay3 from 'src/assets/carAssets/locations/day/city_road_3.png';
import CityRoadDay4 from 'src/assets/carAssets/locations/day/city_road_4.png';
import DesertRoadDay1 from 'src/assets/carAssets/locations/day/desert_road_1.png';
import DesertRoadDay2 from 'src/assets/carAssets/locations/day/desert_road_2.png';
import DesertRoadDay3 from 'src/assets/carAssets/locations/day/desert_road_3.png';
import DesertRoadDay4 from 'src/assets/carAssets/locations/day/desert_road_4.png';
import SuburbRoadDay1 from 'src/assets/carAssets/locations/day/suburb_road_1.png';
import SuburbRoadDay2 from 'src/assets/carAssets/locations/day/suburb_road_2.png';
import SuburbRoadDay3 from 'src/assets/carAssets/locations/day/suburb_road_3.png';
import SuburbRoadDay4 from 'src/assets/carAssets/locations/day/suburb_road_4.png';
import SeasideRoadDay1 from 'src/assets/carAssets/locations/day/seaside_road_1.png';
import SeasideRoadDay2 from 'src/assets/carAssets/locations/day/seaside_road_2.png';
import SeasideRoadDay3 from 'src/assets/carAssets/locations/day/seaside_road_3.png';
import SeasideRoadDay4 from 'src/assets/carAssets/locations/day/seaside_road_4.png';

import CityRoadEvening1 from 'src/assets/carAssets/locations/evening/city_road_1_evening.png';
import CityRoadEvening2 from 'src/assets/carAssets/locations/evening/city_road_2_evening.png';
import CityRoadEvening3 from 'src/assets/carAssets/locations/evening/city_road_3_evening.png';
import CityRoadEvening4 from 'src/assets/carAssets/locations/evening/city_road_4_evening.png';
import DesertRoadEvening1 from 'src/assets/carAssets/locations/evening/desert_road_1_evening.png';
import DesertRoadEvening2 from 'src/assets/carAssets/locations/evening/desert_road_2_evening.png';
import DesertRoadEvening3 from 'src/assets/carAssets/locations/evening/desert_road_3_evening.png';
import DesertRoadEvening4 from 'src/assets/carAssets/locations/evening/desert_road_4_evening.png';
import SuburbRoadEvening1 from 'src/assets/carAssets/locations/evening/suburb_road_1_evening.png';
import SuburbRoadEvening2 from 'src/assets/carAssets/locations/evening/suburb_road_2_evening.png';
import SuburbRoadEvening3 from 'src/assets/carAssets/locations/evening/suburb_road_3_evening.png';
import SuburbRoadEvening4 from 'src/assets/carAssets/locations/evening/suburb_road_4_evening.png';
import SeasideRoadEvening1 from 'src/assets/carAssets/locations/evening/seaside_road_1_evening.png';
import SeasideRoadEvening2 from 'src/assets/carAssets/locations/evening/seaside_road_2_evening.png';
import SeasideRoadEvening3 from 'src/assets/carAssets/locations/evening/seaside_road_3_evening.png';
import SeasideRoadEvening4 from 'src/assets/carAssets/locations/evening/seaside_road_4_evening.png';

import CityRoadNight1 from 'src/assets/carAssets/locations/night/city_road_1_night.png';
import CityRoadNight2 from 'src/assets/carAssets/locations/night/city_road_2_night.png';
import CityRoadNight3 from 'src/assets/carAssets/locations/night/city_road_3_night.png';
import CityRoadNight4 from 'src/assets/carAssets/locations/night/city_road_4_night.png';
import DesertRoadNight1 from 'src/assets/carAssets/locations/night/desert_road_1_night.png';
import DesertRoadNight2 from 'src/assets/carAssets/locations/night/desert_road_2_night.png';
import DesertRoadNight3 from 'src/assets/carAssets/locations/night/desert_road_3_night.png';
import DesertRoadNight4 from 'src/assets/carAssets/locations/night/desert_road_4_night.png';
import SuburbRoadNight1 from 'src/assets/carAssets/locations/night/suburb_road_1_night.png';
import SuburbRoadNight2 from 'src/assets/carAssets/locations/night/suburb_road_2_night.png';
import SuburbRoadNight3 from 'src/assets/carAssets/locations/night/suburb_road_3_night.png';
import SuburbRoadNight4 from 'src/assets/carAssets/locations/night/suburb_road_4_night.png';
import SeasideRoadNight1 from 'src/assets/carAssets/locations/night/seaside_road_1_night.png';
import SeasideRoadNight2 from 'src/assets/carAssets/locations/night/seaside_road_2_night.png';
import SeasideRoadNight3 from 'src/assets/carAssets/locations/night/seaside_road_3_night.png';
import SeasideRoadNight4 from 'src/assets/carAssets/locations/night/seaside_road_4_night.png';

import TunnelExit from 'src/assets/carAssets/tonnel/tonnel_exite.png';
import TunnelEntrance from 'src/assets/carAssets/tonnel/tonnel_entrance.png';
import TunnelMiddlePart from 'src/assets/carAssets/tonnel/tonnel_sprite.png';

import { LocationType, TimeType } from 'src/modules/carAndBetModule/graphics/types';

const buildRoadContainer = (
  roadSprite1: Sprite,
  roadSprite2: Sprite,
  roadSprite3: Sprite,
  roadSprite4: Sprite
): Container => {
  const container: Container = new Container();
  const amountOfMiddleSprites = 3;

  roadSprite1.position.x = 0;
  roadSprite1.position.y = 143;
  container.addChild(roadSprite1);

  for (let i = 0; i < amountOfMiddleSprites; i++) {
    const sprite2: Sprite = Sprite.from(roadSprite2.texture);
    const sprite3: Sprite = Sprite.from(roadSprite3.texture);
    sprite2.position.x = 301 + (277 + 276) * i;
    sprite3.position.x = 301 + (277 + 276) * i + 277;
    sprite2.position.y = 143;
    sprite3.position.y = 143;
    container.addChild(sprite2, sprite3);
  }

  roadSprite4.position.x = 301 + (277 + 276) * amountOfMiddleSprites;
  roadSprite4.position.y = 143;
  container.addChild(roadSprite4);

  return container;
};

const addTunnelContainer = (roadContainer: Container): void => {
  const tunnelExitSprite: Sprite = Sprite.from(TunnelExit);
  const tunnelEntranceSprite: Sprite = Sprite.from(TunnelEntrance);
  const tunnelMiddlePartSprite: Sprite = Sprite.from(TunnelMiddlePart);
  const amountOfMiddleSprites = 8;

  tunnelEntranceSprite.position.x = 0;
  tunnelEntranceSprite.position.y = 0;
  roadContainer.addChild(tunnelEntranceSprite);

  for (let i = 0; i < amountOfMiddleSprites; i++) {
    const middleSprite: Sprite = Sprite.from(tunnelMiddlePartSprite.texture);
    middleSprite.position.x = 166 + 224 * i;
    middleSprite.position.y = 0;
    roadContainer.addChild(middleSprite);
  }

  tunnelExitSprite.position.x = 166 + 224 * amountOfMiddleSprites;
  roadContainer.addChild(tunnelExitSprite);
};

export const createRoadContainer = (timeType: TimeType, location: LocationType): Container => {
  let roadContainer: Container;
  switch (location) {
    case LocationType.CITY:
      switch (timeType) {
        case TimeType.DAY:
          roadContainer = buildRoadContainer(
            Sprite.from(CityRoadDay1),
            Sprite.from(CityRoadDay2),
            Sprite.from(CityRoadDay3),
            Sprite.from(CityRoadDay4)
          );
          break;
        case TimeType.EVENING:
          roadContainer = buildRoadContainer(
            Sprite.from(CityRoadEvening1),
            Sprite.from(CityRoadEvening2),
            Sprite.from(CityRoadEvening3),
            Sprite.from(CityRoadEvening4)
          );
          break;
        case TimeType.NIGHT:
          roadContainer = buildRoadContainer(
            Sprite.from(CityRoadNight1),
            Sprite.from(CityRoadNight2),
            Sprite.from(CityRoadNight3),
            Sprite.from(CityRoadNight4)
          );
          break;
      }
      break;
    case LocationType.DESERT:
      switch (timeType) {
        case TimeType.DAY:
          roadContainer = buildRoadContainer(
            Sprite.from(DesertRoadDay1),
            Sprite.from(DesertRoadDay2),
            Sprite.from(DesertRoadDay3),
            Sprite.from(DesertRoadDay4)
          );
          break;
        case TimeType.EVENING:
          roadContainer = buildRoadContainer(
            Sprite.from(DesertRoadEvening1),
            Sprite.from(DesertRoadEvening2),
            Sprite.from(DesertRoadEvening3),
            Sprite.from(DesertRoadEvening4)
          );
          break;
        case TimeType.NIGHT:
          roadContainer = buildRoadContainer(
            Sprite.from(DesertRoadNight1),
            Sprite.from(DesertRoadNight2),
            Sprite.from(DesertRoadNight3),
            Sprite.from(DesertRoadNight4)
          );
          break;
      }
      break;
    case LocationType.SEASIDE:
      switch (timeType) {
        case TimeType.DAY:
          roadContainer = buildRoadContainer(
            Sprite.from(SeasideRoadDay1),
            Sprite.from(SeasideRoadDay2),
            Sprite.from(SeasideRoadDay3),
            Sprite.from(SeasideRoadDay4)
          );
          break;
        case TimeType.EVENING:
          roadContainer = buildRoadContainer(
            Sprite.from(SeasideRoadEvening1),
            Sprite.from(SeasideRoadEvening2),
            Sprite.from(SeasideRoadEvening3),
            Sprite.from(SeasideRoadEvening4)
          );
          break;
        case TimeType.NIGHT:
          roadContainer = buildRoadContainer(
            Sprite.from(SeasideRoadNight1),
            Sprite.from(SeasideRoadNight2),
            Sprite.from(SeasideRoadNight3),
            Sprite.from(SeasideRoadNight4)
          );
          break;
      }
      break;
    case LocationType.SUBURB:
      switch (timeType) {
        case TimeType.DAY:
          roadContainer = buildRoadContainer(
            Sprite.from(SuburbRoadDay1),
            Sprite.from(SuburbRoadDay2),
            Sprite.from(SuburbRoadDay3),
            Sprite.from(SuburbRoadDay4)
          );
          break;
        case TimeType.EVENING:
          roadContainer = buildRoadContainer(
            Sprite.from(SuburbRoadEvening1),
            Sprite.from(SuburbRoadEvening2),
            Sprite.from(SuburbRoadEvening3),
            Sprite.from(SuburbRoadEvening4)
          );
          break;
        case TimeType.NIGHT:
          roadContainer = buildRoadContainer(
            Sprite.from(SuburbRoadNight1),
            Sprite.from(SuburbRoadNight2),
            Sprite.from(SuburbRoadNight3),
            Sprite.from(SuburbRoadNight4)
          );
          break;
      }
      break;
    case LocationType.TUNNEL:
      roadContainer = buildRoadContainer(
        Sprite.from(CityRoadDay1),
        Sprite.from(CityRoadDay2),
        Sprite.from(CityRoadDay3),
        Sprite.from(CityRoadDay4)
      );
      addTunnelContainer(roadContainer);
      break;
  }
  const scale = 140 / 188;
  roadContainer.scale.set(scale, scale);
  // console.log(roadContainer.width);

  return roadContainer;
};
