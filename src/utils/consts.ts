export interface IElement{
  id: number;
  name: string;
  age: number;
  description: string;
  points: number;
};

export interface IListState {
  list: IElement[];
};

export const pets: IElement[] = [
  {
    id: 1,
    name: "Ruka",
    age: 12,
    description: "The better pet in the world",
    points: 100
  },
  {
    id: 2,
    name: "CHIMARU",
    age: 29,
    description: "the most wise pet",
    points: 67
  },
  {
    id: 3,
    name: "OLECRAM",
    age: 18,
    description: "The most bored pet",
    points: 24
  }
];

export const humans: IElement[] = [
  {
    id: 1,
    name: "Alberto",
    age: 90,
    description: "El hombre con más partidas ganadas de LOL",
    points: 278
  },
  {
    id: 2,
    name: "Naruto",
    age: 29,
    description: "Hokage de la aldea de la oja",
    points: 167
  },
  {
    id: 3,
    name: "Marchelo",
    age: 18,
    description: "The most bored person in the work",
    points: 151
  }
];

export const amphibians: IElement[] = [
  {
    id: 1,
    name: "Pina",
    age: 24,
    description: "She never will forget her mother",
    points: 173
  },
  {
    id: 2,
    name: "ROI",
    age: 90,
    description: "He likes the death",
    points: 671
  },
  {
    id: 3,
    name: "Ratiña",
    age: 21,
    description: "He like to play fortnite",
    points: 90
  }
];
