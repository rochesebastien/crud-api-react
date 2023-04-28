
import {createContact, getAllCivilite, updateContact,getContactByID} from '../../../data/Repository'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


interface Civilite { 
  id: number;
  libelle: string;
}
interface Contact { 
  id: number;
  nom: string;
  prenom: string;
  idCivilite: number;
}

  function  CreateContact() {
    const {id}= useParams(); 
    const navigate = useNavigate();
    const [civilite, setCivilite] = useState<Civilite[]>([]);
    const [contact, setContact] = useState<Contact>();

  useEffect(() => {
    async function GetCiviliteFetch () {
      if(id){
        const contact = await getContactByID(Number(id));
        setContact(contact);
      }
      const civilite = await getAllCivilite();
      setCivilite(civilite); 
  }
  GetCiviliteFetch ();
  },[id]);

  async function HandleAddContact(event:any) {

    event.preventDefault();
    const nom = event.target.elements[0].value;
    const prenom = event.target.elements[1].value;
    const civiliteId = Number(event.target.elements[2].value);
    if(id){
      await updateContact(Number(id),prenom,nom,civiliteId); 
    } else {
      await createContact(nom, prenom, civiliteId);
    }
    
    navigate("/contact");
  }

  return (
    <>
      <div className='form-ctn'> 
        <form onSubmit={()=>HandleAddContact(event)}>
        <h2>{(id ? `Modifier le contact ${id}` : 'Ajouter un contact')}</h2>
            <input type="text" name="" id="" placeholder={(contact ? `Nom : ${contact.nom}` : 'Nom')}/>
            <input type="text" name="" id="" placeholder={(contact ? `Prénom : ${contact.prenom}` : 'Prénom')}/>
            <select name="" id="" defaultValue={(contact  ? contact?.idCivilite : 'none')}>
                <option value="none" disabled>Sexe</option>
                {civilite.map((civilite) => (
                    <option value={civilite.id} key={civilite.id} >{civilite.libelle}</option>
                ))}
            </select>
            <input type="submit" name="" id="" value="Valider" />
        </form>     
      </div>
    </>
  )
}

export default CreateContact
