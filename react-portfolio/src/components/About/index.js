import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import {useEffect, useRef, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faGitAlt, faJava, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const aboutFlag = useRef(false) //here I am creating a flag
    const pdfUrl = process.env.PUBLIC_URL + '/resume.pdf';

    useEffect(() => {
     if (!aboutFlag.current) { //using the flag to check if component mounted
      aboutFlag.current = true //updating flag
      setTimeout(() => {
       setLetterClass('text-animate-hover')
      }, 3000)
     }
    }, [])

    return(
        <>
        <div className="container about-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t',' ','m','e']} idx={15}/>
                </h1>
                <p>
                    I'm a hardworking student in the final year of my degree and am
                    looking for a role in the IT field with the oppurtunity to work
                    on intriguing and challenging projects. 
                </p>
                <p align="LEFT">
                    I enjoy solving problems, working on projects and improving my
                    coding skills.                    
                </p>
                <p>
                    To find out more about me access my CV <a href={pdfUrl} download="CV.pdf" className="download-button">here</a>!
                </p>
                
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color='#61dbfb'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faJava} color='#3583a3'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faPython} color='#FFca1d'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faGitAlt} color='#f44d27'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faDatabase} color='#0F1830'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faCloudArrowUp} color='#1476F3'/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default About;