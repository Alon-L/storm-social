import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import faqSectionReducer from '../features/faqSectionSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    faqSection: faqSectionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
