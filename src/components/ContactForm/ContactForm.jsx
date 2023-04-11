
import { Formik, Form,Field,ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useAddContactMutation } from 'redux/contactsSlice';

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

export const ContactForm=({items})=>{

const [addContact, result] = useAddContactMutation()
    
    const handleSubmit = async (values, { resetForm }) => {  
        try {
             if (items && items.some(contact => contact.name === values.name)) {
            alert(`${values.name} is already contact`)
            return;
            }
            if (result.isSuccess) {
                alert(`${values.name} is added`)
            }
           await addContact(values)
            resetForm();
        } catch (error) {
        }
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
                <button type='submit' disabled={result.isLoading}>add contact</button>
            </Form>
            </Formik>
        )
    }

