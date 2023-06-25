import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import DashbordPage from './pages/DashbordPage';
import CoinPage from './pages/CoinPage';
import ComparePage from './pages/ComparePage';
import Watchlist from './pages/Watchlist';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/dashbord' element={<DashbordPage/>}/>
        <Route path='/coinpage/:id' element={<CoinPage/>}/>
        <Route path='/compare' element={<ComparePage/>}/>
        <Route path='/watchlist' element={<Watchlist/>}/>


      </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
