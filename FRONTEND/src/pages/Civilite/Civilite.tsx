
import { useEffect, useState } from 'react'
import {getAllCivilite,deleteCivilite} from '../../data/Repository'
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Civilite { 
  id: number;
  libelle: string;
}



function Civilite() {
  const [civilites, setCivilite] = useState<Civilite[]>([]);

  useEffect(() => {
    async function GetCiviliteFetch () {
      const civilites = await getAllCivilite();
      setCivilite(civilites);
  }
  GetCiviliteFetch ();
  },[]);

  async function handleDeleteCivilite(id: number) {
    await deleteCivilite(id);
    const filteredcivilites = civilites.filter (civilite => civilite.id !== id);
    setCivilite(filteredcivilites);
  }

  return (
    <>
      <div className='table_page'>
      <h2>Gestion des civilités<Link to='/civilite/create'>Ajouter</Link></h2>
      {civilites.length > 0  ?  
        <table id="customers">
        <thead>
          <tr>
            <th>ID</th>
            <th>Civilité</th>
            <th><FontAwesomeIcon icon="fa-solid fa-heart-circle-exclamation" /></th>
            <th><FontAwesomeIcon icon="fa-solid fa-heart-circle-xmark" /></th>
          </tr>
        </thead>
        <tbody>
          {civilites.map((civilite) => (
                  <tr key={civilite.id}>
                  <td>{civilite.id}</td>
                  <td>{civilite.libelle}</td>
                  <td><Link to={`/civilite/${civilite.id}`}><FontAwesomeIcon icon="fa-solid fa-file-pen" /></Link></td>
                  <td ><FontAwesomeIcon icon="fa-solid fa-trash-can" onClick={() => handleDeleteCivilite(civilite.id)}/></td>
                </tr>
            ))}
        </tbody>
      </table>
       : 
       <h3>Aucune Civilité trouvée</h3>
        }
      </div>
    </>
  )
}

export default Civilite
