import './index.scss';
import {Link, NavLink} from 'react-router-dom';
import LogoJ from '../../assets/images/logo-j.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return(    
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoJ} alt="logo"/>
            <img className='sub-logo' src={LogoSubtitle} alt="jovan"/>
        </Link>
     
        <nav className={showNav ? 'mobile-show':''}>        
            <NavLink to="/" onClick={()=>setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink className="about-link" to="/about" onClick={()=>setShowNav(false)}>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink className="contact-link" to="/contact" onClick={()=>setShowNav(false)}>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
            <NavLink className="portfolio-link" to="/portfolio" onClick={()=>setShowNav(false)}>
                <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e' />
            </NavLink>
            <FontAwesomeIcon icon={faClose} color='limegreen' size='3x' className='close-icon' onClick={()=>setShowNav(false)}/>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/jovan-hadzic-6644321ba/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
        <FontAwesomeIcon icon={faBars} color='limegreen' size='3x' className='hamburger-icon' onClick={()=> setShowNav(true)}/>
    </div>   
    
    )
}

export default Sidebar;