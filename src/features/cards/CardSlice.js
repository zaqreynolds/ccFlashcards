import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "cards",
  initialState: {
    cards: {}
  },
  reducers: {
    addCard: (state, action) => {
      const { cardId, front, back } = action.payload;
      state.cards[cardId] = {
        id: cardId,
        front: front,
        back: back
      };
    }
  }
};

export const cardsSlice = createSlice(options);

export const selectCards = (state) => state.cards.cards;

export const { addCard } = cardsSlice.actions;
export const cardsReducer = cardsSlice.reducer;
