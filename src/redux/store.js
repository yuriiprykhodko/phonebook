//https://642573d19e0a30d92b3270a3.mockapi.io/:contacts
import { addContact, deleteContact, fetchContacts } from './operations';
import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
// import initialContacts from '../components/contacts.json';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// export const addContact = createAction(
//     'contacts/addContact',
//     ({ name, number }) => {
//         return {
//             payload: {
//                 id: nanoid(),
//                 name,
//                 number,
//             },
//         };
//     }
// );
// export const deleteContact = createAction('contacts/deleteContact');
// export const setFilter = createAction('contacts/setFilter');

// const contactsReducer = createReducer(initialContacts, {
//     [addContact]: (state, action) => {
//         return [...state, action.payload];
//     },
//     [deleteContact]: (state, action) => {
//         return state.filter(contact => contact.id !== action.payload);
//     },
// });

// const contactsFilter = createReducer(initialFilter, {
//     [setFilter]: (state, action) => (state = action.payload),
// });

// export const store = configureStore({
//     reducer: {
//         contacts: contactsReducer,
//         filter: contactsFilter,
//     },
// });
///////////
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,

    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },

    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
  },
});

//export const { addContact, deleteContact } = contactSlice.actions;
const contactsReducer = contactSlice.reducer;

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

/////////////////////////////////////////////
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts'],
// };
// const persistedContactsReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedContactsReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
// export const persistor = persistStore(store);
////////////-------//////
//1.
