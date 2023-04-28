import './Navbar.css'
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import Img1 from '../../assets/logo.png'

function Navbar() {

  return (
    <>
      <nav className='navbar'>
        <div id="logo">     
            <img src={Img1} alt=""/>
        </div>
            <ul className='navbar-list'>
                 <Link to="/home"><FontAwesomeIcon icon={faHome}/> Accueil</Link>
                 <Link to="/civilite"><FontAwesomeIcon icon="fa-solid fa-heart-circle-bolt" />Civilité</Link>     
                 <Link to="/civilite/create"><FontAwesomeIcon icon="fa-solid fa-heart-circle-plus" />Ajouter civilité</Link>      
                 <Link to="/contact"><FontAwesomeIcon icon="fa-solid fa-people-group" />Contact</Link>
                 <Link to="/contact/create"><FontAwesomeIcon icon="fa-solid fa-person-circle-plus" />Ajouter contact</Link>
            </ul>
      </nav>
    </>
  )
}

export default Navbar
