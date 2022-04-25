import { Route, Routes, Link } from 'react-router-dom';
import '../App.css'


const NavBar = () => {
  return (
    <header className="header">
		<h1 className="logo"><a href="#">Christian Fortin</a></h1>
      <ul className="main-nav">
          <li><a href="#">Projects</a></li>
          <li><a href="#">Resume</a></li>
          <li><a href="#">Education</a></li>
          <li><a href="#">About Me</a></li>
      </ul>
	</header> 
  )
}

export default NavBar