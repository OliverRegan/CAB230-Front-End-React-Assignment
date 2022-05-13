// Import react components
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
// Import custom components
import Layout from './Layout';

// Import custom components
import Home from './Home';
import Volcanoes from './Volcanoes';
import Volcano from './Volcano';
import LoginRegister from './LoginRegister';



function App() {

  // setup for JWT
  const [JWT, setJWT] = useState('');
  const [id, setID] = useState(0);

  function returnID(id) {
    setID(id);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout token={JWT} setToken={setJWT} />}>
          <Route index element={<Home />} />
          <Route path='/volcanoes' element={<Volcanoes idFunc={returnID} />} />
          <Route path='/volcano/:id' element={<Volcano token={JWT} volcanoId={id} />} />
          <Route path='/register' element={<LoginRegister type='Register' />} />
          <Route path='/login' element={<LoginRegister type='Login' tokenSet={setJWT} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
