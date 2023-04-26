import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import MainPage from './components/mainpage';
import Contact from './components/contact';
import AboutMe from './components/aboutMe';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/aboutMe" element={<AboutMe/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
