import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer, nanoid } from '@reduxjs/toolkit';
import initialContacts from '../components/contacts.json';

export const addContact = createAction(
  'contacts/addContact',
  ({ name, number }) => {
    return {
      payload: {
        id: nanoid(),
        name,
        number,
      },
    };
  }
);
export const deleteContact = createAction('contacts/deleteContact');
export const setFilter = createAction('contacts/setFilter');

const contactsReducer = createReducer(initialContacts, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
  [setFilter]: (state, action) => (state.filter = action.payload),
});
export const store = configureStore({
  reducer: {
    // myValue: myReducer,
    contacts: contactsReducer,
    filter: '',
  },
});
