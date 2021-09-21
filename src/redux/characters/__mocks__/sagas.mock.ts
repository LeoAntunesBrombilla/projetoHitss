//@ts-nocheck
import {CharacterBuildMock} from './CharacterBuildMock.mock';

export const firstCharacter = () =>
  new CharacterBuildMock()
    .withName('Luke')
    .withHeight('172')
    .withMass('77')
    .withHair_Color('blond')
    .withEye_Color('blue')
    .withBirth_Year('19BBY')
    .withGender('male')
    .withHomeworld('https://swapi.dev/api/planets/1/')
    .withFilms([
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/6/',
    ])
    .withSpecies([])
    .withVehicles([
      'https://swapi.dev/api/vehicles/14/',
      'https://swapi.dev/api/vehicles/30/',
    ])
    .withStarships([
      'https://swapi.dev/api/starships/12/',
      'https://swapi.dev/api/starships/22/',
    ])
    .withCreated('2014-12-09T13:50:51.644000Z')
    .withEdited('2014-12-20T21:17:56.891000Z')
    .withUrl('https://swapi.dev/api/people/1/');
