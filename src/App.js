import './App.css';
import Home from './Components/Pages/Home';
import SignUp from './Components/Pages/SignUp';
import Login from './Components/Pages/Login';
import Chat from './Components/Pages/Chat';
import {BrowserRouter, Routes,Route} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login"element={<Login/>}/>
      <Route path="/chat"element={<Chat/>}/>
    </Routes>
    
    </BrowserRouter>
     
     
     
  );
}

export default App;
