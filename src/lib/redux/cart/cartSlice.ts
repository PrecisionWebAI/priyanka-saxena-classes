import { CourseDataType } from "@/app/video-courses/page";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ICartState {
  itemsInCart: number;
  totalAmount: number;
  items: Array<CourseDataType>;
}

const initialState: ICartState = {
  itemsInCart: 0,
  totalAmount: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CourseDataType>) => {},
    removeItem: (state, action: PayloadAction<string>) => {
      let itemToRemove: CourseDataType | undefined = state.items.find(
        (i) => i.id === action.payload
      );
      if (itemToRemove) {
        state.itemsInCart =
          state.itemsInCart > 0
            ? state.itemsInCart - (itemToRemove ? 1 : 0)
            : 0;
        // state.totalAmount = state.totalAmount - itemToRemove.amount.
        state.items = state.items.filter((i) => i.id !== itemToRemove.id);
      }
    },
  },
});
