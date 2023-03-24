import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer, nanoid } from '@reduxjs/toolkit';
//import { useSelector } from 'react-redux';
import initialContacts from '../components/contacts.json';

const initialFilter = '';

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
    // const contacts = useSelector(state => state.contacts);
    // if (state.contacts.some(contact => contact.name === action.payload.name)) {
    //     alert(`${action.payload.name} is already contact`)
    //     return;
    // }
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

const contactsFilter = createReducer(initialFilter, {
  [setFilter]: (state, action) => (state = action.payload),
});

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: contactsFilter,
  },
});
