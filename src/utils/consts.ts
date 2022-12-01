export interface IElement{
  id: number;
  name: string;
  age: number;
  description: string;
  points: number;
  imageUrl: string;
};

export interface ListState {
  list: IElement[];
};

export const pets: IElement[] = [
  {
    id: 1,
    name: "Ruka",
    age: 12,
    description: "The better pet in the world",
    points: 100,
    imageUrl: ""
  },
  {
    id: 2,
    name: "CHIMARU",
    age: 29,
    description: "the most wise pet",
    points: 67,
    imageUrl: ""
  },
  {
    id: 3,
    name: "OLECRAM",
    age: 18,
    description: "The most bored pet",
    points: 24,
    imageUrl: ""
  }
];

export const humans: IElement[] = [
  {
    id: 1,
    name: "Alberto",
    age: 90,
    description: "El hombre con más partidas ganadas de LOL",
    points: 278,
    imageUrl: ""
  },
  {
    id: 2,
    name: "Naruto",
    age: 29,
    description: "Hokage de la aldea de la oja",
    points: 167,
    imageUrl: ""
  },
  {
    id: 3,
    name: "Marchelo",
    age: 18,
    description: "The most bored person in the work",
    points: 151,
    imageUrl: ""
  }
];

export const amphibians: IElement[] = [
  {
    id: 1,
    name: "Pina",
    age: 24,
    description: "She never will forget her mother",
    points: 173,
    imageUrl: "https://www.gannett-cdn.com/presto/2022/04/24/NCOD/5f47dd56-e285-49d2-b1e0-d9b6e3db718f-a_Kentucky_Spring_Salamander_poses_for_the_writer._Jim_McCormac.jpg?width=660&height=458&fit=crop&format=pjpg&auto=webp"
  },
  {
    id: 2,
    name: "ROI",
    age: 90,
    description: "He likes the death",
    points: 671,
    imageUrl: "https://images7.memedroid.com/images/UPLOADED508/5fcf781554802.jpeg"
  },
  {
    id: 3,
    name: "Ratiña",
    age: 21,
    description: "He like to play fortnite",
    points: 90,
    imageUrl: "https://static.scientificamerican.com/sciam/cache/file/766BFBD4-F8A1-4B7D-8416A370010B5A88_source.jpg"
  }
];
