//import React, { Component } from 'react';
import { Formik, Form,Field,ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { addContact } from '../../redux/store';

let schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(9).max(9).required(),
});

const FormError = ({ name }) => {
    if (name==='name') {
        return (
        <ErrorMessage name={name} render={message => <div>{message}</div>} />
    )
    }
    return (
        <ErrorMessage name={name} render={msg => <div>{'number look like 000-00-00'}</div>} />
    )
}

const initialValues = {
    name: '',
   number:''
}

export const ContactForm=()=>{
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);
    const handleSubmit = (values, { resetForm }) => {
             
        if (contacts.some(contact => contact.name === values.name)) {
            alert(`${values.name} is already contact`)
            return;
        }
            dispatch(addContact(values));
            resetForm();
    }
    return (
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema} >
            <Form>
                <label htmlFor="name">
                    Name
                    <Field type="text" name='name' />
                    <FormError name="name" /> 
                </label>
                <label htmlFor="number">
                    Number 
                    <Field type="tel" name='number' />
                    <FormError name="number" /> 
                </label>
                <button type='submit'>add contact</button>
            </Form>
            </Formik>
        )
    }

// export class ContactForm extends Component {
//     state = {
//         name: '',
//         number:''
//     }
    
//     handelChange = (e) => {
//         const { name, value } = e.target;
//         this.setState({[name]:value})
//     }
//     handelSubmit = (e) => {
//         e.preventDefault();
//         this.props.onSubmit({ ...this.state })
//         this.setState({ name: '', number:''})
//     }
//     render() {
//         const { name,number } = this.state;
//         return (
//             <form onSubmit={this.handelSubmit}>
//                 <label htmlFor="">
//                     Name
//                     <input type="text" name= 'name' value={name} onChange={this.handelChange}/>
//                 </label>
//                 <label htmlFor="">
//                     Number 
//                      <input type="tel" name='number' value={number} onChange={this.handelChange}/>
//                 </label>
//                 <button type='submit'>add contact</button>
//             </form>
//         )
//     }
// }
