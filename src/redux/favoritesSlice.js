import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const food = action.payload; // Expecting the entire recipe object
      const existingIndex = state.favoriterecipes.findIndex(
        (item) => item.idFood === food.idFood // Assuming recipes have an 'idFood' property
      );
      if (existingIndex >= 0) {
        state.favoriterecipes.splice(existingIndex, 1); // Remove from favorites
      } else {
        state.favoriterecipes.push(food); // Add to favorites
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;