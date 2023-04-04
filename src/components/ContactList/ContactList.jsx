import { useDispatch, useSelector } from "react-redux";
import { deleteContact} from "redux/operations";


export const ContactList = () => {

const contacts = useSelector(state =>state.contacts.items );
const filter = useSelector(state => state.filter);
const dispatch = useDispatch();
 
  const getVisibleContacts = () => {
    const newFilter = filter.toLowerCase();
    
    return contacts.filter(contact => contact.name.toLowerCase().includes(newFilter));
  }
  const visibleContacts = getVisibleContacts();
  
  return (
   
        <ul>
            {visibleContacts.map(({name,number,id}) => (
                <li key={id}>{name} {number} <button type="button" onClick={()=>dispatch(deleteContact(id))}>Delete</button></li> 
            ))}
      </ul>
  )
}
