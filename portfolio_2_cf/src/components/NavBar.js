import { Route, Routes, Link } from 'react-router-dom';
import '../App.css'


const NavBar = () => {
  return (
    <header className="header">
		<Link to='/'><h1 className="logo">Christian Fortin</h1></Link>
      <ul className="main-nav">
          <Link to='/Projects'><li className='nav-li'>Projects</li></Link>
          <a href="https://docs.google.com/document/d/1RTuiJZeeaS0zX6b9pzjtCkSRCgmj31PcRB6Sq4Yf0IA/edit" target="_blank" rel="noopener noreferrer" ><li className='nav-li'>Resume</li></a>
          <Link to='/Education'><li className='nav-li'>Education</li></Link>
          <Link to='/MoreAboutMe'><li className='nav-li'>About Me</li></Link>
      </ul>
	</header> 
  )
}

export default NavBar