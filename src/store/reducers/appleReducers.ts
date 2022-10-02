import { createSlice } from '@reduxjs/toolkit';
import { IAppleTechnics } from './typeAppleReducers';

const initialState: IAppleTechnics = {
  technics: [],
};

export const technicsSlice = createSlice({
  name: 'appleTechnics',
  initialState,
  reducers: {
    addTechnics(state, action) {
      state.technics = action.payload;
    },
  },
});

export const { addTechnics } = technicsSlice.actions;
export default technicsSlice.reducer;
