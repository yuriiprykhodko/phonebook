import React, { Component } from 'react'
import { ContactForm } from './ContactForm/ContactForm';
import {ContactList} from './ContactList/ContactList'





export class App extends Component{
  state = {
    contacts: [],
    filter:''
}
  onSubmit = (value) => {
    this.setState(prevState => {
      return {contacts:[value,...prevState.contacts]}
    })
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
        <ContactForm onSubmit={this.onSubmit} />

  <h2>Contacts</h2>
  {/* <Filter ... /> */}
  <ContactList contacts={this.state.contacts} />
    </div>
  );
  }
  
};
