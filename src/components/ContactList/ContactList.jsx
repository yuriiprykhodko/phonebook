import { useSelector } from "react-redux";
import { Contact } from "components/Contact/Contact";


export const ContactList = ({items}) => {

  const filter = useSelector(state => state.filter);

  const getVisibleContacts = () => {
    const newFilter = filter.toLowerCase();
    if (items) {
      return items.filter(contact => contact.name.toLowerCase().includes(newFilter));
    }
  }
  const visibleContacts = getVisibleContacts();

  return (
    <div>
       <ul>
      {items && visibleContacts.map((item) => (
        <li key={item.id}>
              <Contact item={item} />
        </li>
            ))}
      </ul>
   </div>
       
  )
}
