import '../App.css';
import { Route, Routes, Link } from 'react-router-dom';

const Home = () => {
  return (
<div id="square-container">
    <div id="grid-container">



    <div className="box-work"><Link to='/PastWork' className='homeLinks'>Resume</Link></div>



    <div className="box-education"><Link to='/Projects' className='homeLinks'>Projects</Link></div>



    <div className="box-projects"><Link to='/Education' className='homeLinks'>Education</Link></div>



    <div className="box-moreAboutMe"><Link to='/MoreAboutMe' className='homeLinks'>About Me</Link></div>


    </div>
</div>
  )
}

export default Home