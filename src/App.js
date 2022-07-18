import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { Routes, Route } from 'react-router-dom';
import { useState, useContext, createContext } from 'react'
import ProtectedRoute from './authRoute/ProtectedRoute';

export const UserContext = createContext();

function App() {

  const [context, setContext] = useState(false);

  return (
    <div className="App">
      <UserContext.Provider value={[context, setContext]}>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route element={<ProtectedRoute/>}>
            <Route path='/home' element={<Home />}/>
          </Route>
        </Routes>
        </UserContext.Provider>
    </div>
  );
}

export default App;
