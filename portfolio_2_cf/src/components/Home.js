import '../App.css';
import { Route, Routes, Link } from 'react-router-dom';

const Home = () => {
  return (
<div id="square-container">
    <div id="grid-container">



    <div className="box-work"><a href="https://docs.google.com/document/d/1-TK6B6LmP3zYMHRB08BHtF36oHlUjOmF-CFiMHY7oQk/edit" target="_blank" rel="noopener noreferrer" className='homeLinks' id='resumeLink-home'>Resume</a></div>



    <div className="box-education"><Link to='/Projects' className='homeLinks' id='projectLink-home'>Projects</Link></div>



    <div className="box-projects"><Link to='/Education' className='homeLinks' id='educationLink-home'>Education</Link></div>



    <div className="box-moreAboutMe"><Link to='/MoreAboutMe' className='homeLinks' id='aboutmeLink-home'>About Me</Link></div>

    <div className='gif-holder'>
          <a href="https://farm.one/" target="_blank" rel="noopener noreferrer"><img src="images/plantGrowing.gif" alt="plant gif" className='plantGif'/></a>
          
        </div>
    </div>
</div>
  )
}

export default Home