import profilePic from '../assets/Gaurav.jpg';
import Social from './Social';
import Connect from './Connect';
import { useState, UseEffect } from 'react';
function Home(){
    const [theme, setTheme] = useState(()=>{
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? storedTheme : 'light';
    })
    
    return(
        <>
       
        <div className="home-container">
            <img src={profilePic} className='user' alt="" />
            <h2>Hey I am Gaurav Kolhe</h2>
            <p>Hello there! I'm Gaurav Kolhe, a passionate and dedicated MERN (MongoDB, Express.js, React.js, Node.js) stack developer eager to embark on an exciting journey in the world of web development. As a recent graduate, I bring fresh perspectives, a strong foundation in programming, and a commitment to staying at the forefront of emerging technologies.</p>
                <div className='connect-flex'>
                <a href="https://drive.google.com/file/d/1xeO3NmpifbuE3XTLur1pncmeIJ87_tSF/view?usp=drive_link" className="connect">My Resume</a>
                <a href="./social" className="connect">Follow Me on social media</a>
                <a href="./connect" className="connect">Let's talk!</a>
                
            </div>
        </div>
        </>
    )
}
export default Home;