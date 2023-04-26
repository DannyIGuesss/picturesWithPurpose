import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import MainPage from './components/mainpage';
import Contact from './components/contact';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
