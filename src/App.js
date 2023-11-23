import './App.scss';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoginForm from "./pages/LoginForm/LoginForm";
import HomePage from "./pages/HomePage/HomePage";
import QuizPage from './pages/QuizPage/QuizPage';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [idUser, setIdUser] = useState();

  useEffect(() => {
    const fetchLoguin = async () => {
      try{
        // ver llamar al endpoint del user
        // si traigo toda la data del usuario entonces
        setIdUser(1);
        
      } catch(error){
        console.log("Error fetching data user.")
      }
    }
    fetchLoguin();
  }, [loggedIn])

  const handleLogin = async (username, password) => {
    try {
      // ...
      // si usuario y clave valida setear en true el logeo
      setLoggedIn(true);
      
      
      
      // ...
console.log("el usario es:",idUser);
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path='/vocabulary' element={<HomePage/>}/>
        <Route path="/quiz/:idQuiz/:idUser/:idWord" element={<QuizPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;