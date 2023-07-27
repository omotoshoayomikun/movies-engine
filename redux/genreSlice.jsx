// reducers/genreReducer.js
import { createSlice } from '@reduxjs/toolkit';

const genreSlice = createSlice({
  name: 'genres',
  initialState: [],
  reducers: {
    selectGenres: (state, action) => {
      return action.payload;
    },
  },
});

export const { selectGenres } = genreSlice.actions;
export default genreSlice.reducer;
