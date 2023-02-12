import React, { Component } from 'react';



export class ContactForm extends Component {
    state = {
        name: '',
        number:''
    }
    handelChange = (e) => {
        const { name, value } = e.target;
        this.setState({[name]:value})
    }
    handelSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({ ...this.state })
        this.setState({ name: '', number:''})
    }
    render() {
        const { name,number } = this.state;
        return (
            <form onSubmit={this.handelSubmit}>
                <label htmlFor="">
                    Name
                    <input type="text" name= 'name' value={name} onChange={this.handelChange}/>
                </label>
                <label htmlFor="">
                    Number 
                     <input type="text" name='number' value={number} onChange={this.handelChange}/>
                </label>
                <button type='submit'>add contact</button>
            </form>
        )
    }
}
