//https://642573d19e0a30d92b3270a3.mockapi.io/:contacts

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createSlice, nanoid } from '@reduxjs/toolkit';
//import initialContacts from '../components/contacts.json';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const initialFilter = '';

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

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
const contactsReducer = contactSlice.reducer;

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
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};
const persistedContactsReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedContactsReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
