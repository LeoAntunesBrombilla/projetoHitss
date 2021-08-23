export interface People {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: [];
  species: [];
  vehicles: [];
  starshpis: [];
  created: string;
  edited: string;
  url: string;
}

export interface Peoples {
  [index: number]: {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: [];
    species: [];
    vehicles: [];
    starshpis: [];
    created: string;
    edited: string;
    url: string;
  };
}
