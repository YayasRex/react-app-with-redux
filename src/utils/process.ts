import { IElement } from "./consts";

export const getHigh = (list: IElement[]) => {
  return list.reduce((prev: IElement | null, curr) => {
    return curr.points > (prev?.points || 0) ? curr : prev;
  }, null);
};

export const getElement = (list: IElement[], id: number) => {
  return list.find((curr) => curr.id === id);
};