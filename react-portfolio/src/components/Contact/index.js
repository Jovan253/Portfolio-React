import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const contactFlag = useRef(false) //here I am creating a flag
    const form = useRef()

    useEffect(() => {
     if (!contactFlag.current) { //using the flag to check if component mounted
        contactFlag.current = true //updating flag
      setTimeout(() => {
       setLetterClass('text-animate-hover')
      }, 3000)
     }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_2q44zhq', 'template_0qimvdq', form.current, 'Nci0ZRh0igpq65uUm')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            (error) => {
              alert('Failed to send the message, please try again');
              console.log(error.text);
            }
          )
    }

    return (
        <>
        <div className='container contact-page' >
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','m','e']} idx={15}/>
                </h1>
                <p>
                    I am interested in any opportunities. 
                    Feel free to contact me using the below form.
                </p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                        <li className="half">
                            <input placeholder="Name" type="text" name="name" required />
                        </li>
                        <li className="half">
                            <input
                                placeholder="Email"
                                type="email"
                                name="email"
                                required
                            />
                        </li>
                        <li>
                            <input
                                placeholder="Subject"
                                type="text"
                                name="subject"
                                required
                            />
                        </li>
                        <li>
                            <textarea
                                placeholder="Message"
                                name="message"
                                required
                            ></textarea>
                        </li>
                        <li>
                            <input type="submit" className="flat-button" value="SEND" />
                        </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className="info-map">
                Jovan Hadzić,
                <br />
                England,
                <br />
                50 Quentin Road <br />
                London <br />
                <br />
                <span>jhadzic253@gmail.com</span>
            </div>
            <div className="map-wrap">
            <MapContainer center={[51.46178, 0.00502]} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[51.46178, 0.00502]}>
                <Popup>Jovan lives here</Popup>
                </Marker>
            </MapContainer>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Contact