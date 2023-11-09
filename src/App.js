import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Accuiel from './components/Accuiel';
import Detailscountry from './components/Detailscountry';

function App() {
  const [countrys, setcountrys] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get('https://restcountries.com/v3.1/all');
      return res.data;
    }

    getUsers().then(users => setcountrys(users))
  })
  return (
 <Routes>
  <Route path='/' element={<Accuiel countrys={countrys}/>}/>
  <Route path='/:name' element ={<Detailscountry countrys={countrys}/>}/>
 </Routes>
  );
}

export default App;
