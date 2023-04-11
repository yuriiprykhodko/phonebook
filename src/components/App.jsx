import { ContactForm } from './ContactForm/ContactForm';
import {ContactList} from './ContactList/ContactList'
import { Filter } from './Filter/Filter';
import { useFetchContactsQuery } from 'redux/contactsSlice';

 
export const App = () => {
  
  const { data:contacts, error, isLoading } = useFetchContactsQuery({ skip: false });
    return (
      <div>
     
     <h1>Phonebook</h1>
        <ContactForm items={contacts} />
     <h2>Contacts</h2>
        <Filter />
        <hr />
        <p> {isLoading && !error && <b>Request in progress...</b>}</p>
        <ContactList items={contacts} />
             
    </div>
  );
};
