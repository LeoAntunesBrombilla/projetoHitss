import {Character} from '../types';

export class CharacterBuildMock {
  name: string = '';
  height: string = '';
  mass: string = '';
  hair_color: string = '';
  skin_color: string = '';
  eye_color: string = '';
  birth_year: string = '';
  gender: string = '';
  homeworld: string = '';
  films: string[] = [];
  species: string[] = [];
  vehicles: string[] = [];
  starships: string[] = [];
  created: string = '';
  edited: string = '';
  url: string = '';

  withName(name: string) {
    this.name = name;
    return this;
  }

  withHeight(height: string) {
    this.height = height;
    return this;
  }

  withMass(mass: string) {
    this.mass = mass;
    return this;
  }

  withHair_Color(hair_color: string) {
    this.hair_color = hair_color;
    return this;
  }

  withSkin_Color(skin_color: string) {
    this.skin_color = skin_color;
    return this;
  }

  withEye_Color(eye_color: string) {
    this.eye_color = eye_color;
    return this;
  }

  withBirth_Year(birth_year: string) {
    this.birth_year = birth_year;
    return this;
  }

  withGender(gender: string) {
    this.gender = gender;
    return this;
  }

  withHomeworld(homeworld: string) {
    this.homeworld = homeworld;
    return this;
  }

  withFilms(films: string[]) {
    this.films = films;
    return this;
  }

  withSpecies(species: string[]) {
    this.species = species;
    return this;
  }

  withVehicles(vehicles: string[]) {
    this.vehicles = vehicles;
    return this;
  }

  withStarships(starships: string[]) {
    this.starships = starships;
    return this;
  }

  withCreated(created: string) {
    this.created = created;
    return this;
  }

  withEdited(edited: string) {
    this.edited = edited;
    return this;
  }

  withUrl(url: string) {
    this.url = url;
    return this;
  }

  build = (): Character => {
    return {
      name: this.name,
      height: this.height,
      mass: this.mass,
      hair_color: this.hair_color,
      skin_color: this.skin_color,
      eye_color: this.eye_color,
      birth_year: this.birth_year,
      gender: this.gender,
      homeworld: this.homeworld,
      films: this.films,
      species: this.species,
      vehicles: this.vehicles,
      starships: this.starships,
      created: this.created,
      edited: this.edited,
      url: this.url,
    };
  };
}
