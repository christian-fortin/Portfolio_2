import '../App.css';
import { Route, Routes, Link } from 'react-router-dom';

const Home = () => {
  return (
<div id="square-container">
    <div id="grid-container">



    <div className="box-work"><a href="https://docs.google.com/document/d/1RTuiJZeeaS0zX6b9pzjtCkSRCgmj31PcRB6Sq4Yf0IA/edit" target="_blank" rel="noopener noreferrer" className='homeLinks' id='resumeLink-home'>Resume</a></div>



    <div className="box-education"><Link to='/Projects' className='homeLinks' id='projectLink-home'>Projects</Link></div>



    <div className="box-projects"><Link to='/Education' className='homeLinks' id='educationLink-home'>Education</Link></div>



    <div className="box-moreAboutMe"><Link to='/MoreAboutMe' className='homeLinks' id='aboutmeLink-home'>About Me</Link></div>


    </div>
</div>
  )
}

export default Home