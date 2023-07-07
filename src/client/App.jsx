import './App.css';
import {TodoWrapper} from "../TODOparts/TodoWrapper";
import { Routes, Route, Navigate } from 'react-router-dom';
import Form from '../components/Form';
import {useState} from 'react'

function App() {
  const[auth, setAuth] = useState(false)
  return (
    <div className="App">
      <header className='App-header'>
        <Routes>
          <Route path='/' element={!auth ? <Form setAuth={setAuth}/> : <Navigate to='/secret' />}/>
          <Route path='/secret' element={auth ? <TodoWrapper/> : <Navigate to='/'/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;