import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface FaqSectionState {
  selected: string;
}

const initialState: FaqSectionState = {
  selected: 'Common Questions',
};

export const faqSectionSlice = createSlice({
  name: 'faqSection',
  initialState,
  reducers: {
    setSelected: (state, action: PayloadAction<string>) => {
      state.selected = action.payload;
    },
  },
});

export const { setSelected } = faqSectionSlice.actions;

export const getSelected = (state: RootState): string =>
  state.faqSection.selected;

export default faqSectionSlice.reducer;
