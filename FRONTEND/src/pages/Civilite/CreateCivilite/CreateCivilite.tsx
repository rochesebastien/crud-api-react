// import './CreateContact.css'
import {createCivilite,getCiviliteByID, updateCivilite} from '../../../data/Repository'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface Civilite { 
  id: number;
  libelle: string;
}





function CreateCivilite() {
    const {id}= useParams(); 
    const [civilite, setCivilite] = useState<Civilite>();
    const navigate = useNavigate();
    
    useEffect(() => {
      async function GetCiviliteFetch () {
        if(id){
          const civilite = await getCiviliteByID(Number(id));
          setCivilite(civilite);
        }
        
    }
    GetCiviliteFetch ();
    },[id]);

    async function HandleAddCivilite(event:any) {
      event.preventDefault();
      const libelle = event.target.elements[0].value;
      if(id){
        await updateCivilite(Number(id),libelle);      
      } else {
        await createCivilite(libelle);
      }
      navigate('/civilite');
    }

  return (
    <>
      <div className='form-ctn'> 
        <form onSubmit={()=>HandleAddCivilite(event)}>
            <h2>{(id ? `Modifier la civilité ${id}` : 'Ajouter une civilité')}</h2>
            <input type="text" name="" id="" placeholder={(civilite ? `Libelle : ${civilite.libelle}` : 'Libellé')} />
            <input type="submit" name="" id="" value="Valider" />
        </form>     
      </div>
    </>
  )
}

export default CreateCivilite
