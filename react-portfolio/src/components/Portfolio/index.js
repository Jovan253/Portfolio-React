import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import {useEffect, useRef, useState} from 'react';
import portfolioData from '../../data/portfolio.json';

const Portfolio = () => {
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

    const renderPortfolio = (portfolio) => {
        return (
            <>                       
            <div className='images-container'>                
                {
                    portfolio.map((port, i) =>{
                        return (                            
                            <div key={i} className='image-box'>
                                <img src={port.cover} alt='portfolio' className='portfolio-image'/>
                                <div className='content'>
                                    <p className='title'>{port.title}</p>
                                    <h4 className='description'>{port.description}</h4>
                                    <button className='btn' onClick={()=> window.open(port.url)}>
                                        View
                                    </button>
                                </div>
                            </div>                            
                        )
                    })
                }
            </div>
            </>
        )
    }

    return (
        <>
        <div className='container portfolio-page'>            
            <h1 className='page-title'>
                <AnimatedLetters letterClass={letterClass} strArray={"Portfolio".split("")} idx={15}/>
            </h1>
            <h2>Personal projects:</h2> 
            <div>{renderPortfolio(portfolioData.portfolio)}</div>
            <h2>Professional projects:</h2>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Portfolio;