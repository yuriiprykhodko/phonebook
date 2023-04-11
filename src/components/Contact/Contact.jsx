import { useDeleteContactMutation } from "redux/contactsSlice";

export const Contact = ({item}) => {
      const [ deleteContact, {isLoading} ] = useDeleteContactMutation();

    return (
        <div>   
            {item.name} {item.number} <button type="button" disabled={isLoading} onClick={()=>deleteContact(item.id)}>Delete</button> 
    </div>
  )
}
