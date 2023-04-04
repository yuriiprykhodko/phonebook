import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import {ContactList} from './ContactList/ContactList'
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';

 
// function useLocalStorage(key, defaultValue) {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);

//   return [state, setState];
// }


export const App = () => {
  
  const dispatch = useDispatch();
   const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
    return (
      <div>
     
     <h1>Phonebook</h1>
        <ContactForm />
     <h2>Contacts</h2>
        <Filter />
        <hr />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
             
    </div>
  );
};
//////////////////hooks////////////
// import {useState,useEffect} from 'react'
// import { ContactForm } from './ContactForm/ContactForm';
// import {ContactList} from './ContactList/ContactList'
// import { nanoid } from 'nanoid';
// import { Filter } from './Filter/Filter';
// import initialContacts from './contacts';


// function useLocalStorage(key, defaultValue) {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);

//   return [state, setState];
// }


// export const App = () => {
  
//   //const [contacts, setContacts] = useState(()=>JSON.parse(localStorage.getItem('contacts')??initialContacts));
//   const [filter, setFilter] = useState('');
//   const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);
  
//   const addContact = ({name,number}) => {
//      if (contacts.some(contact=>contact.name===name)) {
//         alert(`${name} is already contact`)
//         return;
//     }
//     const contact = {
//       id: nanoid(),
//       name,
//       number
//     }
//   setContacts([contact,...contacts])
    
//   }

  
//   const changeFilter = (e) => {

//     setFilter(e.target.value)
//   }
//   const getVisibleContacts = () => {
//     const newFilter = filter.toLowerCase();
//     return contacts.filter(contact => contact.name.toLowerCase().includes(newFilter));
//   }
//   const deleteContact = (contactId) => {
//     setContacts(prevState=>prevState.filter(contact => contact.id !== contactId))
//   }
//   useEffect(() => {
//       localStorage.setItem("contacts",JSON.stringify(contacts))
//   },[contacts])
  
//     return (
//     <div>
//      <h1>Phonebook</h1>
//         <ContactForm onSubmit={addContact} />

//   <h2>Contacts</h2>
//         <Filter onChange={changeFilter} />
//         <ContactList contacts={getVisibleContacts()} onDelete={deleteContact} />
//     </div>
//   );
// };
/////////////////////classes////////////////
//import React, { Component } from 'react'
// export class App extends Component{
//   state = {
//     contacts: initialContacts,
//     filter:''
// }
//   addContact = ({name,number}) => {
//      if (this.state.contacts.some(contact=>contact.name===name)) {
//         alert(`${name} is already contact`)
//         return;
//     }
//     const contact = {
//       id: nanoid(),
//       name,
//       number
//     }
//     this.setState(({contacts}) => {
     
//       return {contacts:[contact,...contacts]}
//     })
//   }
//   changeFilter = (e) => {
//     this.setState({filter:e.target.value})
//   }
//   getVisibleContacts = () => {
//     const { contacts, filter } = this.state;
//     const newFilter = filter.toLowerCase();
//     return contacts.filter(contact => contact.name.toLowerCase().includes(newFilter));
//   }
//   deleteContact = (contactId) => {
//     this.setState(prevState => {
//       return ({ contacts: prevState.contacts.filter(contact => contact.id !== contactId) })
//     });
//   };
//   componentDidMount() {
//     const contacts = localStorage.getItem("contacts");
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({contacts:parsedContacts})
//     }
//   }
//   componentDidUpdate(_, prevState) {
//     const { contacts } = this.state;
//     if (prevState.contacts !== contacts ) {
//       localStorage.setItem("contacts",JSON.stringify(contacts))
//     }
//   }
  
//   render() {
//      const filtredContacts = this.getVisibleContacts();
//     return (
//     <div>
//      <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.addContact} />

//   <h2>Contacts</h2>
//         <Filter onChange={this.changeFilter} />
//         <ContactList contacts={filtredContacts} onDelete={this.deleteContact} />
//     </div>
//   );
//   }
  
// };
