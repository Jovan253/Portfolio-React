import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import {useEffect, useRef, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faCss3Alt, faHtml5, faJs, faJava, faPython } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const aboutFlag = useRef(false) //here I am creating a flag

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
                    I'm a very ambitious front-end developer looking for a role in an
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                </p>
                <p align="LEFT">
                    I'm quiet confident, naturally curious, and perpetually working on
                    improving my chops one design problem at a time.
                </p>
                <p>
                    If I need to define myself in one sentence that would be a family
                    person, father of a beautiful daughter, a sports fanatic,
                    photography enthusiast, and tech-obsessed!!!
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} color='#61dbfb'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3Alt} color='#0f74b8'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faHtml5} color='#e54c21'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJs} color='#fcd83a'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJava} color='#3583a3'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faPython} color='#FFca1d'/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default About;