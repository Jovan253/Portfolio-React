import LogoTitle from '../../assets/images/logo-j.png';
import {Link} from 'react-router-dom';
import './index.scss';
import {useState, useEffect, useRef} from 'react';
import AnimatedLetters from '../AnimatedLetters';
// import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['o', 'v', 'a', 'n', ',']
    const jobArray = ['a', ' ', 'C', 'o', 'm', 'p', 'u', 't', 'e', 'r', ' ', 'S', 'c', 'i', 'e', 'n', 'c', 'e', ' ', 'g', 'r', 'a', 'd', 'u', 'a', 't', 'e']    

    const mountFlag = useRef(false) //here I am creating a flag

    useEffect(() => {
     if (!mountFlag.current) { //using the flag to check if component mounted
      mountFlag.current = true //updating flag
      setTimeout(() => {
       setLetterClass('text-animate-hover')
      }, 3000)
     }
    }, [])
    

    return (
        <>
        <div className='container home-page'>
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>                
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>                
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={20}/>                
                </h1>

                <div className="hover-zone">
                    <h2>
                        from the University of Warwick
                    </h2>
                    <br/>
                    <p>
                        I'm open to exciting opportunities in the tech industry. Feel free to reach out!
                    </p>
                </div>

                <Link to='/contact' className="flat-button">
                    CONTACT ME
                </Link>
            </div>
            {/* Might think its russian flag which wouldnt be great <Logo/> */}
        </div>
        <Loader type='pacman'/>
        </>
    );
}

export default Home;