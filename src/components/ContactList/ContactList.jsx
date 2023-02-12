


export const ContactList = ({contacts}) => {
    return (
        <ul>
            {contacts.map(({name,number}) => (
                <li key={name}>{name} {number} <button type="button">Delete</button></li> 
            ))}
      </ul>
  )
}
