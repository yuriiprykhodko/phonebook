import React, { Component } from 'react'
import { ContactForm } from './ContactForm/ContactForm';






export class App extends Component{
  state = {
    contacts: [],
    filter:''
}

  render() {
    return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'left',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
     <h1>Phonebook</h1>
  <ContactForm />

  <h2>Contacts</h2>
  {/* <Filter ... /> */}
  {/* <ContactList ... /> */}
    </div>
  );
  }
  
};
