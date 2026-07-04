import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { statusFilters } from './constants';
import type { FilterState, FilterValue } from '@/types';

const initialState: FilterState = {
  state: statusFilters.all,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setStatusFilter(state, action: PayloadAction<FilterValue>) {
      state.state = action.payload;
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;

export const filtersReducer = filterSlice.reducer;
