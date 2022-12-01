import { PayloadAction } from "@reduxjs/toolkit";
import { IElement, ListState } from "../../../utils/consts";

const reducers = {
  updatePoints: (state: ListState, action: PayloadAction<number> ) => {
    state.list.map((curr: IElement) => {
      if (curr.id === action.payload) curr.points += 1;
      return curr;
    });
  }
};

export default reducers;