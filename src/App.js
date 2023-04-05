import './App.css';
import Home from './Components/Pages/Home';
import SignUp from './Components/Pages/SignUp'
import Login from './Components/Pages/Login';
import Chat from './Components/Pages/Chat';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Navigation from './Components/Messenger/Navigation';
import { ApiContext,socket } from './Components/ApiContext';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function App() {
  const [rooms, setRooms] = useState([]);
    const [currentRoom, setCurrentRoom] = useState([]);
    const [members, setMembers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [privateMemberMsg, setPrivateMemberMsg] = useState({});
    const [newMessages, setNewMessages] = useState({});
    const user = useSelector((state) => state.user);
  return (
    <ApiContext.Provider value={{ socket, currentRoom, setCurrentRoom, members, setMembers, messages, setMessages, privateMemberMsg, setPrivateMemberMsg, rooms, setRooms, newMessages, setNewMessages }}>
    <BrowserRouter>
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />} />
            {!user && (
                <>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </>
            )}
            <Route path="/chat" element={<Chat />} />
        </Routes>
    </BrowserRouter>
</ApiContext.Provider>
     
     
  );
}

export default App;
