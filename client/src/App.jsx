import Navber from './Components/Navber';
import './input.css';
import { Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';
import TodoHome from './Components/TodoHome';

function App() {
  return (
    <div>
      <Navber />
      <Routes>
        <Route path='/' element={<TodoHome/> } />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
