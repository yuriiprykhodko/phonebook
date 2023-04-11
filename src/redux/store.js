//https://642573d19e0a30d92b3270a3.mockapi.io/:contacts

import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { contactsApi } from './contactsSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const initialFilter = '';
const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
setupListeners(store.dispatch);
