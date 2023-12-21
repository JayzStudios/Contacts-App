import PropTypes from "prop-types";
import { useState } from "react";

const ListContacts = ({contactList, onDeleteContact}) => {
  const [query, setQuery] = useState("");
  const updateQuery = (userInput) => {
    setQuery(userInput);
  }

  const filteredContacts = query === "" ? contactList : contactList.filter((c) => c.name.toLowerCase().includes(query.trim().toLowerCase()));


  return (
    <div className="list-contacts">
      <div className="list-contacts-top">
        <input 
        className="search-contacts" 
        type="text" 
        placeholder="Search Contacts" 
        value={query}
        onChange={(event) => updateQuery(event.target.value)}
        ></input>
      </div>


      <ol className="contact-list">

        {
          filteredContacts.length !== contactList.length && (      
          <div className="showing-contacts">
          <span>
            Now showing {filteredContacts.length} out of {contactList.length}
          </span>
          <button onClick={() => updateQuery("")}> Show all </button>         
          </div>)
        }
        
        {filteredContacts.map((contact) => 
            <li className="contact-list-item" key={contact.id}>
                <div className="contact-avatar" style={{backgroundImage: `url(${contact.avatarURL})`}}></div>
                <div className="contact-details">
                    <p>{contact.name}</p>
                    <p>{contact.handle}</p>
                </div>
                <button className="contact-remove" onClick={() => onDeleteContact(contact)}></button>
            </li>
        )}
  
  
      </ol>
    </div>
  
  );
};

ListContacts.propTypes = {
  contactList: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
};

export default ListContacts;
