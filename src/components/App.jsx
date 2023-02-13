import React, { Component } from 'react'
import { ContactForm } from './ContactForm/ContactForm';
import {ContactList} from './ContactList/ContactList'
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import initialContacts from './contacts';


export class App extends Component{
  state = {
    contacts: initialContacts,
    filter:''
}
  addContact = ({name,number}) => {
     if (this.state.contacts.some(contact=>contact.name===name)) {
        alert(`${name} is already contact`)
        return;
    }
    const contact = {
      id: nanoid(),
      name,
      number
    }
    this.setState(({contacts}) => {
     
      return {contacts:[contact,...contacts]}
    })
  }
  changeFilter = (e) => {
    this.setState({filter:e.target.value})
  }
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const newFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(newFilter));
  }
  deleteContact = (contactId) => {
    this.setState(prevState => {
      return ({ contacts: prevState.contacts.filter(contact => contact.id !== contactId) })
    });
  };
  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({contacts:parsedContacts})
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts ) {
      localStorage.setItem("contacts",JSON.stringify(contacts))
    }
  }
  
  render() {
     const filtredContacts = this.getVisibleContacts();
    return (
    <div>
     <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

  <h2>Contacts</h2>
        <Filter onChange={this.changeFilter} />
        <ContactList contacts={filtredContacts} onDelete={this.deleteContact} />
    </div>
  );
  }
  
};
