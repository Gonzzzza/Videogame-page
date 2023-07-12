import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Home';
import CreateVideogame from './Components/CreateVideogame/CreateVideogame';
import GameDetail from './Components/GameDetail/GameDetail';
import axios from 'axios';

axios.defaults.baseURL = 'https://videogame-page-production.up.railway.app/';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/home' element={<Home/>} />
          <Route path='/create' element={<CreateVideogame/>} />
          <Route path='/detail/:id' element={<GameDetail/>} />
        </Routes> 
      </div>
    </BrowserRouter>
  ); 
} 

export default App;
