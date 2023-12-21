import "../css/App.css";
import ListContacts from "./ListContacts";
import { useState } from "react";

const App = () => {

  const removeContacts = (contact) => {
    setContacts(contacts.filter((c) => c.id !== contact.id));
  }

  const [contacts, setContacts] = useState([
    {
      id: "karen",
      name: "Karen Ismail",
      handle: "karen_ismail",
      avatarURL: "http://localhost:5001/karen.jpg",
    },
    {
      id: "richard",
      name: "Richard Kalehoff",
      handle: "richardkalehoff",
      avatarURL: "http://localhost:5001/richard.jpg",
    },
    {
      id: "tyler",
      name: "Tyler McGinnis",
      handle: "tylermcginnis",
      avatarURL: "http://localhost:5001/tyler.jpg",
    },
  ]);

  return (<ListContacts contactList={contacts} onDeleteContact={removeContacts}/>);
};

export default App;
