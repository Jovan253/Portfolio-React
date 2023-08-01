import './index.scss';
import {useRef, useEffect} from 'react';


const Logo = () => {
    const bgRef = useRef();
    // const outlineLogoRef = useRef(); 
  //   const mobileScreenWidth = 768; // Adjust this value to your desired mobile screen width
  // const columnCount = window.innerWidth <= mobileScreenWidth ? 10 : 19;    
    const columnCount = 19;
    const columns = Array(columnCount).fill(null);



    return (
        <div className="logo-container" ref={bgRef}>
          <div className='flag'>            
            {columns.map((_, index) => (
              <div key={index} className='column'></div>
            ))}
          </div>
        </div>
    )
}

export default Logo;
