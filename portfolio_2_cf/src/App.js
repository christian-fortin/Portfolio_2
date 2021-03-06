import './App.css';
import { Route, Routes,} from 'react-router-dom';
import NavBar from './components/NavBar';
import PastWork from './components/PastWork';
import Projects from './components/Projects';
import MoreAboutMe from './components/MoreAboutMe';
import Education from './components/Education';
import Home from './components/Home';
import MoreProjects from './components/MoreProjects';


// NEXT THING YOU DO SHOULD BE TO ADD THE LINKS


function App() {
  return (
    <>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/PastWork" element={<PastWork/>}/>
          <Route path="/Education" element={<Education/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/MoreProjects" element={<MoreProjects/>}/>
          <Route path="/MoreAboutMe" element={<MoreAboutMe/>}/>
      </Routes>
    </>
  );
}

export default App;
