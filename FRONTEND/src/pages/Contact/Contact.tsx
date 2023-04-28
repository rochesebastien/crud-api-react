
import { useEffect, useState } from 'react'
import {getAllContacts, deleteContact,getAllCivilite} from '../../data/Repository'
import { Link } from "react-router-dom";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Contact { 
  id: number;
  nom: string;
  prenom: string;
  idCivilite: number;
}


function Contact() {
  const [contacts, setContacts] =  useState<Contact[]>([]);

  useEffect(() => {
    async function GetContactsFetch () {
      const contacts = await getAllContacts();
      setContacts(contacts);  
      console.log(contacts);
  }
  GetContactsFetch ();
  },[]);


  async function handleDeleteContact(id: number) {
    await deleteContact(id);
    const filteredcontacts = contacts.filter (contact => contact.id !== id);
    setContacts(filteredcontacts);
  }
  
  return (
    <>
      <div className="table_page">
        <h2>Gestion des contacts<Link to='/contact/create'>Ajouter</Link></h2>
        {contacts.length > 0  ?  
        <table id="customers">  
        <thead>
          <tr>
             <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Civilité</th>
            
            <th><FontAwesomeIcon icon="fa-solid fa-person-circle-check" /></th>
            <th><FontAwesomeIcon icon="fa-solid fa-person-circle-minus" /></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contacts) => (
                   <tr key={contacts.id}>
                    <td>{contacts.id}</td>
                   <td>{contacts.nom}</td>
                   <td>{contacts.prenom}</td>
                   <td>{contacts.idCivilite}</td>
                   <td><Link to={`/contact/${contacts.id}`}><FontAwesomeIcon icon="fa-solid fa-file-pen" /></Link></td>
                   <td ><FontAwesomeIcon icon="fa-solid fa-trash-can" onClick={() => handleDeleteContact(contacts.id)}/></td>
                 </tr>
            ))}
        </tbody>  
      </table>
        : 
        <h3>Aucun Contact trouvé</h3>
         }
      </div>
    </>
  )
}

export default Contact
