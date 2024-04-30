import { Itemprops } from "../types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Itemprops = {
  item: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.item = [...state.item, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.item.findIndex((basketItem)=> basketItem.id === action.payload.id)
      console.log(index);
      let newBasket = [...state.item];
    if(index >= 0 ){
      newBasket.splice(index,1)
    }
      state.item=newBasket
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
// export const selectItem = (state) => state.basket.item
export default basketSlice.reducer;
